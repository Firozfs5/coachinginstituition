import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import FloatingActions from './components/common/FloatingActions';
import EnquiryModal from './components/common/EnquiryModal';
import DownloadBrochureModal from './components/common/DownloadBrochureModal';
import Toast from './components/ui/Toast';

// Pages
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailsPage';
import ExamsPage from './pages/ExamsPage';
import AboutPage from './pages/AboutPage';
import ResultsPage from './pages/ResultsPage';
import TestSeriesPage from './pages/TestSeriesPage';
import ContactPage from './pages/ContactPage';
import AdmissionPage from './pages/AdmissionPage';
import FAQPage from './pages/FAQPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen selection:bg-brand-navy-900 selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:id" element={<CourseDetailPage />} />
              <Route path="/exams" element={<ExamsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/test-series" element={<TestSeriesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admission" element={<AdmissionPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />

          {/* Global Floating Actions & Modals */}
          <FloatingActions />
          <EnquiryModal />
          <DownloadBrochureModal />
          <Toast />
        </div>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
