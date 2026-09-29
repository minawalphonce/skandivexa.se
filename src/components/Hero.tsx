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
    <section id="hero-section" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#EDF4FA] to-[#F8FAFC]">
      {/* Subtle Engineering Grid Backdrop */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-6 pointer-events-none -z-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#164E87" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tagline / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D0E2F2] shadow-xs mb-5">
              <span className="w-2 h-2 rounded-full bg-[#164E87] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#164E87]">
                {t.tagline[lang]}
              </span>
            </div>

            {/* Main Title with Swedish/English Display */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl font-extrabold text-[#0C2340] tracking-tight leading-[1.15] font-display mb-6">
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
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-[#164E87] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#123E6E] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>{t.ctaPrimary[lang]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="hero-explore-cta"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-white text-[#164E87] font-semibold text-xs uppercase tracking-wider border border-[#CBD5E1] hover:border-[#164E87] hover:bg-[#F0F6FB] transition-all cursor-pointer shadow-xs"
              >
                <span>{t.ctaSecondary[lang]}</span>
              </button>
            </div>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-6 border-t border-[#CBD5E1]/80 w-full max-w-xl text-xs sm:text-sm text-[#1E293B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#164E87] shrink-0" />
                <span>Godkänd för F-skatt & Moms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#164E87] shrink-0" />
                <span>30% ROT-avdrag direkt på fakturan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#164E87] shrink-0" />
                <span>ID06 & Säker Vatten auktorisation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#164E87] shrink-0" />
                <span>Ansvarsförsäkrad totalentreprenad</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#164E87]/25 via-transparent to-[#38BDF8]/20 blur-xs -z-10" />
              
              {/* Architectural Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={heroImg}
                  alt="Skandivexa konsult AB – Svensk Byggnadsvård, Entreprenad & Teknisk Konsultation"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#091A2E]/85 via-transparent to-black/10" />

                {/* Floating Architectural Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#D4E2F0] shadow-lg">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#164E87]">
                        Skandivexa konsult AB
                      </span>
                      <h2 className="text-sm font-bold text-[#0C2340]">
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
                    <div className="shrink-0 p-2 rounded-lg bg-[#164E87] text-white">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Quality Stamp Pill */}
              <div className="hidden sm:flex absolute -top-4 -left-4 items-center gap-2 px-4 py-2 rounded-full bg-[#0C2340] text-white shadow-lg border border-[#164E87]/40 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                <span>Certifierat i Sverige</span>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Trust Metric Blocks (Bottom of Hero) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#164E87]/60 transition-colors">
            <span className="text-xl sm:text-2xl font-extrabold font-display text-[#164E87] block tabular-nums">ID06</span>
            <span className="text-xs sm:text-sm font-bold text-[#0C2340] block mt-0.5">
              {t.stat1Label[lang]}
            </span>
            <span className="text-[11px] sm:text-xs text-[#64748B] block mt-1">
              {t.stat1Sub[lang]}
            </span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#164E87]/60 transition-colors">
            <span className="text-xl sm:text-2xl font-extrabold font-display text-[#164E87] block tabular-nums">30% ROT</span>
            <span className="text-xs sm:text-sm font-bold text-[#0C2340] block mt-0.5">
              {t.stat2Label[lang]}
            </span>
            <span className="text-[11px] sm:text-xs text-[#64748B] block mt-1">
              {t.stat2Sub[lang]}
            </span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#164E87]/60 transition-colors">
            <span className="text-xl sm:text-2xl font-extrabold font-display text-[#164E87] block tabular-nums">Underhåll</span>
            <span className="text-xs sm:text-sm font-bold text-[#0C2340] block mt-0.5">
              {t.stat3Label[lang]}
            </span>
            <span className="text-[11px] sm:text-xs text-[#64748B] block mt-1">
              {t.stat3Sub[lang]}
            </span>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#164E87]/60 transition-colors">
            <span className="text-xl sm:text-2xl font-extrabold font-display text-[#164E87] block tabular-nums">100%</span>
            <span className="text-xs sm:text-sm font-bold text-[#0C2340] block mt-0.5">
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
