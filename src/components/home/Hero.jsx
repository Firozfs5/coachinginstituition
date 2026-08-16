import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  GraduationCap,
  BookOpen,
  Award,
  ShieldCheck,
  Users
} from 'lucide-react';
import { ACADEMY_INFO } from '../../data/academyInfo';
import { useEnquiry } from '../../context/EnquiryContext';

export const Hero = () => {
  const { openEnquiryModal } = useEnquiry();

  return (
    <div className="relative bg-navy-950 text-white overflow-hidden pt-4 pb-10 sm:pt-6 sm:pb-16 md:pb-20 lg:pt-10 lg:pb-24">
      {/* Background Subtle Patterns & Glows */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-crimson-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-navy-800/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust / Kannada Institutional Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900 border border-amber-400/30 text-amber-400 text-xs font-bold font-kannada shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                ಹಾಸನಾಂಬ ಕೋಚಿಂಗ್ ಅಕಾಡೆಮಿ – ಹಾಸನ
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-crimson-600/20 border border-crimson-500/30 text-crimson-300 text-[11px] font-bold uppercase tracking-wider">
                Admissions Open 2026
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.15] text-white">
              Prepare Today.{' '}
              <span className="text-amber-400 block sm:inline">
                Succeed Tomorrow.
              </span>
            </h1>

            {/* Kannada Tagline Subtext */}
            <p className="text-sm sm:text-base md:text-lg text-amber-300 font-kannada font-medium max-w-2xl mx-auto lg:mx-0">
              ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ಯಶಸ್ಸು ಸಾಧಿಸಲು ಶಿಸ್ತುಬದ್ಧ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ತರಬೇತಿ
            </p>

            {/* Supporting Text */}
            <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Expert coaching, structured preparation, regular practice tests and personal guidance for Karnataka (KAS, PSI, PDO, FDA, SDA, TET) and national (IAS, Banking, Railway, Defence, PGCET) competitive examinations.
            </p>

            {/* Trust Indicator Pill */}
            <div className="p-2.5 sm:p-3 bg-navy-900 rounded-xl border border-navy-700 backdrop-blur-sm max-w-xl mx-auto lg:mx-0 text-[11px] sm:text-xs md:text-sm font-semibold text-slate-100 flex items-center justify-center lg:justify-start gap-2 shadow-md">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-center lg:text-left">
                1, 2 & 3 Year Courses • Weekend Batches • Regular Test Series
              </span>
            </div>

            {/* Action Buttons Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm shadow-xl active:scale-95 transition-all gap-2 group border border-crimson-500"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => openEnquiryModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-bold text-sm border border-navy-600 active:scale-95 shadow-md transition-all gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Enquire Now</span>
              </button>

              <a
                href={ACADEMY_INFO.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-all gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Contact Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-3 text-[10px] sm:text-xs text-slate-300">
              <span className="text-slate-300 font-medium">Direct Admissions Desk:</span>
              <a
                href={`tel:${ACADEMY_INFO.phones[0].raw}`}
                className="font-bold text-amber-300 hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {ACADEMY_INFO.phones[0].number}
              </a>
              <span className="text-slate-500">/</span>
              <a
                href={`tel:${ACADEMY_INFO.phones[1].raw}`}
                className="font-bold text-slate-200 hover:text-amber-300 hover:underline"
              >
                {ACADEMY_INFO.phones[1].number}
              </a>
            </div>
          </div>

          {/* Right Column (5 cols) - Visual Institutional Card with Classroom Image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-crimson-600 via-amber-500 to-navy-700 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>

              <div className="relative rounded-2xl bg-navy-900 border border-navy-700/80 p-3 shadow-2xl overflow-hidden">
                {/* Hero Image Container */}
                <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden bg-navy-950">
                  <img
                    src="/images/hero_classroom.png"
                    alt="Hassanamba Coaching Academy Classroom & Competitive Exam Aspirants"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>

                  {/* Overlay Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-navy-950/90 text-amber-400 text-xs font-bold border border-amber-500/30 backdrop-blur-md flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                      Classroom Batches
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-navy-950/90 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <p className="font-bold text-white">Hassanamba Coaching Academy</p>
                        <p className="text-[11px] text-slate-300 font-kannada">Opp. New Bus Stand, KHB Layout, Hassan</p>
                      </div>
                      <span className="text-[10px] px-2 py-1 bg-crimson-600 text-white font-bold rounded">
                        Est. Center
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3 Quick Benefit Metric Pills Below Hero Image */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-slate-300">
                  <div className="p-2.5 bg-navy-950/60 rounded-lg border border-navy-800">
                    <p className="text-sm sm:text-base font-extrabold text-amber-400">20+</p>
                    <p className="text-[10px] text-slate-400 font-medium">Exam Streams</p>
                  </div>
                  <div className="p-2.5 bg-navy-950/60 rounded-lg border border-navy-800">
                    <p className="text-sm sm:text-base font-extrabold text-emerald-400">Daily</p>
                    <p className="text-[10px] text-slate-400 font-medium">Doubt Sessions</p>
                  </div>
                  <div className="p-2.5 bg-navy-950/60 rounded-lg border border-navy-800">
                    <p className="text-sm sm:text-base font-extrabold text-crimson-400">Weekly</p>
                    <p className="text-[10px] text-slate-400 font-medium">OMR Test Series</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
