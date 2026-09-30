import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { MaintenanceSpotlight } from './components/MaintenanceSpotlight';
import { RotCalculator } from './components/RotCalculator';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { PrivacyPolicy } from './components/PrivacyPolicy';

export default function App() {
  // Swedish first by default as requested: "the website should be english and swedish (swedish first)"
  const [lang, setLang] = useState<Language>('sv');
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [quoteService, setQuoteService] = useState<string | undefined>(undefined);
  const [quoteBudget, setQuoteBudget] = useState<number | undefined>(undefined);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState<boolean>(false);

  // Any link to #integritetspolicy opens the privacy policy
  useEffect(() => {
    const syncHash = () => setIsPrivacyOpen(window.location.hash === '#integritetspolicy');
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  const closePrivacy = () => {
    setIsPrivacyOpen(false);
    if (window.location.hash === '#integritetspolicy') {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  // Sync document title and HTML lang attribute with active language for SEO
  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'sv') {
      document.title = 'Skandivexa konsult AB | Bygg-, Konsult- & Fastighetsunderhåll';
    } else {
      document.title = 'Skandivexa konsult AB | Construction, Technical Consulting & Facility Maintenance';
    }
  }, [lang]);

  const handleOpenQuote = (service?: string) => {
    setQuoteService(service);
    setIsQuoteOpen(true);
  };

  const handleApplyRotInQuote = (budget: number) => {
    setQuoteBudget(budget);
    setQuoteService(lang === 'sv' ? 'Bygg & Renovering med ROT-avdrag' : 'Renovation with ROT deduction');
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F233A]">
      {/* Top Header with brand logo, nav links and language switcher */}
      <Header
        lang={lang}
        onLanguageChange={setLang}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 2. Core Business Divisions (Bygg, VVS, Ventilation, Måleri, Snickeri, Fastigheter, Bemanning, Maskiner) */}
        <ServicesSection
          lang={lang}
          onSelectServiceForQuote={(serviceTitle) => handleOpenQuote(serviceTitle)}
        />

        {/* 3. Planned & Preventive Facility Maintenance Spotlight */}
        <MaintenanceSpotlight
          lang={lang}
          onOpenQuote={(serviceTitle) => handleOpenQuote(serviceTitle)}
        />

        {/* 4. Swedish ROT-avdrag 30% Interactive Calculator */}
        <RotCalculator
          lang={lang}
          onApplyRotInQuote={handleApplyRotInQuote}
        />

        {/* 5. About the Company & Official Bolagsverket Registration */}
        <AboutSection lang={lang} />

        {/* 6. Contact, Callback & FAQ Section */}
        <ContactSection
          lang={lang}
          onOpenQuote={() => handleOpenQuote()}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onLanguageChange={setLang}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Interactive Quote & Consultation Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => {
          setIsQuoteOpen(false);
          setQuoteService(undefined);
          setQuoteBudget(undefined);
        }}
        lang={lang}
        initialService={quoteService}
        initialBudget={quoteBudget}
      />

      {/* Privacy Policy */}
      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={closePrivacy} lang={lang} />
    </div>
  );
}
