import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  User, 
  Mail, 
  GraduationCap, 
  Calendar, 
  HelpCircle,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { ACADEMY_INFO } from '../../data/academyInfo';
import { COURSES_DATA } from '../../data/coursesData';
import { EXAMS_DATA } from '../../data/examsData';

export const ContactForm = ({ 
  defaultCourse = '', 
  onSuccessCallback,
  compact = false 
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    courseInterest: defaultCourse || 'kas-ias-foundation',
    qualification: 'Graduate',
    preferredBatch: 'Regular Daily Batch',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Course Options
  const courseOptions = [
    { value: 'kas-ias-foundation', label: 'KAS & IAS Integrated Foundation' },
    { value: 'psi-pdo-intensive', label: 'PSI & PDO Intensive Batch' },
    { value: 'fda-sda-booster', label: 'FDA & SDA Success Booster' },
    { value: 'kpsc-group-c', label: 'KPSC Group C & KEA Recruitment' },
    { value: 'banking-ibps-mastery', label: 'Banking & IBPS / SBI Mastery' },
    { value: 'rrb-ntpc-railway', label: 'RRB NTPC & Railway Batch' },
    { value: 'nda-cds-defence', label: 'NDA, CDS & Defence Services' },
    { value: 'tet-ctet-teaching', label: 'Karnataka TET & CTET Teaching' },
    { value: 'pgcet-mba-mca', label: 'Karnataka PG-CET (MBA / MCA)' },
    { value: 'clat-law-foundation', label: 'CLAT & Law Entrance' },
    { value: 'ca-foundation-batch', label: 'CA Foundation Course' },
    { value: 'test-series-only', label: 'Test Series & Practice Only' },
    { value: 'other-enquiry', label: 'General / Other Competitive Exam' },
  ];

  const qualificationOptions = [
    'PUC / 12th Standard',
    'Degree Final Year Student',
    'Graduate (BA, B.Sc, B.Com, BBA, BCA, etc.)',
    'Engineering Graduate (BE / B.Tech)',
    'Post Graduate (MA, M.Sc, M.Com, MBA, etc.)',
    'Working Professional / In-Service Teacher'
  ];

  const batchOptions = [
    'Regular Daily Batch (Morning)',
    'Regular Daily Batch (Evening)',
    'Weekend Batch (Saturday & Sunday)',
    '1-Year / 2-Year Foundation Batch',
    'Fast-Track Crash Course',
    'Mock Test Series Only'
  ];

  const validate = () => {
    const errs = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Name must be at least 3 characters';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your 10-digit mobile number';
    } else if (cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.courseInterest) {
      errs.courseInterest = 'Please select a course or exam';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate enquiry registration and reference generation (Firestore-ready structure)
    setTimeout(() => {
      const generatedRef = `HCA-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Confetti fallback safe
      }

      if (onSuccessCallback) {
        onSuccessCallback();
      }
    }, 800);
  };

  const handleWhatsAppForward = () => {
    const selectedCourseLabel = courseOptions.find(c => c.value === formData.courseInterest)?.label || formData.courseInterest;
    const text = encodeURIComponent(
      `Hello Hassanamba Coaching Academy,\n\nI have submitted an admission enquiry on your website.\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Course:* ${selectedCourseLabel}\n*Qualification:* ${formData.qualification}\n*Preferred Batch:* ${formData.preferredBatch}\n*Ref ID:* ${referenceId || 'New Enquiry'}\n\nPlease guide me with the fee structure and batch timings.`
    );
    window.open(`https://wa.me/919945542456?text=${text}`, '_blank');
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      courseInterest: defaultCourse || 'kas-ias-foundation',
      qualification: 'Graduate',
      preferredBatch: 'Regular Daily Batch',
      message: ''
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-emerald-100 text-center animate-fade-in">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full mb-2 border border-emerald-200">
          Enquiry Received Successfully
        </span>

        <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 font-heading">
          Thank You, {formData.fullName}!
        </h3>

        <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
          Your admission enquiry has been registered under Reference ID: <strong className="text-navy-900 bg-slate-100 px-2 py-0.5 rounded font-mono">{referenceId}</strong>.
        </p>

        <div className="my-6 p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-1.5 text-slate-700">
          <p><strong>Course:</strong> {courseOptions.find(c => c.value === formData.courseInterest)?.label}</p>
          <p><strong>Contact:</strong> {formData.phone}</p>
          <p><strong>Preferred Batch:</strong> {formData.preferredBatch}</p>
          <p className="text-emerald-700 font-semibold pt-1">
            ✓ Our academic coordinator in Hassan will contact you within 24 hours.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleWhatsAppForward}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Connect on WhatsApp Instantly</span>
          </button>

          <button
            onClick={resetForm}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-200/80 space-y-4">
      {/* Header text */}
      <div className="border-b border-slate-100 pb-3 mb-2">
        <h3 className="text-lg sm:text-xl font-extrabold text-navy-950 font-heading flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-crimson-600" />
          <span>Admission & Course Enquiry</span>
        </h3>
        <p className="text-xs text-slate-500 mt-1 font-kannada">
          ಹಾಸನಾಂಬ ಕೋಚಿಂಗ್ ಅಕಾಡೆಮಿ – ಉಚಿತ ಸಮಾಲೋಚನೆಗಾಗಿ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Student Full Name <span className="text-crimson-600">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Ramesh Kumar"
              className={`w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border ${
                errors.fullName ? 'border-crimson-500 bg-crimson-50/20' : 'border-slate-300'
              } focus:outline-none focus:ring-2 focus:ring-navy-800 transition-colors`}
            />
          </div>
          {errors.fullName && (
            <p className="text-[11px] text-crimson-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Mobile Number <span className="text-crimson-600">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit phone number"
              className={`w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border ${
                errors.phone ? 'border-crimson-500 bg-crimson-50/20' : 'border-slate-300'
              } focus:outline-none focus:ring-2 focus:ring-navy-800 transition-colors`}
            />
          </div>
          {errors.phone && (
            <p className="text-[11px] text-crimson-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Email Address <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@gmail.com"
              className={`w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border ${
                errors.email ? 'border-crimson-500 bg-crimson-50/20' : 'border-slate-300'
              } focus:outline-none focus:ring-2 focus:ring-navy-800 transition-colors`}
            />
          </div>
          {errors.email && (
            <p className="text-[11px] text-crimson-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>

        {/* Course / Exam */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Course / Exam Target <span className="text-crimson-600">*</span>
          </label>
          <div className="relative">
            <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <select
              name="courseInterest"
              value={formData.courseInterest}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800 bg-white"
            >
              {courseOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Educational Qualification */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Current Educational Qualification
          </label>
          <select
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800 bg-white"
          >
            {qualificationOptions.map((qual) => (
              <option key={qual} value={qual}>{qual}</option>
            ))}
          </select>
        </div>

        {/* Preferred Batch */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Preferred Batch Schedule
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <select
              name="preferredBatch"
              value={formData.preferredBatch}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800 bg-white"
            >
              {batchOptions.map((batch) => (
                <option key={batch} value={batch}>{batch}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Specific Question / Study Requirement <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          name="message"
          rows={compact ? 2 : 3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Let us know if you need hostel accommodation assistance, Kannada medium notes, or fee guidance..."
          className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800 transition-colors"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 rounded-xl bg-crimson-600 hover:bg-crimson-700 active:scale-[0.99] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 group disabled:opacity-75"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Submitting Enquiry...
            </span>
          ) : (
            <>
              <Send className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
              <span>Submit Admission Enquiry</span>
            </>
          )}
        </button>
      </div>

      {/* Direct Call / Privacy Note */}
      <div className="pt-2 text-center text-[11px] text-slate-500">
        <p>
          Need instant details? Call our desk directly at{' '}
          <a href={`tel:${ACADEMY_INFO.phones[0].raw}`} className="font-bold text-navy-900 underline">
            99455 42456
          </a>{' '}
          or{' '}
          <a href={`tel:${ACADEMY_INFO.phones[1].raw}`} className="font-bold text-navy-900 underline">
            99012 31088
          </a>
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
