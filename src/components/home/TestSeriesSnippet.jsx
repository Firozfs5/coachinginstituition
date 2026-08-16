import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, Layers, FileCheck2, 
  HelpCircle, History, Trophy, BarChart3, Clock, Sparkles 
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { useModal } from '../../context/ModalContext';

const TestSeriesSnippet = () => {
  const { openEnquiry } = useModal();

  const testTypes = [
    {
      title: "Chapter-Wise Tests",
      kannada: "ಅಧ್ಯಾಯವಾರು ಪರೀಕ್ಷೆಗಳು",
      desc: "Micro-level tests at the conclusion of every individual topic to establish instant conceptual clarity.",
      icon: Layers,
      count: "50+ Topic Tests"
    },
    {
      title: "Unit-Wise Consolidated Tests",
      kannada: "ಘಟಕವಾರು ಪರೀಕ್ಷೆಗಳು",
      desc: "Multi-chapter integrated evaluations designed to build revision discipline and subject retention.",
      icon: FileCheck2,
      count: "25+ Unit Papers"
    },
    {
      title: "Previous-Year Question Papers",
      kannada: "ಹಿಂದಿನ ವರ್ಷಗಳ ಪ್ರಶ್ನೋತ್ತರ ವಿಶ್ಲೇಷಣೆ",
      desc: "15-year historical question trend analysis dissecting repeated themes and high-yield scoring patterns.",
      icon: History,
      count: "15 Years Solved"
    },
    {
      title: "Full-Length Mock Examinations",
      kannada: "ಸಂಪೂರ್ಣ ಮಾದರಿ ಅಣಕು ಪರೀಕ್ಷೆಗಳು",
      desc: "Exact replication of real exam timing, OMR sheets, negative marking rules, and state-wide merit ranks.",
      icon: Trophy,
      count: "30+ Full Mocks"
    }
  ];

  return (
    <section className="py-20 bg-brand-navy-950 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-academic-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Evaluation Engine"
          badgeVariant="gold"
          light={true}
          kannadaTitle="ಅಭ್ಯಾಸ ಮಾಡಿ. ಸುಧಾರಿಸಿ. ಯಶಸ್ಸು ಸಾಧಿಸಿ."
          title="Practice. Improve. Repeat."
          description="Consistent testing is the differentiator between average preparation and guaranteed selection. Our multi-tiered test framework simulates real competitive conditions."
        />

        {/* 4 Test Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testTypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-brand-navy-900/90 border border-brand-navy-700/80 rounded-2xl p-6 hover:border-brand-gold-500/60 hover:bg-brand-navy-850 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 text-brand-gold-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-brand-red-600/30 text-brand-red-300 border border-brand-red-500/30">
                      {item.count}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white leading-tight">
                    {item.title}
                  </h4>

                  <p className="text-xs font-medium font-kannada text-brand-gold-300 mt-1 mb-3">
                    {item.kannada}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Test Performance Banner */}
        <div className="bg-gradient-to-r from-brand-navy-900 via-slate-900 to-brand-navy-900 border border-brand-navy-700 rounded-3xl p-8 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold-400">
              <Sparkles className="w-4 h-4" />
              Regular Evaluation & Mentor Feedback
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Every Sunday Mock Test includes detailed negative marking calculation and paper discussion.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Available for KAS, IAS, PSI, PDO, FDA/SDA, Banking, RRB NTPC, and Karnataka PGCET aspirants. Join the standalone test series batch or get it bundled with regular courses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Button
              to="/test-series"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Join Test Series
            </Button>
            <Button
              variant="outlineWhite"
              size="lg"
              onClick={() => openEnquiry('Test Series Registration')}
              className="w-full sm:w-auto text-sm"
            >
              Enquire for Schedule
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestSeriesSnippet;
