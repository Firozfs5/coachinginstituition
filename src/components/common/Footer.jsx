import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ChevronRight, 
  ShieldCheck, 
  Award,
  BookOpen
} from 'lucide-react';
import { ACADEMY_INFO } from '../../data/academyInfo';
import { EXAM_CATEGORIES } from '../../data/examsData';
import { useEnquiry } from '../../context/EnquiryContext';

export const Footer = () => {
  const { openEnquiryModal, openEnquiry } = useEnquiry();
  const handleOpen = openEnquiryModal || openEnquiry;

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Courses', path: '/courses' },
    { name: 'Competitive Exams', path: '/exams' },
    { name: 'Test Series Portal', path: '/test-series' },
    { name: 'Student Results & Hall of Fame', path: '/results' },
    { name: 'About the Academy', path: '/about' },
    { name: 'Frequently Asked Questions', path: '/faq' },
    { name: 'Contact & Location', path: '/contact' },
    { name: 'Admission Enquiry', path: '/admission' },
  ];

  const popularCourses = [
    { name: 'KAS & IAS Foundation', path: '/courses/kas-ias-foundation' },
    { name: 'PSI & PDO Intensive Batch', path: '/courses/psi-pdo-intensive' },
    { name: 'FDA & SDA Success Booster', path: '/courses/fda-sda-booster' },
    { name: 'KPSC Group C & KEA Batch', path: '/courses/kpsc-group-c' },
    { name: 'Banking & IBPS / SBI Mastery', path: '/courses/banking-ibps-mastery' },
    { name: 'RRB NTPC & Railway Batch', path: '/courses/rrb-ntpc-railway' },
    { name: 'NDA, CDS & Defence Course', path: '/courses/nda-cds-defence' },
    { name: 'Karnataka TET & CTET Teaching', path: '/courses/tet-ctet-teaching' },
    { name: 'Karnataka PGCET (MBA/MCA)', path: '/courses/pgcet-mba-mca' },
  ];

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800">
      {/* Top Value Banner */}
      <div className="bg-navy-900/90 border-b border-navy-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <div className="p-3 bg-navy-800 text-amber-400 rounded-xl border border-navy-700">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Disciplined Preparation</h4>
              <p className="text-xs text-slate-400">Regular unit tests, OMR practice & daily doubt clearing</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-4">
            <div className="p-3 bg-navy-800 text-crimson-400 rounded-xl border border-navy-700">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Bilingual Learning</h4>
              <p className="text-xs text-slate-400">Comprehensive study materials in Kannada & English</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-4">
            <div className="p-3 bg-navy-800 text-emerald-400 rounded-xl border border-navy-700">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Weekend & Regular Batches</h4>
              <p className="text-xs text-slate-400">Tailored schedules for college students & working aspirants</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-crimson-600 to-navy-900 p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-amber-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white tracking-tight font-heading leading-tight">
                  HASSANAMBA
                </h3>
                <p className="text-xs text-amber-400 font-semibold tracking-wider uppercase">
                  Coaching Academy • Hassan
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 font-kannada font-medium text-amber-200/90">
              ಹಾಸನಾಂಬ ಕೋಚಿಂಗ್ ಅಕಾಡೆಮಿ - ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ಯಶಸ್ಸಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಮಾರ್ಗದರ್ಶಿ.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Premier competitive exam institute in Hassan, Karnataka offering disciplined classroom coaching for KAS, IAS, PSI, PDO, FDA, SDA, Banking, Railway, Defence, TET, and PGCET examinations.
            </p>

            <div className="pt-2">
              <button
                onClick={() => handleOpen()}
                className="inline-flex items-center px-4 py-2 text-xs font-bold text-white bg-crimson-600 hover:bg-crimson-700 rounded-lg shadow transition-colors"
              >
                Schedule Free Admission Counselling &rarr;
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase border-b border-navy-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 mr-1.5 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Courses (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase border-b border-navy-800 pb-2">
              Popular Courses
            </h4>
            <ul className="space-y-2 text-xs">
              {popularCourses.map((course) => (
                <li key={course.slug || course.name}>
                  <Link
                    to={course.path}
                    className="text-slate-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 text-crimson-500 mr-1.5 group-hover:translate-x-0.5 transition-all" />
                    <span>{course.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase border-b border-navy-800 pb-2">
              Contact Academy
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-crimson-500 flex-shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {ACADEMY_INFO.address.fullAddress}
                </p>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <a href={`tel:${ACADEMY_INFO.phones[0].raw}`} className="font-bold text-white hover:text-amber-400 block">
                    {ACADEMY_INFO.phones[0].display}
                  </a>
                  <a href={`tel:${ACADEMY_INFO.phones[1].raw}`} className="text-slate-400 hover:text-amber-400 block">
                    {ACADEMY_INFO.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={ACADEMY_INFO.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:underline font-medium"
                >
                  WhatsApp: +91 99455 42456
                </a>
              </div>

              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-slate-400">
                  <p>Mon – Sat: 7:00 AM – 8:30 PM</p>
                  <p>Sunday Batches: 7:30 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exam Categories Tags Row */}
        <div className="mt-10 pt-6 border-t border-navy-800/80">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-white mr-2">Coaching Streams:</span>
            {EXAM_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                to={`/exams?category=${category.id}`}
                className="px-2.5 py-1 rounded bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-amber-400 border border-navy-800 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Disclaimer */}
      <div className="bg-navy-950 py-5 px-4 sm:px-6 lg:px-8 border-t border-navy-900 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 Hassanamba Coaching Academy. All Rights Reserved.</p>
          <p className="text-[11px] text-slate-500 font-kannada">
            ಹಾಸನ ಜಿಲ್ಲೆಯ ಪ್ರಮುಖ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷಾ ತರಬೇತಿ ಸಂಸ್ಥೆ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
