import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Landmark, 
  TrainFront, 
  ShieldAlert, 
  GraduationCap, 
  BookOpenCheck,
  ArrowRight, 
  Sparkles,
  CheckCircle,
  Building2
} from 'lucide-react';
import { EXAM_CATEGORIES, EXAMS_DATA } from '../../data/examsData';
import { SectionHeading } from '../common/SectionHeading';
import { ExamCard } from '../exams/ExamCard';
import { useEnquiry } from '../../context/EnquiryContext';

export const ExamCategoriesGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { openEnquiryModal, openEnquiry } = useEnquiry();

  const iconMap = {
    Landmark: Landmark,
    TrainFront: TrainFront,
    ShieldAlert: ShieldAlert,
    GraduationCap: GraduationCap,
    BookOpenCheck: BookOpenCheck,
  };

  const filteredExams = activeCategory === 'all'
    ? EXAMS_DATA
    : EXAMS_DATA.filter((exam) => exam.category === activeCategory);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="Exams Directory"
          title="Prepare for Your Dream Exam"
          kannadaSubtitle="ನಿಮ್ಮ ಕನಸಿನ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಯ ಸಂಪೂರ್ಣ ತಯಾರಿ"
          description="Structured coaching programs designed strictly according to the latest examination pattern and syllabus for state & central recruitments."
        />

        {/* Category Tabs Filter */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 flex items-center gap-1.5 ${
              activeCategory === 'all'
                ? 'bg-navy-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <span>All Exams</span>
            <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${activeCategory === 'all' ? 'bg-navy-800 text-amber-400' : 'bg-slate-100 text-slate-600'}`}>
              {EXAMS_DATA.length}
            </span>
          </button>

          {EXAM_CATEGORIES.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Landmark;
            const isActive = activeCategory === cat.id;
            const count = cat.count || (cat.exams ? cat.exams.length : 0);
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 flex items-center gap-2 ${
                  isActive
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                <span>{cat.name}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-navy-800 text-amber-400' : 'bg-slate-100 text-slate-600'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Exam Cards Grid — horizontal scroll on mobile, grid on md+ */}
        <div className="mobile-scroll-cards md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredExams.slice(0, 9).map((exam) => (
            <div key={exam.id} className="min-w-[85vw] sm:min-w-[340px] md:min-w-0">
              <ExamCard exam={exam} />
            </div>
          ))}
        </div>

        {/* View All Exams Link */}
        <div className="mt-12 text-center">
          <Link
            to="/exams"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all gap-2 group"
          >
            <span>Explore All 20+ Exam Notifications & Syllabi</span>
            <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExamCategoriesGrid;
