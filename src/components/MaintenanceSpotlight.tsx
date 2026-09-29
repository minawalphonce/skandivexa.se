import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../data/content';
import { Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import maintenanceImg from '../assets/images/building_maintenance_spotlight_1788929359542.jpg';

interface MaintenanceSpotlightProps {
  lang: Language;
  onOpenQuote: (service?: string) => void;
}

export const MaintenanceSpotlight: React.FC<MaintenanceSpotlightProps> = ({ lang, onOpenQuote }) => {
  const t = UI_TEXT.maintenanceSpotlight;

  return (
    <section id="underhall" className="py-20 md:py-28 bg-[#05172C] text-white relative overflow-hidden">
      {/* Background Subtle Nordic Warm Copper & Deep Blue Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C26E26]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#163860]/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Maintenance Photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              
              {/* Outer Warm Copper Border Accent */}
              <div className="absolute -inset-2 rounded-2xl border border-[#C26E26]/40 -z-10 translate-x-2 translate-y-2" />
              
              <div className="rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-[#030E1C]">
                <img
                  src={maintenanceImg}
                  alt="Skandivexa konsult AB – Planerat fastighetsunderhåll & Teknisk service"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Maintenance Floating Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white text-[#05172C] p-4 rounded-xl shadow-xl border border-[#E8D4C1] max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#05172C] text-[#D97D30]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C26E26] block">
                      Underhåll & Drift
                    </span>
                    <span className="text-xs font-bold block leading-tight text-[#05172C]">
                      {lang === 'sv' ? 'Minskar driftskostnader & säkrar fastighetsvärde' : 'Reduces operating costs & safeguards property value'}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C26E26]/50 text-[#D97D30] text-xs font-semibold uppercase tracking-wider mb-4">
              <Wrench className="w-3.5 h-3.5" />
              <span>{t.eyebrow[lang]}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white mb-6 leading-tight">
              {t.title[lang]}
            </h2>

            <p className="text-base sm:text-lg text-[#CBD5E1] font-light leading-relaxed mb-6">
              {t.lead[lang]}
            </p>

            <div className="space-y-4 text-sm text-[#94A3B8] leading-relaxed mb-8">
              <p>{t.p1[lang]}</p>
              <p>{t.p2[lang]}</p>
            </div>

            {/* 3 Maintenance Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 mb-8">
              {t.points.map((point, index) => (
                <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C26E26]/60 transition-colors group">
                  <span className="text-xs font-bold text-[#D97D30] block mb-1 group-hover:text-white transition-colors">
                    {point.title[lang]}
                  </span>
                  <p className="text-xs text-[#CBD5E1] leading-normal">
                    {point.desc[lang]}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  onOpenQuote(
                    lang === 'sv'
                      ? 'Planerat fastighetsunderhåll & Teknisk service'
                      : 'Planned Facility Maintenance & Technical Services'
                  )
                }
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#C26E26] hover:bg-[#A85B1B] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer border border-[#C26E26]"
              >
                <span>{lang === 'sv' ? 'Begär offert för underhållsavtal' : 'Request Maintenance Proposal'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
