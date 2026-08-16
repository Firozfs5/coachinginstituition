import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { COURSES_DATA } from '../data/coursesData';
import { ContactForm } from '../components/common/ContactForm';
import { CTASection } from '../components/common/CTASection';
import { 
  Clock, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  ArrowLeft, 
  Users, 
  Layers, 
  HelpCircle, 
  FileText, 
  Award,
  Phone,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyInfo';
import { useEnquiry } from '../context/EnquiryContext';

export const CourseDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { openEnquiryModal } = useEnquiry();

  // Find course matching slug
  const course = COURSES_DATA.find((c) => c.slug === slug || c.id === slug);

  if (!course) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 bg-slate-50">
        <SEO title="Course Not Found" />
        <h2 className="text-2xl font-bold text-navy-950 font-heading">Course Not Found</h2>
        <p className="text-xs text-slate-500 mt-2">The coaching program you are looking for does not exist or has been moved.</p>
        <Link to="/courses" className="mt-4 px-6 py-2.5 bg-crimson-600 text-white font-bold text-xs rounded-xl shadow">
          Back to All Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title={`${course.name} Coaching in Hassan`}
        description={`${course.shortDesc} Duration: ${course.duration}. Regular and Weekend Batches at Hassanamba Coaching Academy.`}
      />

      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Back link */}
          <Link
            to="/courses"
            className="inline-flex items-center text-xs font-bold text-slate-400 hover:text-amber-400 mb-6 transition-colors gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Courses</span>
          </Link>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-md text-xs font-bold bg-crimson-600 text-white">
                {course.badge || 'Coaching Program'}
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-navy-900 text-amber-400 border border-navy-800 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {course.duration}
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-navy-900 text-slate-300 border border-navy-800">
                {course.medium}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading">
              {course.name}
            </h1>

            {course.kannadaName && (
              <p className="text-base sm:text-lg text-amber-300 font-kannada font-medium">
                {course.kannadaName}
              </p>
            )}

            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              {course.shortDesc}
            </p>

            {/* Target exams chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-bold uppercase tracking-wider">Target Exams:</span>
              {course.targetExams.map((exam, i) => (
                <span key={i} className="px-2.5 py-1 rounded-full bg-navy-800 text-amber-300 border border-navy-700 font-semibold text-xs">
                  {exam}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Sticky Sidebar Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Content Area (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Course Overview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-200">
              <h2 className="text-xl font-extrabold text-navy-950 font-heading mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-crimson-600" />
                <span>Course Overview</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {course.overview}
              </p>

              {/* Batch Availability Badges */}
              <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-950 text-xs sm:text-sm mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-navy-700" />
                  <span>Available Batches & Schedules:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {course.batchesAvailable.map((batch, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-800 shadow-sm">
                      ✓ {batch}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Who Should Join */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-200">
              <h2 className="text-xl font-extrabold text-navy-950 font-heading mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-crimson-600" />
                <span>Who Should Join This Program?</span>
              </h2>
              <div className="space-y-3">
                {course.whoShouldJoin.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Detailed Syllabus & Modules */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-200">
              <h2 className="text-xl font-extrabold text-navy-950 font-heading mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-crimson-600" />
                <span>What Students Will Learn (Curriculum Breakdown)</span>
              </h2>
              <p className="text-xs text-slate-500 mb-6 font-kannada">
                ಪರೀಕ್ಷಾ ಪಠ್ಯಕ್ರಮದ ಪ್ರತಿಯೊಂದು ವಿಷಯವನ್ನು ಆಳವಾಗಿ ಬೋಧಿಸಲಾಗುತ್ತದೆ
              </p>

              <div className="space-y-4">
                {course.curriculum.map((mod) => (
                  <div key={mod.moduleNumber} className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/60">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded-lg bg-navy-900 text-amber-400 font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {mod.moduleNumber}
                      </span>
                      <h3 className="font-bold text-navy-950 text-sm sm:text-base font-heading">
                        {mod.title}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-11">
                      {mod.topics.map((topic, i) => (
                        <div key={i} className="text-xs text-slate-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 flex-shrink-0"></span>
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Preparation Methodology & Test Series */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-200 space-y-6">
              <div>
                <h2 className="text-xl font-extrabold text-navy-950 font-heading mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-crimson-600" />
                  <span>Preparation Methodology</span>
                </h2>
                <div className="space-y-2">
                  {course.methodology.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-navy-700 flex-shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-base font-bold text-navy-950 font-heading mb-1.5 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-500" />
                  <span>Test Series & Evaluation</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {course.testSeriesDetails}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-base font-bold text-navy-950 font-heading mb-1.5 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-500" />
                  <span>Doubt Clearing & Personal Mentorship</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {course.doubtClearing}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-base font-bold text-navy-950 font-heading mb-1.5 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-crimson-600" />
                  <span>Study Guidance & Materials</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {course.studyMaterial}
                </p>
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar: Admission Enquiry (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-navy-950 text-white p-6 rounded-2xl shadow-xl border border-navy-800">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                Fast Track Admission
              </span>
              <h3 className="text-lg font-extrabold font-heading text-white">
                Enquire for {course.name}
              </h3>
              <p className="text-xs text-slate-300 mt-1 mb-4">
                Get fee structure details, batch timings, and seat availability.
              </p>

              <ContactForm 
                defaultCourse={course.slug} 
                compact={true}
              />
            </div>

            {/* Direct Phone Helpline Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Need Immediate Assistance?
              </h4>
              <a
                href={`tel:${ACADEMY_INFO.phones[0].raw}`}
                className="w-full py-2.5 px-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {ACADEMY_INFO.phones[0].number}</span>
              </a>
              <a
                href={ACADEMY_INFO.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Academic Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default CourseDetailsPage;
