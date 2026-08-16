import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, Sparkles, CheckCircle2, UserCheck, ShieldCheck } from 'lucide-react';
import { RESULTS_DATA } from '../../data/resultsData';
import { SectionHeading } from '../common/SectionHeading';

export const ResultsPreview = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Hall of Fame"
          title="Our Students. Their Success."
          kannadaSubtitle="ನಮ್ಮ ಹೆಮ್ಮೆಯ ಸಾಧಕ ವಿದ್ಯಾರ್ಥಿಗಳು"
          description="Consistent dedication, disciplined test series, and mentorship bring results. Explore achievements of candidates trained across Karnataka state & national competitive exams."
        />

        {/* Structured Results Cards Grid — horizontal scroll on mobile */}
        <div className="mobile-scroll-cards sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESULTS_DATA.slice(0, 4).map((item) => {
            const name = item.studentName || item.candidateName;
            const exam = item.exam || item.examName;
            const achievement = item.achievement || item.cadre;
            const batch = item.batch || item.batchType;

            return (
              <div key={item.id} className="min-w-[80vw] sm:min-w-[280px] md:min-w-0">
                <div
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 h-full"
                >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {item.year}
                    </span>
                  </div>

                  {/* Candidate Name / Placeholder */}
                  <h3 className="text-lg font-bold text-navy-950 font-heading">
                    {name}
                  </h3>
                  {item.kannadaStudentName && (
                    <p className="text-xs text-crimson-700 font-kannada font-semibold mt-0.5">
                      {item.kannadaStudentName}
                    </p>
                  )}

                  {/* Exam & Rank */}
                  <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1">
                    <p className="text-slate-500">
                      Exam: <strong className="text-navy-900 font-semibold">{exam}</strong>
                    </p>
                    <p className="text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </p>
                    <p className="text-slate-400 text-[11px]">
                      Batch: {batch}
                    </p>
                  </div>

                  {/* Quote */}
                  <p className="text-xs text-slate-600 mt-3.5 italic leading-relaxed line-clamp-3">
                    "{item.quote}"
                  </p>
                </div>

                {/* Verified Badge */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-500 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Hassan Center
                  </span>
                  <span>{item.hometown}</span>
                </div>
              </div>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="mt-12 text-center">
          <Link
            to="/results"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all gap-2 group"
          >
            <span>View All Student Results & Testimonials</span>
            <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResultsPreview;
