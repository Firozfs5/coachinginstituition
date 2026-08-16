import React from 'react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/home/Hero';
import { NoticeTicker } from '../components/home/NoticeTicker';
import { ExamCategoriesGrid } from '../components/home/ExamCategoriesGrid';
import { PopularCourses } from '../components/home/PopularCourses';
import { WhyChooseHassanamba } from '../components/home/WhyChooseHassanamba';
import { PreparationRoadmap } from '../components/home/PreparationRoadmap';
import { TestSeriesHighlight } from '../components/home/TestSeriesHighlight';
import { ResultsPreview } from '../components/home/ResultsPreview';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CTASection } from '../components/common/CTASection';
import { ContactForm } from '../components/common/ContactForm';
import { SectionHeading } from '../components/common/SectionHeading';
import { ACADEMY_INFO } from '../data/academyInfo';
import { MapPin, Phone, MessageSquare, Clock } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Prepare Today. Succeed Tomorrow."
        description="Hassanamba Coaching Academy in Hassan, Karnataka offers top coaching for KAS, IAS, PSI, PDO, FDA, SDA, Banking, RRB, NDA, TET, and PGCET competitive examinations."
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Notice Ticker */}
      <NoticeTicker />

      {/* 3. Exam Categories Grid */}
      <ExamCategoriesGrid />

      {/* 4. Popular Courses */}
      <PopularCourses />

      {/* 5. Why Choose Hassanamba (12 Pillars) */}
      <WhyChooseHassanamba />

      {/* 6. 6-Step Preparation Methodology */}
      <PreparationRoadmap />

      {/* 7. Test Series Highlight */}
      <TestSeriesHighlight />

      {/* 8. Results & Hall of Fame Preview */}
      <ResultsPreview />

      {/* 9. Aspirant Testimonials */}
      <TestimonialsSection />

      {/* 10. Admission Enquiry & Campus Contact Section on Homepage */}
      <section className="py-16 sm:py-24 bg-slate-100/80 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Direct Enrollment"
            title="Get Started With Free Academic Guidance"
            kannadaSubtitle="ಪ್ರವೇಶ ಹಾಗೂ ತರಬೇತಿ ಮಾಹಿತಿಗಾಗಿ ಸಂಪರ್ಕಿಸಿ"
            description="Submit the admission form below or walk in directly to our coaching campus near the New Bus Stand in Hassan for a personalized strategy session."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Info & Map Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-navy-800 space-y-5">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    Campus Location
                  </span>
                  <h3 className="text-xl font-extrabold font-heading text-white mt-1">
                    Hassanamba Coaching Academy
                  </h3>
                  <p className="text-xs text-slate-300 font-kannada mt-0.5">
                    ಹಾಸನಾಂಬ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷಾ ತರಬೇತಿ ಕೇಂದ್ರ
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-crimson-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Full Address:</p>
                      <p className="text-slate-200">{ACADEMY_INFO.address.fullAddress}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Admissions Desk:</p>
                      <a href={`tel:${ACADEMY_INFO.phones[0].raw}`} className="text-amber-300 font-bold block hover:underline">
                        {ACADEMY_INFO.phones[0].display}
                      </a>
                      <a href={`tel:${ACADEMY_INFO.phones[1].raw}`} className="text-slate-200 font-semibold block hover:underline">
                        {ACADEMY_INFO.phones[1].display}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Working Hours:</p>
                      <p className="text-slate-200">Mon – Sat: 7:00 AM – 8:30 PM</p>
                      <p className="text-slate-200">Sunday Batches: 7:30 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-navy-800 flex gap-3">
                  <a
                    href={ACADEMY_INFO.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-white text-xs text-center flex items-center justify-center gap-1.5 transition-colors shadow"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${ACADEMY_INFO.phones[0].raw}`}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-navy-800 hover:bg-navy-700 font-bold text-white text-xs text-center flex items-center justify-center gap-1.5 border border-navy-600 transition-colors shadow"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Map Container */}
              <div className="rounded-2xl overflow-hidden shadow-card border border-slate-200 h-64 bg-slate-200">
                <iframe
                  title="Hassanamba Coaching Academy Location Map"
                  src={ACADEMY_INFO.address.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right: Admission Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final High-Impact CTA Section */}
      <CTASection />
    </div>
  );
};

export default HomePage;
