import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ClipboardList, 
  FileText, 
  History, 
  CheckCircle, 
  BarChart2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Target
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { useEnquiry } from '../../context/EnquiryContext';

export const TestSeriesHighlight = () => {
  const { openEnquiryModal, openEnquiry } = useEnquiry();
  const handleOpen = openEnquiryModal || openEnquiry;

  const testPillars = [
    {
      title: "Chapter-Wise Tests",
      kannadaTitle: "ಅಧ್ಯಾಯವಾರು ಪರೀಕ್ಷೆಗಳು",
      desc: "Daily 20-30 question tests immediately after completing every syllabus topic to cement conceptual clarity.",
      icon: FileText
    },
    {
      title: "Unit-Wise Tests",
      kannadaTitle: "ಘಟಕವಾರು ಪರೀಕ್ಷೆಗಳು",
      desc: "Combined subject tests to test cross-topic retention, recall speed, and syllabus synthesis.",
      icon: ClipboardList
    },
    {
      title: "Previous Year Questions (PYQs)",
      kannadaTitle: "ಹಿಂದಿನ ವರ್ಷಗಳ ಪ್ರಶ್ನೋತ್ತರಗಳು",
      desc: "Exhaustive breakdown of last 15 years KPSC, KEA, UPSC, and Banking questions with negative marking.",
      icon: History
    },
    {
      title: "Full-Length Mock Examinations",
      kannadaTitle: "ಪೂರ್ಣ ಪ್ರಮಾಣದ ಮಾದರಿ ಪರೀಕ್ಷೆ",
      desc: "Strictly timed full syllabus simulations on authentic OMR sheets and CBT test simulators.",
      icon: Target
    },
    {
      title: "Detailed Answer Keys & Solutions",
      kannadaTitle: "ಸಮಗ್ರ ವಿವರಣಾತ್ಮಕ ಕೀ-ಉತ್ತರಗಳು",
      desc: "Bilingual answer keys with explanations in Kannada and English provided immediately post-exam.",
      icon: CheckCircle
    },
    {
      title: "Personal Performance Analysis",
      kannadaTitle: "ವೈಯಕ್ತಿಕ ಸಾಮರ್ಥ್ಯ ವಿಶ್ಲೇಷಣೆ",
      desc: "Identification of silly mistakes, weak subject areas, time wastage, and statewide percentile tracking.",
      icon: BarChart2
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl relative overflow-hidden">
          {/* Background grid */}
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none"></div>

          <div className="relative">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-600/30 text-crimson-300 border border-crimson-500/40 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Rigorous Evaluation Framework</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-heading">
                Practice. Improve. Repeat.
              </h2>
              <p className="text-sm sm:text-base text-amber-300 font-kannada font-medium mt-1">
                ನಿರಂತರ ಅಭ್ಯಾಸ ಮತ್ತು ಮೌಲ್ಯಮಾಪನವೇ ಯಶಸ್ಸಿನ ಮೂಲ ಮಂತ್ರ
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                Competitive exams are won not just by reading books, but by solving hundreds of questions under authentic exam pressure. Hassanamba Coaching Academy delivers an unmatched testing infrastructure in Hassan.
              </p>
            </div>

            {/* Test Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testPillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl bg-navy-900/80 border border-navy-700/80 hover:border-amber-400/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy-950 border border-navy-700 flex items-center justify-center text-amber-400 mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base font-heading">{item.title}</h3>
                    <p className="text-[11px] text-amber-400 font-kannada font-medium mb-1">{item.kannadaTitle}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="mt-10 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/test-series"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 font-bold text-white text-sm shadow-lg transition-all gap-2"
              >
                <span>Explore Full Test Series Portal</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </Link>

              <button
                onClick={() => handleOpen('test-series-only')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-semibold text-sm border border-navy-600 transition-colors gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Join Test Series Only</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestSeriesHighlight;
