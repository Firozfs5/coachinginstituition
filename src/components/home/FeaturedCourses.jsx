import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Clock, CheckCircle2, Send, ArrowRight, 
  Calendar, Layers, Sparkles 
} from 'lucide-react';
import { COURSES } from '../../data/coursesData';
import { useModal } from '../../context/ModalContext';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const FeaturedCourses = () => {
  const { openEnquiry } = useModal();
  const featuredList = COURSES.slice(0, 6);

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Classroom Programs"
          badgeVariant="primary"
          kannadaTitle="ಉತ್ತಮ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಪರೀಕ್ಷಾ ಸಿದ್ಧತೆ"
          title="Our Popular Courses"
          description="Disciplined classroom coaching batches structured with daily newspaper analysis, comprehensive syllabus coverage, and regular mock evaluations."
        />

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredList.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-brand-navy-400 p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Stripe Accent */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-navy-900 via-brand-red-600 to-brand-gold-500 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                  <Badge variant="primary" className="text-[11px]">
                    {course.categoryName}
                  </Badge>
                  {course.badge && (
                    <Badge variant={course.badge === 'Most Popular' ? 'red' : 'gold'} className="text-[10px]">
                      {course.badge}
                    </Badge>
                  )}
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-brand-navy-950 group-hover:text-brand-navy-700 transition-colors leading-snug">
                  <Link to={`/courses/${course.id}`}>
                    {course.title}
                  </Link>
                </h3>

                {/* Kannada Subtitle */}
                {course.kannadaTitle && (
                  <p className="text-xs font-semibold font-kannada text-brand-red-600 mt-1 mb-3">
                    {course.kannadaTitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {course.shortDescription}
                </p>

                {/* Meta details (Duration & Batches) */}
                <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 mb-4 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-brand-red-600 shrink-0" />
                    <span className="font-semibold truncate">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-brand-navy-700 shrink-0" />
                    <span className="font-semibold truncate">Regular / Weekend</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Preparation Features
                  </span>
                  {course.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                <Button
                  to={`/courses/${course.id}`}
                  variant="secondary"
                  size="sm"
                  className="w-full text-xs font-bold"
                >
                  View Course
                </Button>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => openEnquiry(course.title)}
                  className="w-full text-xs font-bold shadow-sm"
                  icon={Send}
                  iconPosition="right"
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Button
            to="/courses"
            variant="navy"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
          >
            View All Courses & Integrated Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
