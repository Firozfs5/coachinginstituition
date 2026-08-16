import React from 'react';
import { Star, Quote, UserCheck, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';
import { SectionHeading } from '../common/SectionHeading';

export const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Aspirant Feedback"
          title="What Our Aspirants Say"
          kannadaSubtitle="ವಿದ್ಯಾರ್ಥಿಗಳ ಅನಿಸಿಕೆ ಮತ್ತು ವಿಮರ್ಶೆಗಳು"
          description="Read experiences from classroom aspirants who attended our regular, weekend, and test series batches in Hassan."
        />

        {/* Testimonials Grid — horizontal scroll on mobile */}
        <div className="mobile-scroll-cards md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.slice(0, 3).map((item) => {
            const review = item.review || item.feedback;
            const exam = item.targetExam || item.exam || item.designation;
            const location = item.location || item.hometown;

            return (
              <div key={item.id} className="min-w-[85vw] sm:min-w-[320px] md:min-w-0">
                <div
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between h-full"
                >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-slate-300" />
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{review}"
                  </p>
                </div>

                {/* Aspirant Details */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-navy-950 text-xs sm:text-sm">{item.studentName}</h4>
                    <p className="text-[11px] text-crimson-700 font-semibold">{exam}</p>
                    <p className="text-[10px] text-slate-400">{item.batchType} • {location}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-navy-100 flex items-center justify-center text-navy-800">
                    <UserCheck className="w-4 h-4" />
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
