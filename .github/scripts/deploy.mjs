// Uploads the Vite build output (dist/) to a Loopia SFTP account, deleting
// remote files that no longer exist locally. Uses ssh2-sftp-client (a pure
// JS SFTP client) instead of shelling out to the OS ssh binary or rclone,
// since both hit runner-specific quirks talking to Loopia's SFTP server.
import SftpClient from 'ssh2-sftp-client';
import path from 'node:path';
import fs from 'node:fs/promises';

const {
  SFTP_HOST,
  SFTP_PORT = '22',
  SFTP_USERNAME,
  SFTP_PASSWORD,
  SFTP_REMOTE_DIR,
  LOCAL_DIR = 'dist',
} = process.env;

const EXCLUDE_TOP_LEVEL = new Set(['.htaccess', '.well-known']);

for (const [name, value] of Object.entries({
  SFTP_HOST,
  SFTP_USERNAME,
  SFTP_PASSWORD,
  SFTP_REMOTE_DIR,
})) {
  if (!value) {
    console.error(`::error::${name} is not set`);
    process.exit(1);
  }
}

// Guard against a silent hang: if the whole run takes too long, fail loudly
// instead of leaving the job looking stuck for the default job timeout.
const watchdog = setTimeout(() => {
  console.error('::error::Deploy timed out after 4 minutes (no response from server)');
  process.exit(1);
}, 4 * 60 * 1000);
watchdog.unref?.();

async function listLocalFiles(dir, base = dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.relative(base, full).split(path.sep).join('/');
    if (entry.isDirectory()) {
      out.push(...(await listLocalFiles(full, base)));
    } else {
      out.push(rel);
    }
  }
  return out;
}

async function ensureRemoteDir(sftp, remoteDir) {
  const parts = remoteDir.split('/').filter(Boolean);
  let current = remoteDir.startsWith('/') ? '' : '.';
  for (const part of parts) {
    current = current ? `${current}/${part}` : `/${part}`;
    if (!(await sftp.exists(current))) {
      await sftp.mkdir(current);
    }
  }
}

async function uploadAll(sftp, localDir, remoteDir, relFiles) {
  let count = 0;
  for (const rel of relFiles) {
    const remotePath = `${remoteDir}/${rel}`;
    const remoteParentDir = path.dirname(remotePath);
    if (!(await sftp.exists(remoteParentDir))) {
      await sftp.mkdir(remoteParentDir, true);
    }
    await sftp.put(path.join(localDir, rel), remotePath);
    count += 1;
    if (count % 10 === 0 || count === relFiles.length) {
      console.log(`Uploaded ${count}/${relFiles.length}: ${rel}`);
    }
  }
}

async function listRemoteFiles(sftp, remoteDir, base = remoteDir) {
  const out = [];
  for (const entry of await sftp.list(remoteDir)) {
    const full = `${remoteDir}/${entry.name}`;
    const rel = full.slice(base.length + 1);
    const topLevel = rel.split('/')[0];
    if (EXCLUDE_TOP_LEVEL.has(topLevel)) continue;
    if (entry.type === 'd') {
      out.push(...(await listRemoteFiles(sftp, full, base)));
    } else {
      out.push(rel);
    }
  }
  return out;
}

async function removeStale(sftp, remoteDir, localSet, remoteFiles) {
  const stale = remoteFiles.filter((f) => !localSet.has(f));
  const staleDirs = new Set();
  for (const rel of stale) {
    console.log(`Removing stale remote file: ${rel}`);
    await sftp.delete(`${remoteDir}/${rel}`);
    let dir = path.dirname(rel);
    while (dir && dir !== '.') {
      staleDirs.add(dir);
      dir = path.dirname(dir);
    }
  }
  // Remove directories left empty by the deletions above, deepest first.
  for (const dir of [...staleDirs].sort((a, b) => b.length - a.length)) {
    const remotePath = `${remoteDir}/${dir}`;
    if ((await sftp.exists(remotePath)) && (await sftp.list(remotePath)).length === 0) {
      console.log(`Removing now-empty remote folder: ${dir}`);
      await sftp.rmdir(remotePath);
    }
  }
  return stale.length;
}

async function main() {
  const remoteDir = SFTP_REMOTE_DIR.replace(/\/+$/, '');
  const localDir = path.resolve(LOCAL_DIR);

  console.log(`Connecting to ${SFTP_HOST}:${SFTP_PORT} as ${SFTP_USERNAME}`);
  const sftp = new SftpClient();
  await sftp.connect({
    host: SFTP_HOST,
    port: Number(SFTP_PORT),
    username: SFTP_USERNAME,
    password: SFTP_PASSWORD,
    readyTimeout: 20000,
    retries: 1,
  });

  try {
    console.log(`Checking remote folder ${remoteDir}`);
    if (!(await sftp.exists(remoteDir))) {
      throw new Error(
        `Remote folder "${remoteDir}" does not exist. Check the SFTP_REMOTE_DIR variable.`,
      );
    }

    const relFiles = await listLocalFiles(localDir);
    console.log(`Uploading ${relFiles.length} files from ${LOCAL_DIR}/ to ${remoteDir}`);
    await uploadAll(sftp, localDir, remoteDir, relFiles);

    console.log('Checking for stale remote files to remove...');
    const remoteFiles = await listRemoteFiles(sftp, remoteDir);
    const localSet = new Set(relFiles);
    const removed = await removeStale(sftp, remoteDir, localSet, remoteFiles);

    console.log(`Done. Uploaded ${relFiles.length} files, removed ${removed} stale files.`);
  } finally {
    await sftp.end();
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(`::error::${err.message}`);
    process.exit(1);
  });
