import React from 'react';
import { 
  Search, 
  BookMarked, 
  PenTool, 
  BarChart3, 
  Target, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { PREPARATION_STEPS } from '../../data/whyChooseData';
import { SectionHeading } from '../common/SectionHeading';

export const PreparationRoadmap = () => {
  const iconMap = {
    Search,
    BookMarked,
    PenTool,
    BarChart3,
    Target,
    CheckCircle2,
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-100/70 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Structured Methodology"
          title="Our 6-Step Preparation System"
          kannadaSubtitle="ಯಶಸ್ಸಿನ ೬-ಹಂತಗಳ ವೈಜ್ಞಾನಿಕ ಅಧ್ಯಯನ ವಿಧಾನ"
          description="Every aspirant at Hassanamba Coaching Academy progresses through a tested, step-by-step framework to ensure zero gaps in conceptual understanding and exam execution."
        />

        {/* Steps Grid — horizontal scroll on mobile */}
        <div className="mobile-scroll-cards md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PREPARATION_STEPS.map((step) => {
            const IconComponent = iconMap[step.icon] || CheckCircle2;
            return (
              <div key={step.step} className="min-w-[80vw] sm:min-w-[300px] md:min-w-0">
                <div 
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 relative group h-full"
                >
                {/* Step Number Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 border border-navy-100 flex items-center justify-center group-hover:bg-crimson-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-extrabold text-slate-300 font-heading group-hover:text-amber-500 transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy-950 font-heading">
                  {step.title}
                </h3>

                {step.kannadaTitle && (
                  <p className="text-xs text-crimson-700 font-kannada font-semibold mt-0.5">
                    {step.kannadaTitle}
                  </p>
                )}

                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {step.description}
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

export default PreparationRoadmap;
