import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { SERVICES, UI_TEXT } from '../data/content';
import {
  Hammer,
  Wrench,
  Landmark,
  Sparkles,
  Building2,
  Users,
  Truck,
  ArrowRight,
  Check,
} from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectServiceForQuote,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'construction' | 'maintenance' | 'realestate' | 'staffingTrade'>('all');
  const t = UI_TEXT.verksamhetSection;

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#C26E26]' };
    switch (iconName) {
      case 'Hammer':
        return <Hammer {...props} />;
      case 'Wrench':
        return <Wrench {...props} />;
      case 'Landmark':
        return <Landmark {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'Truck':
        return <Truck {...props} />;
      default:
        return <Hammer {...props} />;
    }
  };

  const filteredServices = SERVICES.filter((service) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'construction') {
      return service.category === 'construction';
    }
    if (activeFilter === 'maintenance') {
      return service.category === 'installations';
    }
    if (activeFilter === 'realestate') {
      return service.category === 'realestate';
    }
    if (activeFilter === 'staffingTrade') {
      return service.category === 'staffing' || service.category === 'trade';
    }
    return true;
  });

  return (
    <section id="tjanster" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26E26] block mb-2">
            {t.eyebrow[lang]}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#05172C] tracking-tight font-display mb-4">
            {t.title[lang]}
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            {t.description[lang]}
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#05172C] text-white shadow-xs'
                : 'bg-white text-[#475569] border border-[#CBD5E1] hover:bg-[#FFF7ED] hover:text-[#C26E26] hover:border-[#E8D4C1]'
            }`}
          >
            {t.filterAll[lang]}
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('construction')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'construction'
                ? 'bg-[#05172C] text-white shadow-xs'
                : 'bg-white text-[#475569] border border-[#CBD5E1] hover:bg-[#FFF7ED] hover:text-[#C26E26] hover:border-[#E8D4C1]'
            }`}
          >
            {t.filterConstruction[lang]}
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('maintenance')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'maintenance'
                ? 'bg-[#05172C] text-white shadow-xs'
                : 'bg-white text-[#475569] border border-[#CBD5E1] hover:bg-[#FFF7ED] hover:text-[#C26E26] hover:border-[#E8D4C1]'
            }`}
          >
            {t.filterMaintenance[lang]}
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('realestate')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'realestate'
                ? 'bg-[#05172C] text-white shadow-xs'
                : 'bg-white text-[#475569] border border-[#CBD5E1] hover:bg-[#FFF7ED] hover:text-[#C26E26] hover:border-[#E8D4C1]'
            }`}
          >
            {t.filterRealEstate[lang]}
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('staffingTrade')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'staffingTrade'
                ? 'bg-[#05172C] text-white shadow-xs'
                : 'bg-white text-[#475569] border border-[#CBD5E1] hover:bg-[#FFF7ED] hover:text-[#C26E26] hover:border-[#E8D4C1]'
            }`}
          >
            {t.filterStaffingTrade[lang]}
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#C26E26] shadow-xs hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Top Row: Icon and Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-[#FFF7ED] border border-[#E8D4C1] group-hover:bg-[#FFEDD5] group-hover:border-[#C26E26]/50 transition-colors">
                    {renderIcon(service.icon)}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FFF7ED] text-[#C26E26] border border-[#E8D4C1]">
                      {service.badge[lang]}
                    </span>
                  )}
                </div>

                {/* Service Title & Subtitle */}
                <h3 className="text-xl font-bold text-[#05172C] font-display mb-2 group-hover:text-[#C26E26] transition-colors leading-snug">
                  {service.title[lang]}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#A85B1B] mb-3">
                  {service.subtitle[lang]}
                </p>

                {/* Description */}
                <p className="text-sm text-[#475569] leading-relaxed mb-5">
                  {service.description[lang]}
                </p>

                {/* Key Bullet Points */}
                <ul className="space-y-2 mb-6 pt-4 border-t border-[#EDF2F7] text-xs text-[#1E293B]">
                  {service.details[lang].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C26E26] shrink-0 mt-0.5" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Action */}
              <button
                type="button"
                onClick={() => onSelectServiceForQuote(service.title[lang])}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#FFF7ED] hover:bg-[#C26E26] text-[#C26E26] hover:text-white border border-[#E8D4C1] hover:border-[#C26E26] text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-2xs"
              >
                <span>{lang === 'sv' ? 'Begär offert för detta' : 'Inquire About This'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
