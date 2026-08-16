import React from 'react';
import { Phone, MessageSquare, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { ACADEMY_INFO } from '../../data/academyInfo';
import { useEnquiry } from '../../context/EnquiryContext';

export const CTASection = ({ 
  title = "Start Your Competitive Exam Preparation Today",
  subtitle = "Admissions open for Regular, Weekend, and 1-Year Integrated Foundation Batches.",
  kannadaNote = "ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳ ತರಬೇತಿಗಾಗಿ ಇಂದೇ ಭೇಟಿ ನೀಡಿ / ಕರೆ ಮಾಡಿ",
  kannadaTitle,
  showFeatures = true
}) => {
  const { openEnquiryModal } = useEnquiry();
  const kannada = kannadaTitle || kannadaNote;

  return (
    <section className="relative py-16 sm:py-20 bg-navy-950 text-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-crimson-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-navy-700/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-navy-700/80 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-600/20 text-crimson-300 border border-crimson-500/30 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>New Batch Registrations Open</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading">
                {title}
              </h2>

              {kannada && (
                <p className="text-sm sm:text-base text-amber-300 font-kannada font-medium">
                  {kannada}
                </p>
              )}

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                {subtitle}
              </p>

              {/* Quick Feature Ticks */}
              {showFeatures && (
                <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Free Initial Counseling</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Bilingual Study Kits</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Hostel Guidance for Outstation Students</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Buttons (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
              <button
                onClick={() => openEnquiryModal()}
                className="w-full py-3.5 px-6 rounded-xl bg-crimson-600 hover:bg-crimson-700 active:scale-95 font-bold text-white text-center shadow-xl hover:shadow-2xl transition-all text-sm flex items-center justify-center gap-2 border border-crimson-400/30 group"
              >
                <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
                <span>Book Admission Enquiry</span>
              </button>

              <a
                href={`tel:${ACADEMY_INFO.phones[0].raw}`}
                className="w-full py-3.5 px-6 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-bold text-center border border-navy-600 text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {ACADEMY_INFO.phones[0].number}</span>
              </a>

              <a
                href={ACADEMY_INFO.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-center text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Quick WhatsApp Message</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
