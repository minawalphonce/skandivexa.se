import React, { useEffect } from 'react';
import { Language } from '../types';
import { COMPANY } from '../data/content';
import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

type Section = { title: string; body: string[] };

const CONTENT: Record<Language, { title: string; updated: string; intro: string; sections: Section[]; close: string }> = {
  sv: {
    title: 'Integritetspolicy',
    updated: 'Senast uppdaterad: 30 september 2026',
    intro: `${COMPANY.name} (org.nr ${COMPANY.orgNumber}) är personuppgiftsansvarig för de personuppgifter vi tar emot. Här beskriver vi kortfattat hur vi hanterar dem.`,
    sections: [
      {
        title: 'Vilka uppgifter vi behandlar',
        body: [
          'När du kontaktar oss via e-post, telefon eller formulären på webbplatsen behandlar vi de uppgifter du själv lämnar, till exempel namn, telefonnummer, e-postadress, ort, adress, företagsnamn och en beskrivning av ditt projekt.',
          'Om du anlitar oss med ROT-avdrag behöver vi även ditt personnummer och fastighetsbeteckning eller bostadsrättsförening, eftersom Skatteverket kräver det.',
        ],
      },
      {
        title: 'Varför vi behandlar uppgifterna',
        body: [
          'Vi använder uppgifterna för att besvara din förfrågan, ta fram en offert, utföra och fakturera uppdraget samt ansöka om ROT-avdrag. Den rättsliga grunden är avtal eller åtgärder inför ett avtal, samt rättslig förpliktelse när det gäller bokföring och ROT-avdrag.',
        ],
      },
      {
        title: 'Hur länge vi sparar uppgifterna',
        body: [
          'Förfrågningar som inte leder till ett uppdrag raderas senast 12 månader efter sista kontakt. Uppgifter som ingår i bokföringen, till exempel fakturor, sparas i sju år enligt bokföringslagen.',
        ],
      },
      {
        title: 'Vem vi delar uppgifterna med',
        body: [
          'Vi säljer aldrig dina uppgifter. Vi delar dem bara när det behövs för uppdraget, till exempel med Skatteverket vid ROT-avdrag, med underentreprenörer som utför delar av arbetet och med leverantörer av e-post och bokföring.',
        ],
      },
      {
        title: 'Webbplatsen',
        body: [
          'Formulären på webbplatsen sparar inga uppgifter. De öppnar ett e-postmeddelande i ditt eget e-postprogram, och uppgifterna når oss först när du själv skickar det. Webbplatsen använder inga cookies för spårning eller marknadsföring. Typsnitt hämtas från Google Fonts, vilket innebär att din IP-adress skickas till Google när sidan laddas.',
        ],
      },
      {
        title: 'Dina rättigheter',
        body: [
          'Du har rätt att få veta vilka uppgifter vi har om dig, att få felaktiga uppgifter rättade och att få uppgifter raderade när vi inte längre behöver dem. Du kan också invända mot eller begära begränsning av behandlingen.',
          `Kontakta oss på ${COMPANY.email} om du vill använda dina rättigheter. Om du är missnöjd med hur vi hanterar dina uppgifter kan du klaga hos Integritetsskyddsmyndigheten (IMY), imy.se.`,
        ],
      },
    ],
    close: 'Stäng',
  },
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: 30 September 2026',
    intro: `${COMPANY.name} (org. no. ${COMPANY.orgNumber}) is the data controller for the personal data we receive. This is a short description of how we handle it.`,
    sections: [
      {
        title: 'What data we process',
        body: [
          'When you contact us by email, phone or the forms on this website, we process the details you give us, such as your name, phone number, email address, city, address, company name and a description of your project.',
          'If you hire us with the ROT deduction, we also need your personal identity number and property designation or housing cooperative, as the Swedish Tax Agency requires them.',
        ],
      },
      {
        title: 'Why we process it',
        body: [
          'We use the data to answer your request, prepare a quote, carry out and invoice the work, and apply for the ROT deduction. The legal basis is a contract or steps taken before entering one, and legal obligations for bookkeeping and the ROT deduction.',
        ],
      },
      {
        title: 'How long we keep it',
        body: [
          'Requests that do not lead to an assignment are deleted no later than 12 months after the last contact. Data that forms part of our accounting records, such as invoices, is kept for seven years as required by the Swedish Bookkeeping Act.',
        ],
      },
      {
        title: 'Who we share it with',
        body: [
          'We never sell your data. We share it only when the work requires it, for example with the Swedish Tax Agency for the ROT deduction, with subcontractors who carry out parts of the work, and with our email and accounting providers.',
        ],
      },
      {
        title: 'This website',
        body: [
          'The forms on this website do not store any data. They open an email in your own email program, and the details only reach us when you send it. The website does not use cookies for tracking or marketing. Fonts are loaded from Google Fonts, which means your IP address is sent to Google when the page loads.',
        ],
      },
      {
        title: 'Your rights',
        body: [
          'You have the right to know what data we hold about you, to have incorrect data corrected, and to have data deleted when we no longer need it. You can also object to or ask us to restrict the processing.',
          `Contact us at ${COMPANY.email} to use your rights. If you are unhappy with how we handle your data, you can complain to the Swedish Authority for Privacy Protection (IMY), imy.se.`,
        ],
      },
    ],
    close: 'Close',
  },
};

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose, lang }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  const c = CONTENT[lang];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-[#05172C]/80 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E8D4C1] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#05172C] text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D97D30] block mb-1">
              {COMPANY.name}
            </span>
            <h3 id="privacy-title" className="text-xl sm:text-2xl font-bold font-display text-white">
              {c.title}
            </h3>
            <p className="text-xs text-[#CBD5E1] mt-1">{c.updated}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={c.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto text-sm text-[#475569] leading-relaxed">
          <p>{c.intro}</p>
          {c.sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-base font-bold text-[#05172C] mb-1.5">{section.title}</h4>
              {section.body.map((para, i) => (
                <p key={i} className={i > 0 ? 'mt-2' : undefined}>
                  {para}
                </p>
              ))}
            </div>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#F8FAFC] text-[#05172C] border border-[#CBD5E1] hover:bg-[#FFF7ED] text-xs font-semibold transition-colors"
            >
              {c.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
