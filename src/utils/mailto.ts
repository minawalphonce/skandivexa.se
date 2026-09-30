import { COMPANY } from '../data/content';

/**
 * Builds a mailto: link addressed to the company inbox.
 * The site is static, so forms hand the message to the visitor's own
 * email program instead of sending it from a server.
 */
export function buildMailto(subject: string, lines: string[]): string {
  const body = lines.join('\r\n');
  return `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function openMailto(subject: string, lines: string[]): void {
  window.location.href = buildMailto(subject, lines);
}
