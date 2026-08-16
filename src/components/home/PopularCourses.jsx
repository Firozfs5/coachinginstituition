import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { COURSES_DATA } from '../../data/coursesData';
import { SectionHeading } from '../common/SectionHeading';
import { CourseCard } from '../courses/CourseCard';

export const PopularCourses = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Structured Coaching"
          title="Our Popular Courses"
          kannadaSubtitle="ಅಭ್ಯರ್ಥಿಗಳ ನೆಚ್ಚಿನ ಪ್ರಮುಖ ತರಬೇತಿ ಕೋರ್ಸ್‌ಗಳು"
          description="Holistic programs combining in-depth conceptual lectures, bilingual study material, daily newspaper analysis, and weekly mock exams."
        />

        {/* Course Cards Grid — horizontal scroll on mobile, grid on md+ */}
        <div className="mobile-scroll-cards md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COURSES_DATA.slice(0, 6).map((course) => (
            <div key={course.id} className="min-w-[85vw] sm:min-w-[340px] md:min-w-0">
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* Bottom CTA to View All Courses */}
        <div className="mt-12 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all gap-2 group"
          >
            <span>View All Classroom Courses & Batches</span>
            <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
