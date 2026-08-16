import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Home, BookOpen, Landmark, Phone, ArrowLeft } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyInfo';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <SEO title="Page Not Found (404)" />
      
      <div className="max-w-lg w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-card">
        <div className="w-20 h-20 bg-crimson-50 text-crimson-600 rounded-3xl flex items-center justify-center mx-auto text-3xl font-extrabold font-heading">
          404
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-heading">
            Page Not Found
          </h1>
          <p className="text-xs text-slate-400 font-kannada mt-1">
            ಕ್ಷಮಿಸಿ, ನೀವು ಹುಡುಕುತ್ತಿರುವ ಪುಟ ಲಭ್ಯವಿಲ್ಲ
          </p>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <Link
            to="/"
            className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs transition-colors shadow"
          >
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>
          <Link
            to="/courses"
            className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-xs transition-colors shadow"
          >
            <BookOpen className="w-4 h-4" />
            <span>All Courses</span>
          </Link>
          <Link
            to="/exams"
            className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors border border-slate-200"
          >
            <Landmark className="w-4 h-4" />
            <span>Exams List</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors border border-slate-200"
          >
            <Phone className="w-4 h-4" />
            <span>Contact Us</span>
          </Link>
        </div>

        <div className="pt-2 border-t border-slate-100 text-xs text-slate-500">
          <p>Need assistance? Call {ACADEMY_INFO.phones[0].display}</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
