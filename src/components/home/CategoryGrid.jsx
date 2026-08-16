import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, Landmark, Crosshair, GraduationCap, 
  BookOpenCheck, ArrowRight, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { EXAM_CATEGORIES } from '../../data/examsData';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const iconMap = {
  ShieldAlert,
  Landmark,
  Crosshair,
  GraduationCap,
  BookOpenCheck
};

const CategoryGrid = () => {
  const [activeTab, setActiveTab] = useState(EXAM_CATEGORIES[0].id);

  const currentCategory = EXAM_CATEGORIES.find((cat) => cat.id === activeTab) || EXAM_CATEGORIES[0];
  const CategoryIcon = iconMap[currentCategory.icon] || ShieldAlert;

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Exams Covered"
          badgeVariant="red"
          kannadaTitle="ನಿಮ್ಮ ಕನಸಿನ ಹುದ್ದೆಗೆ ಪರಿಪೂರ್ಣ ಸಿದ್ಧತೆ"
          title="Prepare for Your Dream Exam"
          description="Explore our specialized preparation tracks categorized by recruitment boards, syllabus depth, and career pathways."
        />

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {EXAM_CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon] || ShieldAlert;
            const isActive = activeTab === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-brand-navy-900 text-white shadow-lg shadow-brand-navy-900/20 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-brand-navy-900 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-gold-400' : 'text-brand-red-600'}`} />
                <span>{category.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {category.exams.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Header Banner */}
        <div className="bg-gradient-to-r from-brand-navy-900 to-brand-navy-800 text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-brand-gold-400 shrink-0">
              <CategoryIcon className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xs font-semibold font-kannada text-brand-gold-300">
                {currentCategory.kannadaName}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {currentCategory.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                {currentCategory.description}
              </p>
            </div>
          </div>

          <Link
            to="/exams"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-gold-400 hover:text-white transition-colors shrink-0"
          >
            <span>View All Exam Syllabus</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Exam Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.exams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-brand-navy-300 p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Conducting Body */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="primary" className="text-[10px]">
                    {exam.conductingBody}
                  </Badge>
                  <span className="text-[11px] font-semibold text-slate-400 font-mono">
                    {exam.stages.length} Stages
                  </span>
                </div>

                <h4 className="text-lg font-bold text-brand-navy-950 group-hover:text-brand-red-600 transition-colors leading-snug">
                  {exam.name}
                </h4>
                
                <p className="text-xs font-medium font-kannada text-brand-navy-600 mt-0.5 mb-3">
                  {exam.kannadaName}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                  {exam.overview}
                </p>

                {/* Stages List */}
                <div className="space-y-1.5 mb-5 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Selection Structure
                  </span>
                  {exam.stages.map((st, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red-600 shrink-0" />
                      <span className="font-semibold text-brand-navy-900">{st.name}:</span>
                      <span className="text-slate-600 truncate">{st.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  to={`/courses/${exam.coachingCourseId}`}
                  className="text-xs font-bold text-brand-red-600 hover:text-brand-red-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>View Coaching Batch</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/exams"
                  className="text-xs font-semibold text-slate-500 hover:text-brand-navy-900 transition-colors"
                >
                  Exam Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button
            to="/exams"
            variant="navy"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
          >
            Explore Complete Exam Syllabus & Eligibility Guide
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
