import React from 'react';
import { 
  GraduationCap, Compass, CheckSquare, HelpCircle, 
  Newspaper, Globe, Layers, FileCheck, Award, 
  UserCheck, Calendar, Zap 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../../data/featuresData';
import SectionHeading from '../common/SectionHeading';
import Badge from '../ui/Badge';

const iconMap = {
  GraduationCap,
  Compass,
  CheckSquare,
  HelpCircle,
  Newspaper,
  Globe,
  Layers,
  FileCheck,
  Award,
  UserCheck,
  Calendar,
  Zap
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-academic-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Hassanamba Advantage"
          badgeVariant="gold"
          kannadaTitle="ವಿದ್ಯಾರ್ಥಿಗಳು ಹಾಸನಾಂಬ ಸಂಸ್ಥೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ಕಾರಣಗಳು"
          title="Why Students Choose Hassanamba"
          description="A disciplined, result-oriented ecosystem built on rigorous daily practice, experienced mentorship, and continuous performance evaluation."
        />

        {/* 12 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon] || GraduationCap;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-navy-400 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy-50 text-brand-navy-900 border border-brand-navy-100 flex items-center justify-center group-hover:bg-brand-navy-900 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 text-brand-red-600 group-hover:text-brand-gold-400 transition-colors" />
                    </div>
                    <Badge variant="neutral" className="text-[10px]">
                      {item.tag}
                    </Badge>
                  </div>

                  <h4 className="text-base font-bold text-brand-navy-950 group-hover:text-brand-red-600 transition-colors leading-tight">
                    {item.title}
                  </h4>

                  {item.kannadaTitle && (
                    <p className="text-xs font-semibold font-kannada text-brand-navy-600 mt-1 mb-2">
                      {item.kannadaTitle}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
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

export default WhyChooseUs;
