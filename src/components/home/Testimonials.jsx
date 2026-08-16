import React from 'react';
import { Star, Quote, UserCheck, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonialsData';
import SectionHeading from '../common/SectionHeading';
import Badge from '../ui/Badge';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Aspirant Voices"
          badgeVariant="primary"
          kannadaTitle="ವಿದ್ಯಾರ್ಥಿಗಳ ಅನುಭವ ಮತ್ತು ಅನಿಸಿಕೆಗಳು"
          title="What Aspirants Say About Us"
          description="Read genuine perspectives from candidates preparing across various competitive examination batches in Hassan."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-brand-navy-400 p-6 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-gold-400 text-brand-gold-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-navy-300" />
                </div>

                <Badge variant="red" className="text-[10px] mb-3">
                  {item.keyHighlight}
                </Badge>

                {/* Feedback */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.feedback}"
                </p>
              </div>

              {/* Student Profile Info */}
              <div className="pt-4 border-t border-slate-200/70 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-navy-900 text-brand-gold-400 flex items-center justify-center font-bold text-sm">
                  {item.studentName.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy-950">
                    {item.studentName}
                  </h4>
                  <p className="text-xs text-brand-red-600 font-medium">
                    {item.designation}
                  </p>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{item.hometown}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
