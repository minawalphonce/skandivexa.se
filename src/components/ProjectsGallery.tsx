import React, { useState } from 'react';
import { Language } from '../types';
import { PROJECTS, UI_TEXT } from '../data/content';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';

interface ProjectsGalleryProps {
  lang: Language;
  onOpenQuote: (service?: string) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ lang, onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const t = UI_TEXT.projects;

  const categories = [
    { id: 'all', label: { sv: 'Alla Projekt', en: 'All Projects' } },
    { id: 'heritage', label: { sv: 'Kulturvård', en: 'Heritage' } },
    { id: 'construction', label: { sv: 'Bygg & Entreprenad', en: 'Construction' } },
    { id: 'property', label: { sv: 'Fastighet & VVS', en: 'Facility & HVAC' } },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'heritage') return p.id.includes('saltsjobaden');
    if (selectedCategory === 'construction') return p.id.includes('skargardshus');
    if (selectedCategory === 'property') return p.id.includes('vasastan') || p.id.includes('kungsholmen');
    return true;
  });

  return (
    <section id="referenser" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#164E87] block mb-2">
              {t.eyebrow[lang]}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2340] tracking-tight font-display">
              {t.title[lang]}
            </h2>
            <p className="text-base text-[#475569] mt-3 leading-relaxed">
              {t.description[lang]}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#164E87] text-white shadow-xs'
                    : 'bg-white text-[#475569] border border-[#CBD5E1] hover:bg-[#F0F6FB] hover:text-[#164E87]'
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-xl hover:border-[#164E87] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#081626]">
                  <img
                    src={project.image}
                    alt={project.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081626]/80 via-transparent to-black/20" />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#164E87] border border-white/40 shadow-xs">
                      {project.category[lang]}
                    </span>
                  </div>

                  {/* Bottom Stats Floating in Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1 font-medium bg-black/40 px-2 py-0.5 rounded">
                      <Calendar className="w-3 h-3 text-[#38BDF8]" />
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-[#0C2340] mb-3 group-hover:text-[#164E87] transition-colors leading-snug">
                    {project.title[lang]}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {project.description[lang]}
                  </p>

                  {/* Project Metrics / Stats */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-[#F0F6FB] border border-[#D4E2F0] text-center">
                      {project.stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-[11px] text-[#64748B] font-medium">
                            {stat.label[lang]}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-[#0C2340] tabular-nums">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenQuote(project.title[lang])}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#F0F6FB] hover:bg-[#164E87] text-[#164E87] hover:text-white border border-[#D4E2F0] hover:border-[#164E87] text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer"
                >
                  <span>{lang === 'sv' ? 'Planera liknande projekt' : 'Plan a Similar Project'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
