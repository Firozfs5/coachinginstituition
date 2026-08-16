import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { EXAM_CATEGORIES, EXAMS_DATA } from '../data/examsData';
import { ExamCard } from '../components/exams/ExamCard';
import { CTASection } from '../components/common/CTASection';
import { Search, Landmark, TrainFront, ShieldAlert, GraduationCap, BookOpenCheck } from 'lucide-react';

export const ExamsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const iconMap = {
    Landmark,
    TrainFront,
    ShieldAlert,
    GraduationCap,
    BookOpenCheck,
  };

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const filteredExams = EXAMS_DATA.filter((exam) => {
    const matchesCategory = selectedCategory === 'all' || exam.category === selectedCategory;
    const name = exam.name || '';
    const auth = exam.authority || exam.conductingBody || '';
    const desc = exam.shortDesc || exam.overview || '';
    const q = searchQuery.toLowerCase().trim();

    const matchesSearch = !q ||
      name.toLowerCase().includes(q) ||
      auth.toLowerCase().includes(q) ||
      desc.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Competitive Exams Coached" 
        description="Comprehensive coaching for 20+ competitive exams including KAS, IAS, PSI, PDO, FDA, SDA, Banking, RRB NTPC, NDA, CDS, TET, and PGCET in Hassan, Karnataka."
        keywords="KPSC exams Hassan, KAS exam coaching, PSI exam preparation Hassan, PDO exam Hassan, Banking coaching"
      />

      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-600/30 text-crimson-300 border border-crimson-500/40 text-xs font-bold uppercase tracking-wider mb-3">
            <Landmark className="w-3.5 h-3.5 text-amber-400" />
            <span>State & National Recruitment Exams</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
            Competitive Exams Portal
          </h1>
          <p className="text-base sm:text-lg text-amber-300 font-kannada font-medium mt-2">
            ಕರ್ನಾಟಕ ಹಾಗೂ ರಾಷ್ಟ್ರ ಮಟ್ಟದ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳ ಮಾಹಿತಿ ಕೋಶ
          </p>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Detailed information on exam eligibility, selection stages, key syllabus topics, and our dedicated coaching batches in Hassan.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-card border border-slate-200 mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search exams (e.g. KAS, PSI, IBPS, Army, TET)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
              />
            </div>

            <div className="text-xs font-bold text-slate-500">
              Showing <span className="text-navy-950 font-extrabold">{filteredExams.length}</span> Exams
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 no-scrollbar">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-navy-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Categories ({EXAMS_DATA.length})
            </button>

            {EXAM_CATEGORIES.map((cat) => {
              const IconComponent = iconMap[cat.icon] || Landmark;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-navy-900 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredExams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default ExamsPage;
