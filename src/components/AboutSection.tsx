import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../data/content';
import { FileText, Shield, Sparkles, RefreshCw, CheckCircle2 } from 'lucide-react';
import propertyImg from '../assets/images/property_management_modern_1788928692642.jpg';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = UI_TEXT.about;

  return (
    <section id="om-bolaget" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26E26] block mb-2">
            {t.eyebrow[lang]}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#05172C] tracking-tight font-display mb-4">
            {t.title[lang]}
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            {lang === 'sv'
              ? 'Skandivexa konsult AB grundades med visionen att kombinera strategisk teknisk rådgivning med gedigen svensk hantverkstradition och totalentreprenad. Vi skapar långsiktiga värden för fastighetsägare, bostadsrättsföreningar och näringsliv.'
              : 'Skandivexa konsult AB was established with the vision of uniting strategic engineering consultation with solid Scandinavian craftsmanship and turnkey contracting, generating lasting property value for landlords, co-ops, and businesses.'}
          </p>
        </div>

        {/* Verbatim Bolagsverket Activity Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#E8D4C1] shadow-md relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#FFF7ED] text-[#C26E26] border border-[#E8D4C1] shrink-0 hidden sm:block">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-[#05172C] text-white px-2.5 py-0.5 rounded">
                  {lang === 'sv' ? 'Officiell Verksamhet' : 'Official Registration'}
                </span>
                <span className="text-xs text-[#64748B] font-medium">
                  {t.legalNotice[lang]}
                </span>
              </div>
              <blockquote className="text-sm sm:text-base text-[#05172C] font-medium italic leading-relaxed border-l-4 border-[#C26E26] pl-4 my-3 bg-[#FFF7ED] py-3.5 rounded-r-lg">
                "{lang === 'sv' ? t.verksamhetText : t.verksamhetTextEn}"
              </blockquote>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B] mt-3">
                <span className="flex items-center gap-1.5 font-bold text-[#05172C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C26E26]" />
                  Godkänd för F-skatt
                </span>
                <span className="flex items-center gap-1.5 font-bold text-[#05172C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C26E26]" />
                  Momsregistrerad (VAT SE)
                </span>
                <span className="flex items-center gap-1.5 font-bold text-[#05172C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C26E26]" />
                  Registrerat hos Bolagsverket i Sverige
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid: Narrative Image and 3 Core Value Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Values Column */}
          <div className="lg:col-span-7 space-y-6">
            {t.values.map((val, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#C26E26] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#FFF7ED] text-[#C26E26] shrink-0 border border-[#E8D4C1]">
                    {idx === 0 && <Sparkles className="w-5 h-5" />}
                    {idx === 1 && <Shield className="w-5 h-5" />}
                    {idx === 2 && <RefreshCw className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#05172C] font-display mb-1">
                      {val.title[lang]}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {val.desc[lang]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Architecture Column */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0] bg-white">
              <img
                src={propertyImg}
                alt="Skandivexa konsult AB – Fastighetsförvaltning och kommersiell utveckling"
                className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="p-5 bg-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C26E26] block">
                  {lang === 'sv' ? 'Fastighetsutveckling & Rådgivning' : 'Property Development & Advisory'}
                </span>
                <p className="text-xs text-[#64748B] mt-1 leading-normal">
                  {lang === 'sv'
                    ? 'Vi förvaltar, rådger och utvecklar fastigheter med ett långsiktigt hållbart perspektiv samt förser branschen med kvalificerad konsultation.'
                    : 'We manage, advise, and develop real estate with a long-term sustainable perspective while providing certified technical expertise.'}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
