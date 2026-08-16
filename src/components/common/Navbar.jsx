import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Menu, 
  X, 
  GraduationCap, 
  ChevronDown, 
  BookOpen, 
  Award, 
  Layers, 
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ACADEMY_INFO } from '../../data/academyInfo';
import { useEnquiry } from '../../context/EnquiryContext';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const { openEnquiryModal, openEnquiry } = useEnquiry();
  const handleOpen = openEnquiryModal || openEnquiry;
  const location = useLocation();

  // Close mobile menu on route navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCourseDropdownOpen(false);
  }, [location]);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isMobileMenuOpen]);

  // Track scroll state for enhanced navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Exams', path: '/exams' },
    { name: 'Test Series', path: '/test-series' },
    { name: 'Results', path: '/results' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const quickCourses = [
    { title: 'KAS & IAS Foundation', slug: 'kas-ias-foundation', tag: 'Flagship' },
    { title: 'PSI & PDO Intensive', slug: 'psi-pdo-intensive', tag: 'High Demand' },
    { title: 'FDA & SDA Booster', slug: 'fda-sda-booster', tag: 'State Cadre' },
    { title: 'Banking & IBPS / SBI', slug: 'banking-ibps-mastery', tag: 'Speed Quant' },
    { title: 'Karnataka PGCET (MBA/MCA)', slug: 'pgcet-mba-mca', tag: 'Entrance' },
    { title: 'TET & CTET Teaching', slug: 'tet-ctet-teaching', tag: 'Education' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-navy-950 transition-all duration-200 shadow-md">
      {/* Top Academic Info Bar (Desktop & Tablet) */}
      <div className="bg-navy-950 text-slate-100 text-xs py-2 border-b border-navy-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Location & Kannada Badge */}
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center text-amber-300 font-bold font-kannada text-xs bg-navy-900 px-2.5 py-0.5 rounded border border-amber-400/30">
              ಹಾಸನಾಂಬ ಕೋಚಿಂಗ್ ಅಕಾಡೆಮಿ – ಹಾಸನ
            </span>
            <div className="flex items-center text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-crimson-400 mr-1.5 flex-shrink-0" />
              <span className="truncate">Opp. New Bus Stand, KHB Layout, Hassan</span>
            </div>
          </div>

          {/* Right: Phone Numbers & WhatsApp */}
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-3">
              <span className="text-slate-300 font-medium">Admissions:</span>
              <a 
                href={`tel:${ACADEMY_INFO.phones[0].raw}`} 
                className="font-bold text-amber-300 hover:text-white transition-colors flex items-center"
              >
                <Phone className="w-3 h-3 mr-1 text-emerald-400" />
                {ACADEMY_INFO.phones[0].number}
              </a>
              <span className="text-slate-500">|</span>
              <a 
                href={`tel:${ACADEMY_INFO.phones[1].raw}`} 
                className="font-bold text-slate-100 hover:text-amber-300 transition-colors"
              >
                {ACADEMY_INFO.phones[1].number}
              </a>
            </div>

            <a
              href={ACADEMY_INFO.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 fill-current" />
              WhatsApp Helpdesk
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-navy-900 border-b border-navy-800 transition-shadow duration-200 ${isScrolled ? 'shadow-elevated' : 'shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo / Brand */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3.5 group focus:outline-none min-w-0">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-crimson-600 via-crimson-700 to-navy-950 p-0.5 shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex flex-col items-center justify-center text-white">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-base sm:text-xl lg:text-2xl font-extrabold text-white tracking-tight leading-none font-heading flex items-center gap-1.5">
                  <span className="truncate">HASSANAMBA</span>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-crimson-600 text-white font-bold tracking-normal uppercase hidden sm:inline-block">
                    Academy
                  </span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-amber-400 tracking-wider uppercase mt-0.5 sm:mt-1">
                  Coaching Academy • Hassan
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-300 font-kannada leading-tight hidden sm:block">
                  ಹಾಸನಾಂಬ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷಾ ತರಬೇತಿ ಕೇಂದ್ರ
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                if (link.name === 'Courses') {
                  return (
                    <div 
                      key={link.name} 
                      className="relative group"
                      onMouseEnter={() => setIsCourseDropdownOpen(true)}
                      onMouseLeave={() => setIsCourseDropdownOpen(false)}
                    >
                      <NavLink
                        to="/courses"
                        className={({ isActive }) =>
                          `px-3.5 py-2 rounded-lg text-sm font-bold transition-all duration-150 flex items-center gap-1 ${
                            isActive
                              ? 'text-amber-400 bg-navy-800'
                              : 'text-slate-100 hover:text-white hover:bg-navy-800'
                          }`
                        }
                      >
                        Courses
                        <ChevronDown className="w-4 h-4 text-slate-300 group-hover:text-amber-400 group-hover:rotate-180 transition-transform duration-200" />
                      </NavLink>

                      {/* Dropdown Menu */}
                      {isCourseDropdownOpen && (
                        <div className="absolute left-0 top-full pt-1.5 w-72 z-50 animate-fade-in">
                          <div className="bg-navy-950 border border-navy-700 rounded-xl shadow-2xl p-2">
                            <div className="px-3 py-2 border-b border-navy-800 mb-1 flex items-center justify-between">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">Popular Programs</span>
                              <Link to="/courses" className="text-[11px] text-amber-400 font-bold hover:underline">View All &rarr;</Link>
                            </div>
                            <div className="space-y-1">
                              {quickCourses.map((course) => (
                                <Link
                                  key={course.slug}
                                  to={`/courses/${course.slug}`}
                                  className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-slate-100 hover:text-white hover:bg-navy-800 transition-colors"
                                >
                                  <span>{course.title}</span>
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-navy-900 text-amber-400 border border-navy-700 font-bold">
                                    {course.tag}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-2 pt-2 border-t border-navy-800 px-3 py-1 bg-navy-900/50 rounded-b-lg">
                              <span className="text-[11px] text-slate-300 block font-kannada">
                                1, 2, 3 ವರ್ಷಗಳ ಫೌಂಡೇಶನ್ & ವಾರಾಂತ್ಯದ ಬ್ಯಾಚ್‌ಗಳು
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3.5 py-2 rounded-lg text-sm font-bold transition-all duration-150 ${
                        isActive
                          ? 'text-amber-400 bg-navy-800'
                          : 'text-slate-100 hover:text-white hover:bg-navy-800'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => handleOpen()}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-crimson-600 hover:bg-crimson-700 active:scale-95 rounded-xl shadow-md hover:shadow-lg transition-all duration-150 border border-crimson-500 group"
              >
                <Sparkles className="w-4 h-4 mr-1.5 text-amber-300 group-hover:rotate-12 transition-transform" />
                Enquire Now
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => handleOpen()}
                className="px-2.5 py-1.5 text-[11px] sm:text-xs font-bold text-white bg-crimson-600 hover:bg-crimson-700 rounded-md"
              >
                Enquire
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 sm:p-2.5 rounded-lg bg-navy-800 text-slate-200 hover:text-white hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden bg-navy-950 border-t border-navy-800 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-3 pb-6 overflow-y-auto max-h-[75vh]">
            <div className="mb-4 p-3 bg-navy-900 rounded-xl border border-navy-800">
              <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                <span className="font-semibold text-amber-400 font-kannada">ಹಾಸನಾಂಬ ಅಕಾಡೆಮಿ ಹಾಸನ</span>
                <span className="text-[11px] text-slate-400">Admissions Open</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${ACADEMY_INFO.phones[0].raw}`}
                  className="flex items-center justify-center py-2.5 px-2 rounded-lg bg-navy-800 text-xs font-bold text-white border border-navy-700 hover:bg-navy-700 active:scale-95 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                  Call Us
                </a>
                <a
                  href={ACADEMY_INFO.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-2.5 px-2 rounded-lg bg-emerald-700 text-xs font-bold text-white hover:bg-emerald-600 active:scale-95 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-semibold ${
                      isActive
                        ? 'bg-navy-800 text-amber-400 border-l-4 border-amber-400'
                        : 'text-slate-200 hover:bg-navy-900 hover:text-white active:bg-navy-800'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </NavLink>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-navy-800 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleOpen();
                }}
                className="w-full py-3 px-4 rounded-xl bg-crimson-600 hover:bg-crimson-700 font-bold text-white text-center shadow-lg text-sm flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                Admission Enquiry
              </button>

              <p className="text-center text-[11px] text-slate-400 mt-2">
                Opp. New Bus Stand, KHB Layout, Hassan • 99455 42456
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
