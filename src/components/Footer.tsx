import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../data/content';
import { Logo } from './Logo';
import { ShieldCheck, Award, HeartHandshake, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onLanguageChange, onOpenQuote }) => {
  const t = UI_TEXT.footer;

  return (
    <footer className="bg-[#0B1F36] text-white pt-16 pb-12 border-t border-[#132C4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Presentation (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="horizontal" theme="dark" size="lg" showEmblem={false} />
            
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-sm leading-relaxed pt-2">
              {lang === 'sv'
                ? 'Skandivexa konsult AB levererar helhetslösningar inom bygg-, underhålls- och renoveringsverksamhet, teknisk konsultation, VVS, ventilation, måleri och fastighetsdrift.'
                : 'Skandivexa konsult AB delivers comprehensive turnkey solutions across construction, engineering consulting, facility maintenance, HVAC, painting, and property operations.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenQuote}
                className="px-4 py-2.5 rounded-lg bg-[#164E87] hover:bg-[#1D70B8] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-[#38BDF8]/40 shadow-xs"
              >
                {lang === 'sv' ? 'Begär kostnadsfri offert' : 'Request Free Quote'}
              </button>
              
              <div className="inline-flex rounded-full bg-white/10 p-0.5 border border-white/15 text-xs">
                <button
                  type="button"
                  onClick={() => onLanguageChange('sv')}
                  className={`px-2.5 py-0.5 rounded-full font-bold transition-colors ${
                    lang === 'sv' ? 'bg-[#164E87] text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  Svenska
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`px-2.5 py-0.5 rounded-full font-bold transition-colors ${
                    lang === 'en' ? 'bg-[#164E87] text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>

          {/* Col 2: Verksamhetsområden (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
              {lang === 'sv' ? 'Verksamhetsområden' : 'Core Divisions'}
            </h4>
            <ul className="space-y-2 text-xs text-[#CBD5E1]">
              <li>
                <a href="#tjanster" className="hover:text-[#38BDF8] transition-colors">
                  {lang === 'sv' ? 'Bygg- & Renoveringsverksamhet' : 'Building & Renovation'}
                </a>
              </li>
              <li>
                <a href="#underhall" className="hover:text-[#38BDF8] transition-colors">
                  {lang === 'sv' ? 'Planerat Fastighetsunderhåll' : 'Planned Facility Maintenance'}
                </a>
              </li>
              <li>
                <a href="#tjanster" className="hover:text-[#38BDF8] transition-colors">
                  {lang === 'sv' ? 'Teknisk Konsultation & Rådgivning' : 'Engineering & Technical Consulting'}
                </a>
              </li>
              <li>
                <a href="#tjanster" className="hover:text-[#38BDF8] transition-colors">
                  {lang === 'sv' ? 'VVS-, Ventilation- & Måleri' : 'HVAC, Ventilation & Painting'}
                </a>
              </li>
              <li>
                <a href="#tjanster" className="hover:text-[#38BDF8] transition-colors">
                  {lang === 'sv' ? 'Fastighetsförvaltning & Drift' : 'Property Management & Facility'}
                </a>
              </li>
              <li>
                <a href="#tjanster" className="hover:text-[#38BDF8] transition-colors">
                  {lang === 'sv' ? 'Bemanning & Personaluthyrning' : 'Staffing & Personnel Leasing'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Kontaktuppgifter (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
              {lang === 'sv' ? 'Kontakt' : 'Contact'}
            </h4>
            <div className="space-y-2 text-xs text-[#CBD5E1]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>Stockholm / Mälardalen, Sverige</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                <a href="tel:0108086733" className="hover:text-[#38BDF8] transition-colors">
                  010-808 67 33
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                <a href="mailto:info@skandinavexa.se" className="hover:text-[#38BDF8] transition-colors">
                  info@skandinavexa.se
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Certifieringar & F-skatt (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
              {t.certifications[lang]}
            </h4>
            <div className="space-y-2 text-[11px] text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{t.cert1}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{t.cert2}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{t.cert3}</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{t.cert4}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>
            © {new Date().getFullYear()} Skandivexa konsult AB. {t.rights[lang]}
          </p>
          <p className="text-[11px] text-center sm:text-right text-[#64748B]">
            {t.tagline[lang]}
          </p>
        </div>

      </div>
    </footer>
  );
};
