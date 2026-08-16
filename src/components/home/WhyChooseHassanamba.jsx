import React from 'react';
import { 
  GraduationCap, 
  UserCheck, 
  ClipboardCheck, 
  HelpCircle, 
  Newspaper, 
  Globe, 
  BookOpen, 
  Layers, 
  Award, 
  HeartHandshake, 
  CalendarCheck, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_PILLARS } from '../../data/whyChooseData';
import { SectionHeading } from '../common/SectionHeading';

export const WhyChooseHassanamba = () => {
  const iconMap = {
    GraduationCap,
    UserCheck,
    ClipboardCheck,
    HelpCircle,
    Newspaper,
    Globe,
    BookOpen,
    Layers,
    Award,
    HeartHandshake,
    CalendarCheck,
    Zap,
  };

  return (
    <section className="py-16 sm:py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-navy-800/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-crimson-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Pillars"
          title="Why Students Choose Hassanamba"
          kannadaSubtitle="ಹಾಸನಾಂಬ ಅಕಾಡೆಮಿಯನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ಪ್ರಮುಖ ಕಾರಣಗಳು"
          description="A disciplined, result-driven ecosystem built to transform serious aspirants into successful civil servants, bank officers, and public sector professionals."
          dark={true}
        />

        {/* 12 Pillars Grid — horizontal scroll on mobile */}
        <div className="mobile-scroll-cards sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {WHY_CHOOSE_PILLARS.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || CheckCircle2;
            return (
              <div key={pillar.id} className="min-w-0">
                <div 
                  className="p-6 rounded-2xl bg-navy-900/90 border border-navy-800 hover:border-amber-400/40 shadow-card hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 h-full"
                >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-950 border border-navy-700 flex items-center justify-center text-amber-400 group-hover:text-white group-hover:bg-crimson-600 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-navy-950 text-slate-400 border border-navy-800">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>

                {pillar.kannadaTitle && (
                  <p className="text-xs text-amber-400 font-kannada font-medium mt-0.5">
                    {pillar.kannadaTitle}
                  </p>
                )}

                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseHassanamba;
