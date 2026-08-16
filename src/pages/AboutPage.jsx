import React from 'react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { PreparationRoadmap } from '../components/home/PreparationRoadmap';
import { CTASection } from '../components/common/CTASection';
import { ACADEMY_INFO } from '../data/academyInfo';
import { 
  GraduationCap, 
  Target, 
  Eye, 
  Award, 
  BookOpen, 
  Users, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Clock,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

export const AboutPage = () => {
  const { openEnquiryModal, openEnquiry } = useEnquiry();
  const handleOpen = openEnquiryModal || openEnquiry;

  const facilities = [
    {
      title: "Classroom Learning Environment",
      desc: "Spacious, well-ventilated lecture halls equipped with modern teaching aids and disciplined study atmosphere.",
      icon: GraduationCap
    },
    {
      title: "Study Material & Library Support",
      desc: "Comprehensive bilingual printed study material, Karnataka special notes, and reference books repository.",
      icon: BookOpen
    },
    {
      title: "Daily Doubt Resolution Desk",
      desc: "Dedicated faculty hours immediately post-class to resolve student doubts one-on-one.",
      icon: Users
    },
    {
      title: "Weekend Batch Infrastructure",
      desc: "Full-day Saturday and Sunday programs with structured timetable for working professionals & degree students.",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="About Us" 
        description="Learn about Hassanamba Coaching Academy in Hassan, Karnataka – our mission, structured preparation system, faculty mentorship, and campus facilities."
      />

      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-600/30 text-crimson-300 border border-crimson-500/40 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Center of Academic Excellence</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
            About Hassanamba Coaching Academy
          </h1>
          <p className="text-base sm:text-lg text-amber-300 font-kannada font-medium mt-2">
            ಹಾಸನದಲ್ಲಿ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳ ಶ್ರೇಷ್ಠ ತರಬೇತಿ ಸಂಸ್ಥೆ
          </p>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Committed to empowering aspirants from Hassan and across Karnataka to clear state and national competitive examinations through disciplined preparation.
          </p>
        </div>
      </div>

      {/* Institutional Overview & Mission/Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: About Summary (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-navy-100 text-navy-900 border border-navy-200 text-xs font-bold uppercase">
              Our Identity & Purpose
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-950 font-heading">
              Dedicated to Serious Competitive Exam Aspirants
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>Hassanamba Coaching Academy</strong>, established in the heart of Hassan city near the New Bus Stand, is a premier competitive examination institute. Our core philosophy is built on structured classroom learning, disciplined daily practice, and individual mentorship.
            </p>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              We prepare candidates systematically for Karnataka State recruitments (KAS, PSI, PDO, FDA, SDA, KPSC Group C, KEA Exams, K-TET) as well as national prestige examinations (IAS, IBPS Banking, Railway RRB, NDA, CDS, and Karnataka PGCET).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-crimson-50 text-crimson-600 flex items-center justify-center mb-2">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-950 text-sm">Our Mission</h3>
                <p className="text-xs text-slate-600 mt-1">
                  To provide affordable, high-quality, and disciplined competitive coaching with bilingual clarity so that every deserving student can secure a government career.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy-950 text-sm">Our Vision</h3>
                <p className="text-xs text-slate-600 mt-1">
                  To emerge as Karnataka's most trusted regional coaching academy, known for transparent guidance, academic rigor, and stellar student achievements.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Key Highlights Box (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-navy-950 text-white rounded-3xl p-8 shadow-2xl border border-navy-800 space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Systematic Preparation
                </span>
                <h3 className="text-xl font-extrabold font-heading mt-1">
                  The Hassanamba Advantage
                </h3>
                <p className="text-xs text-slate-300 font-kannada mt-0.5">
                  ವ್ಯವಸ್ಥಿತ ಅಧ್ಯಯನ ಕ್ರಮ
                </p>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Classroom Coaching:</strong> Daily concept-driven lectures in Kannada & English.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Daily Practice:</strong> Topic-wise questions and translation drills.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Mentorship:</strong> 1-on-1 performance reviews and study time allocation.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Current Affairs:</strong> Daily The Hindu/Prajavani editorial breakdown.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Test Series:</strong> Chapter-wise, unit-wise, and full OMR mock tests.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Doubt Clearing:</strong> Daily dedicated counters post-lectures.</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleOpen()}
                  className="w-full py-3 rounded-xl bg-crimson-600 hover:bg-crimson-700 font-bold text-white text-xs shadow-lg transition-colors"
                >
                  Book a Campus Visit & Counseling
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preparation Methodology Section */}
      <PreparationRoadmap />

      {/* Campus Facilities */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Campus & Resources"
            title="Infrastructure Built for Concentration"
            kannadaSubtitle="ಶಿಸ್ತುಬದ್ಧ ಅಧ್ಯಯನಕ್ಕೆ ಪೂರಕವಾದ ವಾತಾವರಣ"
            description="Our academy in Hassan is equipped with essential facilities to support long study hours and active learning."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f, i) => {
              const IconComp = f.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-card">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-amber-400 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-navy-950 text-base font-heading mb-2">{f.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default AboutPage;
