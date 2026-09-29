import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Language } from '../types';
import { UI_TEXT } from '../data/content';
import { Phone, Mail, Globe, Menu, X, ShieldCheck, ChevronRight, ArrowRight } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenQuote: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onLanguageChange, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_TEXT.nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#tjanster', label: t.services[lang] },
    { href: '#underhall', label: t.maintenance[lang] },
    { href: '#rot-kalkylator', label: t.rot[lang] },
    { href: '#referenser', label: t.projects[lang] },
    { href: '#om-bolaget', label: t.about[lang] },
    { href: '#kontakt', label: t.contact[lang] },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E2E8F0]'
          : 'bg-white border-b border-[#EDF2F7]'
      }`}
    >
      {/* Top Meta Utility Strip */}
      <div className="bg-[#0B1F36] text-[#D1E0EE] text-xs py-1.5 px-4 sm:px-8 border-b border-[#132C4A]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-[#38BDF8] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Godkänd för F-skatt • ID06 • Säker Vatten</span>
            </span>
            <span className="hidden md:inline text-white/20">|</span>
            <a
              href="tel:0108086733"
              className="hidden sm:flex items-center gap-1 text-[#D1E0EE] hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#38BDF8]" />
              <span>010-808 67 33</span>
            </a>
            <a
              href="mailto:info@skandinavexa.se"
              className="hidden lg:flex items-center gap-1 text-[#D1E0EE] hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-[#38BDF8]" />
              <span>info@skandinavexa.se</span>
            </a>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 ml-auto">
            <Globe className="w-3.5 h-3.5 text-[#94B3D4]" />
            <div className="inline-flex rounded-full bg-[#122E50] p-0.5 border border-white/10 text-[11px]">
              <button
                type="button"
                id="lang-btn-sv"
                onClick={() => onLanguageChange('sv')}
                className={`px-2.5 py-0.5 rounded-full font-semibold transition-all ${
                  lang === 'sv'
                    ? 'bg-[#164E87] text-white shadow-xs'
                    : 'text-[#94B3D4] hover:text-white'
                }`}
                title="Växla till svenska"
              >
                SV
              </button>
              <button
                type="button"
                id="lang-btn-en"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-0.5 rounded-full font-semibold transition-all ${
                  lang === 'en'
                    ? 'bg-[#164E87] text-white shadow-xs'
                    : 'text-[#94B3D4] hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Container (Strict 3-zone contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single Brand Logo Element */}
          <a
            href="#"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#164E87] rounded-lg p-1"
            aria-label="Skandivexa konsult AB Hem"
          >
            <Logo variant="horizontal" size="md" />
          </a>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Huvudmeny">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-semibold text-[#1E293B] hover:text-[#164E87] relative py-1 transition-colors group cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#164E87] transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              id="header-quote-btn"
              onClick={() => onOpenQuote()}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#164E87] hover:bg-[#123E6E] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-xs cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              <span>{t.requestQuote[lang]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#164E87] hover:bg-[#F0F6FB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#164E87]"
              aria-expanded={mobileMenuOpen}
              aria-label="Öppna navigationsmeny"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden bg-white border-b border-[#E2E8F0] px-4 pt-2 pb-6 shadow-xl animate-in slide-in-from-top-4"
        >
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between text-left px-3.5 py-3 rounded-lg text-sm font-semibold text-[#0F233A] hover:bg-[#F0F6FB] hover:text-[#164E87] transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#164E87]" />
              </button>
            ))}
            <div className="pt-3 border-t border-[#E2E8F0]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3.5 rounded-lg bg-[#164E87] hover:bg-[#123E6E] text-white font-semibold text-sm flex items-center justify-center gap-2 uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>{t.requestQuote[lang]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
