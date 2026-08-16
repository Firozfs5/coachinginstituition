import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { FAQS_DATA, FAQ_CATEGORIES } from '../data/faqsData';
import { CTASection } from '../components/common/CTASection';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  Sparkles, 
  Phone, 
  MessageSquare
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyInfo';
import { useEnquiry } from '../context/EnquiryContext';

export const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState('faq-01');
  const { openEnquiryModal, openEnquiry } = useEnquiry();
  const handleOpen = openEnquiryModal || openEnquiry;

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q) ||
      (faq.kannadaQuestion && faq.kannadaQuestion.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Frequently Asked Questions (FAQ)" 
        description="Find answers to common questions regarding competitive exam coaching, weekend batches, test series, study materials, and admissions at Hassanamba Coaching Academy."
      />

      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-600/30 text-crimson-300 border border-crimson-500/40 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Got Questions?</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-amber-300 font-kannada font-medium mt-2">
            ಸಾಮಾನ್ಯವಾಗಿ ಕೇಳಲಾಗುವ ಪ್ರಮುಖ ಪ್ರಶ್ನೋತ್ತರಗಳು
          </p>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our classroom batches, fees inquiry, test series, mentorship, and location in Hassan.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Category Filter */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-card border border-slate-200 mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions (e.g. weekend batch, fees, location, PGCET)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <h3 className="font-extrabold text-navy-950 text-sm sm:text-base font-heading">
                        {faq.question}
                      </h3>
                      {faq.kannadaQuestion && (
                        <p className="text-xs text-crimson-700 font-kannada font-semibold mt-0.5">
                          {faq.kannadaQuestion}
                        </p>
                      )}
                    </div>
                    <div className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-navy-900 text-white' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 shadow-card">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-navy-950 font-heading">No Questions Found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try searching with different keywords or call our desk directly.
            </p>
          </div>
        )}

        {/* Still have questions block */}
        <div className="mt-12 p-6 sm:p-8 bg-navy-950 text-white rounded-3xl shadow-xl text-center space-y-4 border border-navy-800">
          <h3 className="text-lg sm:text-xl font-extrabold font-heading">
            Still Have Questions?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Our academic counselors in Hassan are available 7 days a week to answer your specific course and syllabus questions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${ACADEMY_INFO.phones[0].raw}`}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call 99455 42456</span>
            </a>
            <button
              onClick={() => handleOpen()}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-bold text-xs border border-navy-700 shadow"
            >
              Request Call Back
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default FAQPage;
