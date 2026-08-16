import React from 'react';
import { Clock, BookOpen, CheckCircle, ArrowRight, Sun, Coffee, BookMarked, HelpCircle, Moon } from 'lucide-react';
import { DAILY_ROUTINE } from '../../data/featuresData';
import SectionHeading from '../common/SectionHeading';
import Badge from '../ui/Badge';

const routineIcons = [Sun, BookOpen, Coffee, HelpCircle, Moon];

const DailyRoutine = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Disciplined Preparation"
          badgeVariant="primary"
          kannadaTitle="ದೈನಂದಿನ ಶಿಸ್ತುಬದ್ಧ ಅಧ್ಯಯನ ಕ್ರಮ"
          title="A Day in the Life of a Hassanamba Aspirant"
          description="Consistent daily habits turn ambitious aspirations into top ranks. Here is how our classroom and study hall days are structured."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {DAILY_ROUTINE.map((slot, index) => {
            const Icon = routineIcons[index % routineIcons.length];
            return (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 hover:bg-white hover:border-brand-navy-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Time Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-navy-900 text-white font-mono font-bold text-[11px]">
                      <Clock className="w-3 h-3 text-brand-gold-400" />
                      <span>{slot.time}</span>
                    </span>
                    <Icon className="w-4 h-4 text-brand-red-600" />
                  </div>

                  <h4 className="text-sm font-bold text-brand-navy-950 leading-snug">
                    {slot.title}
                  </h4>

                  {slot.kannada && (
                    <p className="text-xs font-semibold font-kannada text-brand-navy-600 mt-1 mb-2">
                      {slot.kannada}
                    </p>
                  )}

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {slot.desc}
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

export default DailyRoutine;
