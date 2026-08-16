import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { RESULTS_DATA } from '../data/resultsData';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { CTASection } from '../components/common/CTASection';
import { Award, CheckCircle2, ShieldCheck, UserCheck, Star, Sparkles } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

export const ResultsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const { openEnquiryModal, openEnquiry } = useEnquiry();
  const handleOpen = openEnquiryModal || openEnquiry;

  const filteredResults = selectedFilter === 'all'
    ? RESULTS_DATA
    : RESULTS_DATA.filter((r) => r.category === selectedFilter);

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Student Results & Hall of Fame" 
        description="Explore student achievements and selections in KAS, PSI, PDO, FDA, SDA, Banking, and Teaching examinations at Hassanamba Coaching Academy, Hassan."
      />

      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-600/30 text-crimson-300 border border-crimson-500/40 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Hall of Fame & Selections</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
            Our Students. Their Success.
          </h1>
          <p className="text-base sm:text-lg text-amber-300 font-kannada font-medium mt-2">
            ನಮ್ಮ ಹೆಮ್ಮೆಯ ಸಾಧಕ ವಿದ್ಯಾರ್ಥಿಗಳ ಸಾಧನೆಯ ಹಾದಿ
          </p>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            A tribute to the hard work, consistency, and disciplined test-taking of our competitive exam aspirants from Hassan district and Karnataka.
          </p>
        </div>
      </div>

      {/* Main Results Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
              selectedFilter === 'all'
                ? 'bg-navy-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Achievements ({RESULTS_DATA.length})
          </button>
          <button
            onClick={() => setSelectedFilter('govt-karnataka')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
              selectedFilter === 'govt-karnataka'
                ? 'bg-navy-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Karnataka & Govt (KAS, PSI, PDO, FDA)
          </button>
          <button
            onClick={() => setSelectedFilter('banking-railway')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
              selectedFilter === 'banking-railway'
                ? 'bg-navy-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Banking & Railway
          </button>
          <button
            onClick={() => setSelectedFilter('teaching')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
              selectedFilter === 'teaching'
                ? 'bg-navy-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Teaching (K-TET)
          </button>
          <button
            onClick={() => setSelectedFilter('defence-security')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
              selectedFilter === 'defence-security'
                ? 'bg-navy-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Defence (NDA/CDS/Army)
          </button>
        </div>

        {/* Results Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredResults.map((item) => {
            const name = item.studentName || item.candidateName;
            const exam = item.exam || item.examName;
            const achievement = item.achievement || item.cadre;
            const batch = item.batch || item.batchType;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-950 font-heading">
                    {name}
                  </h3>
                  {item.kannadaStudentName && (
                    <p className="text-xs text-crimson-700 font-kannada font-semibold mt-0.5">
                      {item.kannadaStudentName}
                    </p>
                  )}

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

                  <p className="text-xs text-slate-600 mt-3.5 italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-500 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Hassan Center
                  </span>
                  <span>{item.hometown}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-10 p-4 bg-navy-900/5 rounded-2xl border border-navy-900/10 text-center text-xs text-slate-600 max-w-2xl mx-auto">
          <p className="font-semibold text-navy-950 mb-1">
            Institutional Transparency Commitment:
          </p>
          <p>
            The above showcase reflects structured records of qualified candidates. Records are continuously updated following the official release of final selection lists by KPSC, KEA, UPSC, and IBPS.
          </p>
        </div>
      </div>

      {/* Aspirants Testimonial Stream */}
      <div className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Verified Aspirant Reviews"
            title="Voices from the Classroom"
            kannadaSubtitle="ವಿದ್ಯಾರ್ಥಿಗಳ ಅನುಭವ ಹಾಗೂ ಅಭಿಪ್ರಾಯಗಳು"
            description="Real experiences of candidates preparing in regular, weekend, and mock test batches at our Hassan center."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t) => {
              const review = t.review || t.feedback;
              const exam = t.targetExam || t.exam || t.designation;
              const location = t.location || t.hometown;

              return (
                <div key={t.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-card flex flex-col justify-between">
                  <div>
                    <div className="flex text-amber-400 gap-0.5 mb-3">
                      {[...Array(t.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed italic">
                      "{review}"
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200">
                    <p className="font-bold text-navy-950 text-xs">{t.studentName}</p>
                    <p className="text-[11px] text-crimson-700 font-semibold">{exam}</p>
                    <p className="text-[10px] text-slate-400">{t.batchType} • {location}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection 
        title="Be Our Next Success Story"
        subtitle="Enroll today for classroom batches and give your preparation the winning edge."
      />
    </div>
  );
};

export default ResultsPage;
