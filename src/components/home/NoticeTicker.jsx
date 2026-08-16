import React from 'react';
import { Bell, Sparkles, Calendar, Phone } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

export const NoticeTicker = () => {
  const { openEnquiryModal, openEnquiry } = useEnquiry();
  const handleOpen = openEnquiryModal || openEnquiry;

  const notices = [
    "🔥 Admissions Open for KAS & IAS 1-Year Integrated Foundation Batch (Morning & Evening).",
    "📚 New Weekend Batches starting this Saturday for PSI, PDO, and Banking aspirants in Hassan.",
    "✍️ All Karnataka Mock Test Series for KPSC Group C & FDA/SDA with detailed answer explanations.",
    "🎯 Special Kannada Grammar & English Translation workshops for upcoming competitive exams.",
    "📞 Direct Admission Helpline: 99455 42456 / 99012 31088 – Visit campus near New Bus Stand, Hassan."
  ];

  return (
    <div className="bg-navy-900 border-y border-navy-800 text-white py-2.5 px-4 overflow-hidden relative shadow-inner">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        {/* Static Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-crimson-600 rounded text-xs font-bold uppercase tracking-wider flex-shrink-0 z-10 shadow">
          <Bell className="w-3.5 h-3.5 animate-bounce" />
          <span className="hidden sm:inline">Latest</span> Updates
        </div>

        {/* Marquee Container */}
        <div className="overflow-hidden whitespace-nowrap flex-1 relative flex items-center">
          <div className="inline-flex gap-8 text-xs sm:text-sm text-slate-200 animate-marquee hover:[animation-play-state:paused]">
            {notices.map((notice, index) => (
              <span key={index} className="inline-flex items-center gap-2 cursor-pointer hover:text-amber-400" onClick={() => handleOpen()}>
                <span>{notice}</span>
                <span className="text-amber-500 font-bold">•</span>
              </span>
            ))}
            {/* Duplicate for smooth infinite loop */}
            {notices.map((notice, index) => (
              <span key={`dup-${index}`} className="inline-flex items-center gap-2 cursor-pointer hover:text-amber-400" onClick={() => handleOpen()}>
                <span>{notice}</span>
                <span className="text-amber-500 font-bold">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right CTA */}
        <button
          onClick={() => handleOpen()}
          className="hidden md:inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 flex-shrink-0 underline decoration-amber-400/50 underline-offset-2"
        >
          <span>Join New Batch &rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default NoticeTicker;
