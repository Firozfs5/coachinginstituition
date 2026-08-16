import React, { useEffect } from 'react';
import { X, GraduationCap, Sparkles } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';
import { ContactForm } from './ContactForm';

export const EnquiryModal = () => {
  const { isModalOpen, isEnquiryOpen, closeEnquiryModal, closeEnquiry, selectedCourse } = useEnquiry();
  const isOpen = isModalOpen || isEnquiryOpen;
  const handleClose = closeEnquiryModal || closeEnquiry;

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto z-10 border border-navy-800/20 animate-slide-up">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-navy-900 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-6 text-white rounded-t-2xl sm:rounded-t-3xl border-b border-navy-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-crimson-600 rounded-xl text-white">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Hassanamba Coaching Academy
              </span>
              <h3 className="text-xl font-extrabold font-heading text-white">
                Book Free Admission Guidance
              </h3>
            </div>
          </div>
          <p className="text-xs text-slate-300 mt-2 font-kannada">
            ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳ ತರಬೇತಿ ವಿವರಗಳಿಗೆ ನಮ್ಮ ತಜ್ಞರೊಂದಿಗೆ ಮಾತನಾಡಿ
          </p>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <ContactForm 
            defaultCourse={selectedCourse} 
            compact={true}
          />
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
