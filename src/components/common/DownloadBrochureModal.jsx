import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Phone, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useModal } from '../../context/ModalContext';
import { ACADEMY_INFO } from '../../data/academyInfo';
import Button from '../ui/Button';

const DownloadBrochureModal = () => {
  const { isBrochureOpen, closeBrochure, selectedCourse, showToast } = useModal();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isBrochureOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !/^[6-9]\d{9}$/.test(phone.replace(/\s+/g, ''))) {
      setError('Please enter a valid candidate name and 10-digit phone number');
      return;
    }

    setSubmitted(true);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } catch (e) {}

    showToast('Prospectus & Syllabus Pack generated!');
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setError('');
    closeBrochure();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-navy-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-brand-navy-900 to-brand-navy-800 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-gold-400" />
            <h3 className="text-lg font-bold">Download Course Brochure & Syllabus</h3>
          </div>
          <button
            onClick={closeBrochure}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-brand-navy-900 mb-1">
                Brochure Ready!
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed">
                Thank you, <strong className="text-brand-navy-950">{name}</strong>. The complete course syllabus guide, timetable, and fee framework has been unlocked for you.
              </p>
              <div className="bg-slate-100 p-4 rounded-xl text-left text-xs text-slate-700 space-y-1 mb-5">
                <p><strong>Academy:</strong> Hassanamba Coaching Academy</p>
                <p><strong>Selected Program:</strong> {selectedCourse || "All Karnataka & National Exam Courses"}</p>
                <p><strong>Campus Location:</strong> Opp. New Bus Stand, KHB Layout, Hassan</p>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${ACADEMY_INFO.phones[0].raw}`}
                  className="btn-primary w-full text-sm text-center py-2.5"
                >
                  Call Admissions: 99455 42456
                </a>
                <Button variant="outline" size="sm" onClick={handleReset}>
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-600">
                Get the detailed syllabus breakdown, weekly schedule, test series calendar, and faculty mentors list sent to your phone.
              </p>

              {selectedCourse && (
                <div className="p-2.5 bg-brand-navy-50 border border-brand-navy-200 rounded-lg text-xs font-semibold text-brand-navy-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-navy-700 shrink-0" />
                  <span className="truncate">Selected: {selectedCourse}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter candidate name"
                    className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Mobile Number / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy-200"
                  />
                </div>
              </div>

              {error && <p className="text-xs text-brand-red-600">{error}</p>}

              <Button
                type="submit"
                variant="navy"
                size="md"
                className="w-full"
                icon={Download}
                iconPosition="left"
              >
                Download Syllabus & Brochure
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DownloadBrochureModal;
