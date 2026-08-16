import React from 'react';
import { ShieldCheck, Calendar, FileText, Newspaper, UserCheck, BookOpen } from 'lucide-react';
import { ACADEMY_INFO } from '../../data/academyInfo';

const TrustBar = () => {
  const pillars = [
    {
      icon: Calendar,
      title: "1, 2 & 3 Year Integrated",
      desc: "Degree Foundation Batches"
    },
    {
      icon: UserCheck,
      title: "Weekend Batches",
      desc: "For Working & Degree Aspirants"
    },
    {
      icon: FileText,
      title: "Regular Test Series",
      desc: "Chapter-Wise & Unit Mock Tests"
    },
    {
      icon: Newspaper,
      title: "Daily Newspaper Analysis",
      desc: "Prajavani & The Hindu GS Linkage"
    }
  ];

  return (
    <div className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-4 p-2 sm:p-0 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-navy-50 text-brand-navy-900 border border-brand-navy-200 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-brand-red-600" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-brand-navy-950 leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustBar;
