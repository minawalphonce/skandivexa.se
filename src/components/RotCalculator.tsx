import React, { useState } from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../data/content';
import { CheckCircle, Info, ArrowRight } from 'lucide-react';

interface RotCalculatorProps {
  lang: Language;
  onApplyRotInQuote: (estimatedBudget: number) => void;
}

export const RotCalculator: React.FC<RotCalculatorProps> = ({ lang, onApplyRotInQuote }) => {
  const [laborCost, setLaborCost] = useState<number>(80000);
  const [numOwners, setNumOwners] = useState<number>(1);
  const t = UI_TEXT.rotCalculator;

  // ROT in Sweden: 30% of labor costs. Max 50,000 SEK per owner per year.
  const maxRotPerOwner = 50000;
  const maxTotalRot = maxRotPerOwner * numOwners;
  const calculatedRot = Math.min(Math.round(laborCost * 0.3), maxTotalRot);
  const youPayLabor = Math.max(0, laborCost - calculatedRot);

  const formatSEK = (val: number) => {
    return new Intl.NumberFormat('sv-SE').format(val) + ' kr';
  };

  return (
    <section id="rot-kalkylator" className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#E2E8F0] shadow-lg overflow-hidden">
          
          {/* Header Bar */}
          <div className="bg-[#0C2340] text-white p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#38BDF8] bg-white/10 px-3 py-1 rounded-full">
                {t.badge[lang]}
              </span>
              <span className="text-xs text-[#CBD5E1] flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#38BDF8]" />
                {lang === 'sv' ? 'Vi sköter all kontakt med Skatteverket' : 'We handle all Skatteverket paperwork'}
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white mb-2">
              {t.title[lang]}
            </h2>
            <p className="text-sm text-[#CBD5E1] leading-relaxed max-w-2xl">
              {t.description[lang]}
            </p>
          </div>

          {/* Calculator Body */}
          <div className="p-6 sm:p-8">
            
            {/* Number of owners toggle */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#F0F6FB] border border-[#D4E2F0]">
              <div className="text-sm">
                <span className="font-semibold text-[#0C2340] block">
                  {lang === 'sv' ? 'Hur många delägare står på lagfarten?' : 'How many co-owners are on the title deed?'}
                </span>
                <span className="text-xs text-[#64748B]">
                  {lang === 'sv'
                    ? '1 person = max 50 000 kr i ROT • 2 personer = max 100 000 kr i ROT'
                    : '1 owner = max 50,000 SEK • 2 owners = max 100,000 SEK'}
                </span>
              </div>
              <div className="inline-flex rounded-lg p-1 bg-[#E2EAF2]">
                <button
                  type="button"
                  onClick={() => setNumOwners(1)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                    numOwners === 1
                      ? 'bg-[#164E87] text-white shadow-xs'
                      : 'text-[#0C2340] hover:text-[#164E87]'
                  }`}
                >
                  1 {lang === 'sv' ? 'person' : 'person'}
                </button>
                <button
                  type="button"
                  onClick={() => setNumOwners(2)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                    numOwners === 2
                      ? 'bg-[#164E87] text-white shadow-xs'
                      : 'text-[#0C2340] hover:text-[#164E87]'
                  }`}
                >
                  2 {lang === 'sv' ? 'personer' : 'persons'}
                </button>
              </div>
            </div>

            {/* Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="rot-labor-slider" className="text-sm font-semibold text-[#0C2340]">
                  {t.sliderLabel[lang]}
                </label>
                <span className="text-xl sm:text-2xl font-bold font-display text-[#164E87] tabular-nums">
                  {formatSEK(laborCost)}
                </span>
              </div>

              <input
                id="rot-labor-slider"
                type="range"
                min="10000"
                max="300000"
                step="5000"
                value={laborCost}
                onChange={(e) => setLaborCost(Number(e.target.value))}
                className="w-full h-2.5 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#164E87]"
              />

              <div className="flex justify-between text-[11px] text-[#64748B] mt-2 tabular-nums">
                <span>10 000 kr</span>
                <span>100 000 kr</span>
                <span>200 000 kr</span>
                <span>300 000 kr</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-[#F0F6FB] border border-[#D4E2F0]">
                <span className="text-xs font-semibold text-[#64748B] block mb-1">
                  {t.rotDeductionLabel[lang]}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#164E87] font-display block tabular-nums">
                  -{formatSEK(calculatedRot)}
                </span>
                <span className="text-[11px] text-[#64748B] mt-1 block">
                  {lang === 'sv'
                    ? '30% dras av direkt på din faktura från oss'
                    : '30% deducted directly on your invoice'}
                </span>
              </div>

              <div className="p-5 rounded-xl bg-[#0C2340] text-white">
                <span className="text-xs font-semibold text-[#CBD5E1] block mb-1">
                  {t.youPayLabel[lang]}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-display block tabular-nums">
                  {formatSEK(youPayLabor)}
                </span>
                <span className="text-[11px] text-[#CBD5E1] mt-1 block">
                  {lang === 'sv'
                    ? 'Exklusive eventuell materialkostnad'
                    : 'Excluding materials & machinery cost'}
                </span>
              </div>
            </div>

            {/* Tip note */}
            <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-[#F0F6FB] border border-[#D4E2F0] text-xs text-[#334155] mb-6">
              <Info className="w-4 h-4 text-[#164E87] shrink-0 mt-0.5" />
              <span>{t.infoText[lang]}</span>
            </div>

            {/* Button */}
            <div className="text-center">
              <button
                type="button"
                onClick={() => onApplyRotInQuote(laborCost)}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#164E87] hover:bg-[#123E6E] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>{t.cta[lang]}</span>
                <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
