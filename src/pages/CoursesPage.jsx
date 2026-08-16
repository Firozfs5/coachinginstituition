import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { CourseCard } from '../components/courses/CourseCard';
import { COURSES_DATA } from '../data/coursesData';
import { EXAM_CATEGORIES } from '../data/examsData';
import { CTASection } from '../components/common/CTASection';
import { Search, Sparkles, BookOpen, Layers } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

export const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { openEnquiryModal, openEnquiry } = useEnquiry();
  const handleOpen = openEnquiryModal || openEnquiry;

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const title = course.name || course.title || '';
    const desc = course.shortDesc || course.shortDescription || '';
    const targets = course.targetExams || [];
    const q = searchQuery.toLowerCase().trim();

    const matchesSearch = !q ||
      title.toLowerCase().includes(q) ||
      desc.toLowerCase().includes(q) ||
      targets.some(e => e.toLowerCase().includes(q));
      
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Courses & Batches" 
        description="Explore competitive exam coaching programs for KAS, IAS, PSI, PDO, FDA, SDA, Banking, RRB, NDA, TET, and PGCET at Hassanamba Coaching Academy, Hassan."
        keywords="KAS coaching courses Hassan, PSI coaching batches Hassan, PDO classes Hassan, Banking IBPS Hassanamba"
      />

      {/* Page Header Banner */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-600/30 text-crimson-300 border border-crimson-500/40 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Classroom & Weekend Programs</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
            Our Coaching Courses
          </h1>
          <p className="text-base sm:text-lg text-amber-300 font-kannada font-medium mt-2">
            ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳಿಗಾಗಿ ಸಮಗ್ರ ಹಾಗೂ ಶಿಸ್ತುಬದ್ಧ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳು
          </p>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Choose from 1, 2 & 3 year integrated foundations, regular daily batches, and executive weekend sessions designed to lead you to victory.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Category Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-card border border-slate-200 mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses or target exams (e.g. KAS, PSI, Banking, TET)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
              />
            </div>

            {/* Results Count */}
            <div className="text-xs font-bold text-slate-500">
              Showing <span className="text-navy-950 font-extrabold">{filteredCourses.length}</span> of {COURSES_DATA.length} Courses
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 no-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-navy-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Streams ({COURSES_DATA.length})
            </button>

            {EXAM_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-navy-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id || course.slug} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-card">
            <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-navy-950 font-heading">No Courses Found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We couldn't find any courses matching your search "{searchQuery}". Try searching for another exam or clear filters.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 px-4 py-2 bg-navy-900 text-white text-xs font-bold rounded-lg hover:bg-navy-800"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <CTASection 
        title="Not sure which course is right for you?"
        subtitle="Speak with our experienced academic counselors in Hassan for free course selection advice based on your degree and target exam."
      />
    </div>
  );
};

export default CoursesPage;
