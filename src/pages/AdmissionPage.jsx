import React from 'react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { ContactForm } from '../components/common/ContactForm';
import { ACADEMY_INFO } from '../data/academyInfo';
import { 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  Calendar, 
  FileText, 
  Users, 
  Award,
  ShieldCheck
} from 'lucide-react';

export const AdmissionPage = () => {
  const steps = [
    {
      num: "1",
      title: "Submit Online Enquiry",
      desc: "Fill in your details and target competitive exam in the admission form."
    },
    {
      num: "2",
      title: "Academic Counseling Call",
      desc: "Our senior mentor in Hassan contacts you with course syllabus and schedule."
    },
    {
      num: "3",
      title: "Campus Demo & Batch Selection",
      desc: "Visit our campus near New Bus Stand, attend a demo session, and finalize batch."
    },
    {
      num: "4",
      title: "Enrollment & Study Kit",
      desc: "Receive your bilingual notes, test series pass, and classroom timetable."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Admissions 2026" 
        description="Enroll for KAS, IAS, PSI, PDO, FDA, SDA, Banking, and Teaching coaching batches at Hassanamba Coaching Academy in Hassan. Regular, Weekend & 1-Year Foundation batches."
      />

      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-600/30 text-crimson-300 border border-crimson-500/40 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Admissions Open 2026</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
            Admission & Batch Registration
          </h1>
          <p className="text-base sm:text-lg text-amber-300 font-kannada font-medium mt-2">
            ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳ ಹೊಸ ಬ್ಯಾಚ್‌ಗಳ ಪ್ರವೇಶ ಪ್ರಾರಂಭವಾಗಿದೆ
          </p>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Reserve your seat in our upcoming Regular, Weekend, and 1-Year Integrated Foundation batches in Hassan.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 4-Step Admission Process */}
        <div className="mb-16">
          <SectionHeading
            badge="Simple Process"
            title="How to Secure Your Admission"
            kannadaSubtitle="ಪ್ರವೇಶ ಪಡೆಯುವ ಸುಲಭ ಹಂತಗಳು"
            description="Follow these straightforward steps to start your disciplined competitive preparation."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card text-center relative group">
                <div className="w-12 h-12 rounded-2xl bg-navy-900 text-amber-400 font-extrabold text-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-crimson-600 group-hover:text-white transition-colors">
                  {s.num}
                </div>
                <h3 className="font-bold text-navy-950 text-base font-heading mb-1">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Form & Helplines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Key Admission Features (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-navy-800 space-y-5">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Why Enroll at Hassanamba?
                </span>
                <h3 className="text-xl font-extrabold font-heading mt-1">
                  What Every Student Receives
                </h3>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive printed study material in Kannada & English.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Access to Chapter-wise, Unit-wise & Full OMR Mock Tests.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Daily 1-hour doubt clearing and mentor reviews.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Daily newspaper editorial breakdown and monthly current affairs magazine.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Hostel guidance for outstation students arriving from rural taluks.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-navy-800">
                <p className="text-xs text-slate-400 mb-2">Direct Admission Helpline:</p>
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${ACADEMY_INFO.phones[0].raw}`}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{ACADEMY_INFO.phones[0].number}</span>
                  </a>
                  <a
                    href={ACADEMY_INFO.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Admission Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
