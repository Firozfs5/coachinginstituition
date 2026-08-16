import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { ACADEMY_INFO } from '../../data/academyInfo';
import { useEnquiry } from '../../context/EnquiryContext';

export const FloatingActions = () => {
  const { openEnquiryModal, openEnquiry } = useEnquiry();
  const handleOpen = openEnquiryModal || openEnquiry;

  return (
    <>
      {/* Desktop & Tablet Floating Buttons (Right edge) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col space-y-3">
        {/* WhatsApp Floating Action */}
        <a
          href={ACADEMY_INFO.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20 group"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold tracking-wide">Chat on WhatsApp</span>
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${ACADEMY_INFO.phones[0].raw}`}
          aria-label="Call Admissions Desk"
          className="flex items-center space-x-2 bg-navy-900 hover:bg-navy-800 text-white px-4 py-2.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20 group"
        >
          <Phone className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-bold tracking-wide">Call 99455 42456</span>
        </a>
      </div>

      {/* Mobile Bottom Fixed Action Bar (Sticky at very bottom of screen) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-md border-t border-navy-800 p-2 sm:hidden shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          {/* 1-Tap Call */}
          <a
            href={`tel:${ACADEMY_INFO.phones[0].raw}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-navy-900 text-white text-[11px] font-bold border border-navy-700 active:bg-navy-800"
          >
            <Phone className="w-4 h-4 text-emerald-400 mb-0.5" />
            <span>Call Now</span>
          </a>

          {/* 1-Tap WhatsApp */}
          <a
            href={ACADEMY_INFO.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-emerald-700 text-white text-[11px] font-bold active:bg-emerald-600"
          >
            <MessageSquare className="w-4 h-4 fill-current mb-0.5" />
            <span>WhatsApp</span>
          </a>

          {/* 1-Tap Enquiry Modal */}
          <button
            onClick={() => handleOpen()}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-crimson-600 text-white text-[11px] font-bold active:bg-crimson-700 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-amber-300 mb-0.5" />
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingActions;
