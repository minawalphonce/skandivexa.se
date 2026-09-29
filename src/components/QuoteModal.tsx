import React, { useState, useEffect } from 'react';
import { Language, QuoteRequest } from '../types';
import { UI_TEXT, SERVICES } from '../data/content';
import { X, CheckCircle, Send, Mail } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialService?: string;
  initialBudget?: number;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialService,
  initialBudget,
}) => {
  const t = UI_TEXT.quoteModal;

  const [formData, setFormData] = useState<QuoteRequest>({
    clientType: 'private',
    services: [],
    name: '',
    companyName: '',
    orgOrPersonalNumber: '',
    email: '',
    phone: '',
    city: 'Stockholm',
    address: '',
    projectDescription: '',
    wantsRotDeduction: true,
    estimatedTimeframe: '1-3months',
    estimatedBudget: initialBudget ? `${initialBudget} kr` : '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.includes(initialService) ? prev.services : [...prev.services, initialService],
      }));
    }
    if (initialBudget) {
      setFormData((prev) => ({
        ...prev,
        estimatedBudget: `${new Intl.NumberFormat('sv-SE').format(initialBudget)} kr`,
        wantsRotDeduction: true,
      }));
    }
  }, [initialService, initialBudget]);

  if (!isOpen) return null;

  const handleServiceToggle = (title: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(title);
      return {
        ...prev,
        services: exists ? prev.services.filter((s) => s !== title) : [...prev.services, title],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const referenceNum = `SKV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    
    // Save to local storage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('skandivexa_inquiries') || '[]');
      existing.push({
        ref: referenceNum,
        date: new Date().toISOString(),
        ...formData,
      });
      localStorage.setItem('skandivexa_inquiries', JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }

    setSubmittedRef(referenceNum);
  };

  const resetAndClose = () => {
    setSubmittedRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-[#081626]/75 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#D4E2F0] overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-[#0C2340] text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#38BDF8] block mb-1">
              Skandivexa konsult AB • {lang === 'sv' ? 'Offertförfrågan' : 'Quote Request'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              {t.title[lang]}
            </h3>
            <p className="text-xs text-[#CBD5E1] mt-1">
              {t.subtitle[lang]}
            </p>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Stäng dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: If Submitted, show Confirmation */}
        {submittedRef ? (
          <div className="p-6 sm:p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h4 className="text-2xl font-bold font-display text-[#0C2340] mb-2">
              {t.successTitle[lang]}
            </h4>

            <p className="text-sm text-[#475569] max-w-md mx-auto mb-6">
              {t.successMsg[lang]}
            </p>

            <div className="p-4 rounded-xl bg-[#F0F6FB] border border-[#D4E2F0] max-w-md mx-auto mb-6 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-[#D4E2F0] pb-2">
                <span className="text-[#64748B]">{lang === 'sv' ? 'Referensnummer:' : 'Reference ID:'}</span>
                <span className="font-bold text-[#164E87]">{submittedRef}</span>
              </div>
              <div className="flex justify-between border-b border-[#D4E2F0] pb-2">
                <span className="text-[#64748B]">{lang === 'sv' ? 'Kontaktperson:' : 'Contact:'}</span>
                <span className="font-semibold text-[#0C2340]">{formData.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#D4E2F0] pb-2">
                <span className="text-[#64748B]">{lang === 'sv' ? 'E-post & Telefon:' : 'Email & Phone:'}</span>
                <span className="font-medium text-[#0C2340]">{formData.email} • {formData.phone}</span>
              </div>
              {formData.wantsRotDeduction && (
                <div className="flex justify-between text-[#164E87] font-semibold">
                  <span>{lang === 'sv' ? 'ROT-avdrag (30%):' : 'ROT Deduction:'}</span>
                  <span>{lang === 'sv' ? 'Aktiverat' : 'Requested'}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:info@skandinavexa.se?subject=Offertförfrågan [${submittedRef}] - ${formData.name}&body=Hej Skandivexa konsult AB,%0D%0A%0D%0AJag har skickat in en offertförfrågan via hemsidan med referens: ${submittedRef}.%0D%0A%0D%0AProjekt: ${formData.projectDescription}%0D%0AStad: ${formData.city}%0D%0ATelefon: ${formData.phone}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#164E87] text-white text-xs font-semibold hover:bg-[#123E6E] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{lang === 'sv' ? 'Skicka bekräftelsemail' : 'Send copy via Email'}</span>
              </a>

              <button
                type="button"
                onClick={resetAndClose}
                className="px-5 py-2 rounded-lg bg-[#F0F6FB] text-[#0C2340] border border-[#D4E2F0] hover:bg-[#E4EEF8] text-xs font-semibold transition-colors"
              >
                {t.close[lang]}
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* 1. Client Type Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0C2340] mb-2">
                {t.clientTypeLabel[lang]}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['private', 'company', 'brf', 'public'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        clientType: type,
                        wantsRotDeduction: type === 'private' ? true : false,
                      }));
                    }}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all text-center ${
                      formData.clientType === type
                        ? 'bg-[#164E87] text-white border-[#164E87] shadow-xs'
                        : 'bg-[#F8FAFC] text-[#475569] border-[#CBD5E1] hover:bg-[#F0F6FB] hover:text-[#164E87]'
                    }`}
                  >
                    {t.types[type][lang]}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Services Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0C2340] mb-2">
                {t.servicesLabel[lang]}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICES.map((s) => {
                  const isSelected = formData.services.includes(s.title[lang]);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => handleServiceToggle(s.title[lang])}
                      className={`flex items-start gap-2 p-2.5 rounded-lg text-left text-xs border transition-all ${
                        isSelected
                          ? 'bg-[#F0F6FB] border-[#164E87] text-[#164E87] font-semibold'
                          : 'bg-white border-[#E2E8F0] text-[#475569] hover:bg-[#F8FAFC]'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        isSelected ? 'bg-[#164E87] border-[#164E87] text-white' : 'border-[#CBD5E1]'
                      }`}>
                        {isSelected && '✓'}
                      </span>
                      <span className="leading-tight">{s.title[lang]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Contact Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0F233A] mb-1">
                  {t.name[lang]} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Förnamn Efternamn"
                  className="w-full px-3 py-2 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#164E87] focus:bg-white text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F233A] mb-1">
                  {t.phone[lang]} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="070-123 45 67"
                  className="w-full px-3 py-2 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#164E87] focus:bg-white text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F233A] mb-1">
                  {t.email[lang]} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="namn@epost.se"
                  className="w-full px-3 py-2 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#164E87] focus:bg-white text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F233A] mb-1">
                  {t.city[lang]} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="t.ex. Stockholm, Nacka, Uppsala"
                  className="w-full px-3 py-2 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#164E87] focus:bg-white text-sm outline-none transition-colors"
                />
              </div>
            </div>

            {/* If business/BRF, show optional company field */}
            {formData.clientType !== 'private' && (
              <div>
                <label className="block text-xs font-semibold text-[#0F233A] mb-1">
                  {t.company[lang]}
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="Företagsnamn / BRF Namn"
                  className="w-full px-3 py-2 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#164E87] focus:bg-white text-sm outline-none transition-colors"
                />
              </div>
            )}

            {/* 4. Project Description */}
            <div>
              <label className="block text-xs font-semibold text-[#0F233A] mb-1">
                {t.description[lang]} *
              </label>
              <textarea
                rows={3}
                required
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                placeholder={
                  lang === 'sv'
                    ? 'Beskriv arbetet, fastighetens ålder, ungefärlig yta eller önskade åtgärder...'
                    : 'Describe the project scope, building age, approximate square meters, or desired measures...'
                }
                className="w-full px-3 py-2 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#164E87] focus:bg-white text-sm outline-none resize-none transition-colors"
              />
            </div>

            {/* 5. ROT-avdrag checkbox for private customers */}
            {formData.clientType === 'private' && (
              <div className="p-3.5 rounded-xl bg-[#F0F6FB] border border-[#D4E2F0] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="wants-rot-check"
                    checked={formData.wantsRotDeduction}
                    onChange={(e) => setFormData({ ...formData, wantsRotDeduction: e.target.checked })}
                    className="w-4 h-4 rounded border-gray-300 text-[#164E87] focus:ring-[#164E87]"
                  />
                  <label htmlFor="wants-rot-check" className="text-xs font-semibold text-[#0C2340] cursor-pointer">
                    {t.rotQuestion[lang]} (30% på arbetskostnaden)
                  </label>
                </div>
                <span className="text-[11px] text-[#164E87] font-bold">Max 50 000 kr/person</span>
              </div>
            )}

            {/* 6. Timeframe */}
            <div>
              <label className="block text-xs font-semibold text-[#0F233A] mb-1.5">
                {t.timeframeLabel[lang]}
              </label>
              <select
                value={formData.estimatedTimeframe}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    estimatedTimeframe: e.target.value as QuoteRequest['estimatedTimeframe'],
                  })
                }
                className="w-full px-3 py-2 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#164E87] focus:bg-white text-xs outline-none transition-colors"
              >
                <option value="urgent">{t.timeframes['urgent'][lang]}</option>
                <option value="1-3months">{t.timeframes['1-3months'][lang]}</option>
                <option value="3-6months">{t.timeframes['3-6months'][lang]}</option>
                <option value="future">{t.timeframes['future'][lang]}</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-[#164E87] hover:bg-[#123E6E] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#38BDF8]" />
                <span>{t.submitButton[lang]}</span>
              </button>
              <p className="text-[11px] text-center text-[#64748B] mt-2">
                {lang === 'sv'
                  ? 'Kostnadsfri offert utan förbindelser. Vi behandlar dina personuppgifter konfidentiellt enligt GDPR.'
                  : 'Free quote with no obligations. Personal information handled confidentially according to GDPR.'}
              </p>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
