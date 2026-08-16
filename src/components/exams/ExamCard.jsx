import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  CheckSquare2, 
  BookOpen, 
  ArrowRight, 
  Sparkles,
  Award
} from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

export const ExamCard = ({ exam }) => {
  const { openEnquiryModal, openEnquiry } = useEnquiry();
  const handleOpen = openEnquiryModal || openEnquiry;

  const authority = exam.conductingBody || exam.authority || 'State / Central Body';
  const shortDesc = exam.overview || exam.shortDesc || exam.fullDesc;
  const topics = exam.keySubjects || exam.keyTopics || [];
  const stagesCount = exam.stages ? (Array.isArray(exam.stages) ? exam.stages.length : 3) : 3;
  const courseLink = exam.coachingCourseId || exam.recommendedCourse ? `/courses/${exam.coachingCourseId || exam.recommendedCourse}` : '/courses';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1">
      <div className="p-6">
        {/* Authority / Category Tag */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-bold bg-navy-50 text-navy-800 border border-navy-100">
            <Building2 className="w-3 h-3 text-navy-600" />
            {authority}
          </span>
          <span className="text-[11px] font-semibold text-slate-400">
            {stagesCount} Stages
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-navy-950 font-heading group-hover:text-crimson-600 transition-colors">
          {exam.name}
        </h3>

        {/* Kannada Name */}
        {exam.kannadaName && (
          <p className="text-xs text-crimson-700 font-kannada font-semibold mt-1">
            {exam.kannadaName}
          </p>
        )}

        {/* Short Description */}
        <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
          {shortDesc}
        </p>

        {/* Eligibility Snapshot */}
        {exam.eligibility && (
          <div className="mt-3.5 p-2.5 bg-slate-50 rounded-lg text-[11px] text-slate-700 border border-slate-100">
            <span className="font-bold text-slate-900 block mb-0.5">Eligibility:</span>
            <span className="line-clamp-1">{exam.eligibility}</span>
          </div>
        )}

        {/* Key Exam Topics / Stages */}
        {topics.length > 0 && (
          <div className="mt-3.5">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
              Key Focus Areas:
            </span>
            <div className="flex flex-wrap gap-1">
              {topics.slice(0, 3).map((topic, i) => (
                <span 
                  key={i} 
                  className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium"
                >
                  {typeof topic === 'string' ? topic : topic.name}
                </span>
              ))}
              {topics.length > 3 && (
                <span className="px-1.5 py-0.5 text-slate-400 text-[10px]">
                  +{topics.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
        <Link
          to={courseLink}
          className="inline-flex items-center text-xs font-bold text-navy-950 hover:text-crimson-600 transition-colors gap-1 group/link"
        >
          <span>View Coaching Batch</span>
          <ArrowRight className="w-3.5 h-3.5 text-navy-900 group-hover/link:translate-x-0.5 transition-transform" />
        </Link>

        <button
          onClick={() => handleOpen(exam.slug || exam.id)}
          className="px-3.5 py-1.5 rounded-lg bg-crimson-600 hover:bg-crimson-700 active:scale-95 text-white font-bold text-xs shadow transition-all flex items-center gap-1 border border-crimson-500"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
};

export default ExamCard;
