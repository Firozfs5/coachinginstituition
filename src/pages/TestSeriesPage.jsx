import React from 'react';
import { 
  Layers, FileCheck2, History, Trophy, BarChart3, 
  Clock, CheckCircle2, Send, Download, Sparkles, ShieldCheck 
} from 'lucide-react';
import { useModal } from '../context/ModalContext';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import MockTestPreview from '../components/testseries/MockTestPreview';
import CTASection from '../components/common/CTASection';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const TestSeriesPage = () => {
  const { openEnquiry, openBrochure } = useModal();

  const testTracks = [
    {
      title: "KAS Prelims & Mains Test Series",
      kannadaTitle: "ಕೆ.ಎ.ಎಸ್ ಪ್ರಿಲಿಮ್ಸ್ & ಮೇನ್ಸ್ ಪರೀಕ್ಷಾ ಸರಣಿ",
      testsCount: "35 Prelims + 15 Mains Papers",
      features: [
        "Complete Paper 1 (General Studies) & Paper 2 (CSAT)",
        "Special focus on Karnataka History, Art & Budget",
        "OMR-based evaluation with negative marking ranking",
        "Mains GS 1 to 4 descriptive answer evaluation within 48 hours"
      ]
    },
    {
      title: "PSI & PDO Intensive Speed Series",
      kannadaTitle: "ಪಿ.ಎಸ್.ಐ & ಪಿ.ಡಿ.ಒ ಸ್ಪೀಡ್ ಟೆಸ್ಟ್ ಸರಣಿ",
      testsCount: "25 Full-length Tests",
      features: [
        "Descriptive Paper 1 Translation (Kannada <-> English) reviews",
        "Essay writing evaluation on high-yield social topics",
        "PDO Rural Development Act 1993 section-wise questions",
        "Time-pressured OMR speed drills"
      ]
    },
    {
      title: "Banking & RRB Speed CBT Simulator",
      kannadaTitle: "ಬ್ಯಾಂಕಿಂಗ್ & ರೈಲ್ವೆ ಆನ್‌ಲೈನ್ ಮಾದರಿ ಪರೀಕ್ಷೆಗಳು",
      testsCount: "40+ Sectional & Full Tests",
      features: [
        "Time-locked 20-minute sectional speed mock tests",
        "High-level puzzle and seating arrangement sets",
        "Vedic arithmetic & Data Interpretation accuracy tests",
        "Banking & Current Financial Awareness dossiers"
      ]
    },
    {
      title: "FDA / SDA & KPSC Group C Series",
      kannadaTitle: "ಎಫ್.ಡಿ.ಎ / ಎಸ್.ಡಿ.ಎ ಮಾದರಿ ಪರೀಕ್ಷಾ ಸರಣಿ",
      testsCount: "30 OMR Tests",
      features: [
        "Dedicated Samanya Kannada grammar (ಸಾಮಾನ್ಯ ಕನ್ನಡ) tests",
        "Previous 15 years KPSC repeated question papers",
        "Comprehensive Karnataka GK and Mental Ability",
        "Immediate rank declaration with detailed answer keys"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-brand-navy-950 text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-academic-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Test Series' }]} />
          <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-400 font-kannada">
                ಅಣಕು ಪರೀಕ್ಷಾ ಸರಣಿ • Assessment Engine
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-1">
                Practice. Improve. Repeat.
              </h1>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                Transform syllabus knowledge into real exam clearance speed. Our test series provides rigorous chapter-wise tests, unit reviews, and full-length simulated mock exams.
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={() => openEnquiry('Test Series Registration')}
              icon={Send}
              iconPosition="right"
              className="shrink-0 shadow-lg"
            >
              Join Test Series
            </Button>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Interactive Practice Question Simulator */}
        <MockTestPreview />

        {/* 4 Multi-Tiered Assessment Tiers */}
        <div>
          <SectionHeading
            badge="Exam-Wise Batches"
            badgeVariant="primary"
            kannadaTitle="ವಿವಿಧ ಪರೀಕ್ಷೆಗಳ ಮಾದರಿ ಟೆಸ್ಟ್ ಸರಣಿ ಪ್ಯಾಕ್‌ಗಳು"
            title="Available Test Series Tracks"
            description="Available both as a standalone Sunday test series and included free of charge with our regular classroom courses."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testTracks.map((track, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 hover:border-brand-navy-400 p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-brand-navy-900 text-brand-gold-400">
                      {track.testsCount}
                    </span>
                    <Badge variant="gold">OMR / CBT Pattern</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy-950 leading-tight">
                    {track.title}
                  </h3>

                  <p className="text-xs font-semibold font-kannada text-brand-red-600 mt-1 mb-4">
                    {track.kannadaTitle}
                  </p>

                  <div className="space-y-2 mb-6">
                    {track.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Button
                    variant="navy"
                    size="sm"
                    onClick={() => openEnquiry(`${track.title} Enrollment`)}
                    className="w-full"
                  >
                    Enroll for this Test Series
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Test Analysis Features */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-lg grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-navy-50 text-brand-navy-900 flex items-center justify-center shrink-0">
              <BarChart3 className="w-6 h-6 text-brand-red-600" />
            </div>
            <div>
              <h4 className="font-bold text-brand-navy-950 text-base mb-1">Rank & Percentile Analytics</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Benchmark your scores against peers across Karnataka with detailed section-wise percentile breakdowns.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-navy-50 text-brand-navy-900 flex items-center justify-center shrink-0">
              <History className="w-6 h-6 text-brand-red-600" />
            </div>
            <div>
              <h4 className="font-bold text-brand-navy-950 text-base mb-1">Error Log & Weak Area Tracking</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Identify recurring mistakes, time traps, and subject topics that need immediate faculty revision.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-navy-50 text-brand-navy-900 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-brand-red-600" />
            </div>
            <div>
              <h4 className="font-bold text-brand-navy-950 text-base mb-1">Detailed Solution Keys</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every test is accompanied by comprehensive explanatory keys and live classroom discussion with mentors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="Ready to Test Your Readiness?"
        kannadaTitle="ನಿಮ್ಮ ಪರೀಕ್ಷಾ ಸಿದ್ಧತೆಯನ್ನು ಇಂದೇ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ"
        subtitle="Join our upcoming Sunday Mock Test session at our Hassan centre. Register online or call our helpline."
      />
    </div>
  );
};

export default TestSeriesPage;
