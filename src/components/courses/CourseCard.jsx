import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Calendar, 
  BookOpen, 
  CheckCircle, 
  Sparkles, 
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

export const CourseCard = ({ course }) => {
  const { openEnquiryModal, openEnquiry } = useEnquiry();
  const handleOpen = openEnquiryModal || openEnquiry;

  const slug = course.slug || course.id;
  const title = course.name || course.title;
  const kannada = course.kannadaName || course.kannadaTitle;
  const desc = course.shortDesc || course.shortDescription;
  const targets = course.targetExams || [];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:-translate-y-1">
      {/* Top Banner with Badge */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold bg-navy-50 text-navy-800 border border-navy-200">
            {course.badge || 'Classroom Coaching'}
          </span>
          <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            {course.duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-navy-950 font-heading group-hover:text-crimson-600 transition-colors">
          <Link to={`/courses/${slug}`}>
            {title}
          </Link>
        </h3>

        {/* Kannada Title */}
        {kannada && (
          <p className="text-xs text-crimson-700 font-kannada font-semibold mt-1">
            {kannada}
          </p>
        )}

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-700 mt-3 line-clamp-2 leading-relaxed font-normal">
          {desc}
        </p>

        {/* Target Exams Pills */}
        {targets.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-100">
            <span className="text-[11px] font-bold text-navy-950 uppercase tracking-wider block mb-1.5">
              Target Exams:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {targets.map((exam, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 text-[11px] font-semibold border border-slate-200"
                >
                  {exam}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Features Bullet points */}
        <div className="mt-4 space-y-1.5 text-xs text-slate-700 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span>Regular & Weekend Batches Available</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span>Chapter & Unit-wise OMR Test Series</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span>Bilingual Kannada & English Materials</span>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
        <Link
          to={`/courses/${slug}`}
          className="inline-flex items-center text-xs font-bold text-navy-950 hover:text-crimson-600 transition-colors gap-1 group/btn"
        >
          <span>View Course</span>
          <ArrowRight className="w-3.5 h-3.5 text-navy-900 group-hover/btn:translate-x-1 transition-transform" />
        </Link>

        <button
          onClick={() => handleOpen(slug)}
          className="px-3.5 py-1.5 rounded-lg bg-crimson-600 hover:bg-crimson-700 active:scale-95 text-white font-bold text-xs shadow transition-all flex items-center gap-1.5 border border-crimson-500"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Enquire Now</span>
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
