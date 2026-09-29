import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../data/content';
import { ShieldCheck, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import heroImg from '../assets/images/nordic_craftsmanship_hero_1788928665443.jpg';

interface HeroProps {
  lang: Language;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenQuote }) => {
  const t = UI_TEXT.hero;

  const scrollToServices = () => {
    const el = document.getElementById('tjanster');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-section" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F4F6F9] to-[#F8FAFC]">
      {/* Subtle Engineering Grid Backdrop */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none -z-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#05172C" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tagline / Eyebrow with Copper Ochre Accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8D4C1] shadow-xs mb-5">
              <span className="w-2 h-2 rounded-full bg-[#C26E26] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#A85B1B]">
                {t.tagline[lang]}
              </span>
            </div>

            {/* Main Title with Swedish/English Display */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl font-extrabold text-[#05172C] tracking-tight leading-[1.15] font-display mb-6">
              {t.title[lang]}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl mb-8">
              {t.description[lang]}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                id="hero-quote-cta"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-[#C26E26] hover:bg-[#A85B1B] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>{t.ctaPrimary[lang]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="hero-explore-cta"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-white text-[#05172C] font-bold text-xs uppercase tracking-wider border border-[#CBD5E1] hover:border-[#C26E26] hover:text-[#C26E26] hover:bg-[#FFF7ED] transition-all cursor-pointer shadow-xs"
              >
                <span>{t.ctaSecondary[lang]}</span>
              </button>
            </div>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-6 border-t border-[#CBD5E1]/80 w-full max-w-xl text-xs sm:text-sm text-[#1E293B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C26E26] shrink-0" />
                <span>Godkänd för F-skatt & Moms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C26E26] shrink-0" />
                <span>30% ROT-avdrag direkt på fakturan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C26E26] shrink-0" />
                <span>ID06 & Säker Vatten auktorisation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C26E26] shrink-0" />
                <span>Ansvarsförsäkrad totalentreprenad</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame with Warm Copper & Deep Blue Glow */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#05172C]/20 via-transparent to-[#C26E26]/25 blur-xs -z-10" />
              
              {/* Architectural Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={heroImg}
                  alt="Skandivexa konsult AB – Svensk Byggnadsvård, Entreprenad & Teknisk Konsultation"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05172C]/90 via-transparent to-black/10" />

                {/* Floating Architectural Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8D4C1] shadow-lg">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#C26E26]">
                        Skandivexa konsult AB
                      </span>
                      <h2 className="text-sm font-bold text-[#05172C]">
                        {lang === 'sv'
                          ? 'Byggentreprenad, Konsultation & Fastighetsdrift'
                          : 'General Contracting, Consulting & Property Operations'}
                      </h2>
                      <p className="text-xs text-[#475569] mt-0.5">
                        {lang === 'sv'
                          ? 'Totalentreprenad, underhållsplaner, VVS, ventilation & teknisk ledning'
                          : 'Turnkey contracting, maintenance roadmaps, HVAC & technical management'}
                      </p>
                    </div>
                    <div className="shrink-0 p-2.5 rounded-lg bg-[#05172C] text-[#D97D30]">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Quality Stamp Pill */}
              <div className="hidden sm:flex absolute -top-4 -left-4 items-center gap-2 px-4 py-2 rounded-full bg-[#05172C] text-white shadow-lg border border-[#C26E26]/50 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#D97D30]" />
                <span>Certifierat i Sverige</span>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Trust Metric Blocks (Bottom of Hero) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#C26E26] transition-colors group">
            <span className="text-xl sm:text-2xl font-extrabold font-display text-[#05172C] group-hover:text-[#C26E26] transition-colors block tabular-nums">ID06</span>
            <span className="text-xs sm:text-sm font-bold text-[#05172C] block mt-0.5">
              {t.stat1Label[lang]}
            </span>
            <span className="text-[11px] sm:text-xs text-[#64748B] block mt-1">
              {t.stat1Sub[lang]}
            </span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#C26E26] transition-colors group">
            <span className="text-xl sm:text-2xl font-extrabold font-display text-[#C26E26] block tabular-nums">30% ROT</span>
            <span className="text-xs sm:text-sm font-bold text-[#05172C] block mt-0.5">
              {t.stat2Label[lang]}
            </span>
            <span className="text-[11px] sm:text-xs text-[#64748B] block mt-1">
              {t.stat2Sub[lang]}
            </span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#C26E26] transition-colors group">
            <span className="text-xl sm:text-2xl font-extrabold font-display text-[#05172C] group-hover:text-[#C26E26] transition-colors block tabular-nums">Underhåll</span>
            <span className="text-xs sm:text-sm font-bold text-[#05172C] block mt-0.5">
              {t.stat3Label[lang]}
            </span>
            <span className="text-[11px] sm:text-xs text-[#64748B] block mt-1">
              {t.stat3Sub[lang]}
            </span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#C26E26] transition-colors group">
            <span className="text-xl sm:text-2xl font-extrabold font-display text-[#05172C] group-hover:text-[#C26E26] transition-colors block tabular-nums">100%</span>
            <span className="text-xs sm:text-sm font-bold text-[#05172C] block mt-0.5">
              {t.stat4Label[lang]}
            </span>
            <span className="text-[11px] sm:text-xs text-[#64748B] block mt-1">
              {t.stat4Sub[lang]}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
