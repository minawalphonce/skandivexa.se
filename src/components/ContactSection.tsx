import React, { useState } from 'react';
import { Language } from '../types';
import { UI_TEXT, COMPANY } from '../data/content';
import { openMailto } from '../utils/mailto';
import { Phone, Mail, MapPin, Clock, ShieldCheck, HelpCircle, ChevronDown, Send, Check } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  onOpenQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, onOpenQuote }) => {
  const t = UI_TEXT.contact;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [quickSent, setQuickSent] = useState(false);
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickMsg, setQuickMsg] = useState('');

  const faqs = [
    {
      q: {
        sv: 'Hur fungerar ROT-avdraget när vi anlitar Skandivexa konsult AB?',
        en: 'How does the ROT tax deduction work when hiring Skandivexa konsult AB?',
      },
      a: {
        sv: 'Som privatkund drar vi av 30% av den godkända arbetskostnaden direkt på fakturan (upp till 50 000 kr per person och år). Du betalar endast nettot, och vi sköter all ansökan och administration mot Skatteverket.',
        en: 'As a private customer, we deduct 30% of eligible labor costs directly on your invoice (up to 50,000 SEK per person/year). You only pay the net balance, and we handle all Skatteverket administrative filings.',
      },
    },
    {
      q: {
        sv: 'Vilka garantier och certifieringar har era hantverkare och konsulter?',
        en: 'What guarantees and certifications do your craftsmen and consultants hold?',
      },
      a: {
        sv: 'Alla våra medarbetare bär obligatorisk ID06-legitimation. Våra VVS-installationer utförs strikt enligt branschregler Säker Vatten, våra elektriker är auktoriserade hos Elsäkerhetsverket, och vi har full ansvarsförsäkring upp till 10 miljoner kronor.',
        en: 'All personnel carry mandatory ID06 site credentials. Plumbing installations adhere strictly to Swedish Water Safety standards (Säker Vatten), electricians are authorized, and we carry comprehensive liability insurance up to 10 MSEK.',
      },
    },
    {
      q: {
        sv: 'Erbjuder ni löpande underhållsavtal och teknisk förvaltning?',
        en: 'Do you offer ongoing maintenance contracts and technical management?',
      },
      a: {
        sv: 'Ja, vi skräddarsyr underhållsavtal och fleråriga underhållsplaner (5–10 år) för bostadsrättsföreningar och fastighetsägare. Avtalen omfattar regelbunden teknisk tillsyn, tak- och fasadkontroller, VVS/ventilationsservice, felanmälan och snabb åtgärdsberedskap.',
        en: 'Yes, we tailor ongoing facility maintenance contracts and multi-year maintenance roadmaps (5–10 years) for housing cooperatives and landlords. Agreements cover scheduled technical inspections, roof and facade reviews, HVAC upkeep, tenant service requests, and rapid repair dispatch.',
      },
    },
    {
      q: {
        sv: 'Arbetar ni med både privatpersoner och fastighetsbolag/BRF?',
        en: 'Do you work with both private homeowners and housing co-ops/property managers?',
      },
      a: {
        sv: 'Absolut. Vår organisation är strukturerad för att hantera allt från villarenoveringar och rådgivning till stambyten i bostadsrättsföreningar, kommersiell fastighetsdrift och teknisk bemanning.',
        en: 'Absolutely. We are structured to manage everything from bespoke residential renovations to multi-unit plumbing retrofits, commercial facility operations, and technical industrial staffing.',
      },
    },
  ];

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    openMailto(`Bli uppringd – ${quickName}`, [
      'Hej Skandivexa konsult AB,',
      '',
      'Jag vill bli uppringd.',
      '',
      `Namn: ${quickName}`,
      `Telefon: ${quickPhone}`,
      `Ärende: ${quickMsg}`,
    ]);
    setQuickSent(true);
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26E26] block mb-2">
            {t.eyebrow[lang]}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#05172C] tracking-tight font-display mb-4">
            {t.title[lang]}
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            {t.desc[lang]}
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Phone & Hours */}
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#C26E26] transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] text-[#C26E26] flex items-center justify-center mb-4 border border-[#E8D4C1] group-hover:bg-[#C26E26] group-hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block mb-1">
              {t.phoneLabel[lang]}
            </span>
            <a
              href="tel:0108086733"
              className="text-lg font-bold text-[#05172C] hover:text-[#C26E26] transition-colors block mb-2"
            >
              {t.phoneVal}
            </a>
            <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
              <Clock className="w-3.5 h-3.5 text-[#C26E26]" />
              <span>{t.hoursVal[lang]}</span>
            </div>
          </div>

          {/* Card 2: Email & Inquiries */}
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#C26E26] transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] text-[#C26E26] flex items-center justify-center mb-4 border border-[#E8D4C1] group-hover:bg-[#C26E26] group-hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block mb-1">
              {t.emailLabel[lang]}
            </span>
            <a
              href="mailto:info@skandivexa.se"
              className="text-lg font-bold text-[#05172C] hover:text-[#C26E26] transition-colors block mb-2"
            >
              {t.emailVal}
            </a>
            <p className="text-xs text-[#64748B]">
              {lang === 'sv' ? 'Vi svarar normalt inom 24 timmar på vardagar' : 'We respond within 24 hours on business days'}
            </p>
          </div>

          {/* Card 3: Location & Registration */}
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#C26E26] transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] text-[#C26E26] flex items-center justify-center mb-4 border border-[#E8D4C1] group-hover:bg-[#C26E26] group-hover:text-white transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block mb-1">
              {t.addressLabel[lang]}
            </span>
            <p className="text-base font-bold text-[#05172C] mb-1">
              {t.addressVal}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C26E26]" />
              <span>Org.nr {COMPANY.orgNumber} • F-skatt • Moms</span>
            </div>
          </div>

        </div>

        {/* Two Columns: Fast Contact Form & FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Quick Message Box */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-xs">
            <h3 className="text-xl font-bold font-display text-[#05172C] mb-2">
              {lang === 'sv' ? 'Snabbkontakt & Återringning' : 'Quick Contact & Callback'}
            </h3>
            <p className="text-xs text-[#64748B] mb-6">
              {lang === 'sv'
                ? 'Lämna dina uppgifter så ringer en av våra projektledare upp dig inom kort.'
                : 'Leave your contact details and our project manager will return your call promptly.'}
            </p>

            {quickSent ? (
              <div className="p-6 rounded-xl bg-[#F0FDF4] border border-emerald-200 text-center">
                <Check className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <span className="text-sm font-bold text-[#05172C] block">
                  {lang === 'sv' ? 'Ett e-postmeddelande har öppnats i ditt e-postprogram – tryck på Skicka så ringer vi upp dig.' : 'An email has opened in your email program – press Send and we will call you back.'}
                </span>
                <span className="text-xs text-[#64748B] mt-1 block">
                  Skandivexa konsult AB • Stockholm
                </span>
              </div>
            ) : (
              <form onSubmit={handleQuickContact} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#05172C] mb-1">
                    {lang === 'sv' ? 'Ditt namn' : 'Your name'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    placeholder="Förnamn Efternamn"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#C26E26] focus:bg-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#05172C] mb-1">
                    {lang === 'sv' ? 'Telefonnummer' : 'Phone number'} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    placeholder="070-123 45 67"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#C26E26] focus:bg-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#05172C] mb-1">
                    {lang === 'sv' ? 'Vad gäller ärendet?' : 'Brief inquiry subject'}
                  </label>
                  <textarea
                    rows={2}
                    value={quickMsg}
                    onChange={(e) => setQuickMsg(e.target.value)}
                    placeholder={
                      lang === 'sv'
                        ? 't.ex. renovering, VVS-installation, underhållsplan eller konsultation...'
                        : 'e.g. renovation, plumbing installation, maintenance plan or consulting...'
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#C26E26] focus:bg-white text-sm outline-none resize-none transition-colors"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 rounded-lg bg-[#C26E26] hover:bg-[#A85B1B] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'sv' ? 'Skapa e-post' : 'Create Email'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className="py-3 px-4 rounded-lg bg-[#FFF7ED] hover:bg-[#FFEDD5] text-[#C26E26] border border-[#E8D4C1] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    <span>{lang === 'sv' ? 'Full offertförfrågan' : 'Full Quote Form'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-4 h-4 text-[#C26E26]" />
              <h3 className="text-lg font-bold font-display text-[#05172C]">
                {lang === 'sv' ? 'Vanliga frågor (FAQ)' : 'Frequently Asked Questions'}
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 text-sm font-bold text-[#05172C] hover:bg-[#FFF7ED] transition-colors cursor-pointer"
                    >
                      <span className="leading-snug">{item.q[lang]}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#C26E26] transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#EDF2F7] bg-[#FFF7ED]/30">
                        {item.a[lang]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
