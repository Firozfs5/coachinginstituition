import React from 'react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { ContactForm } from '../components/common/ContactForm';
import { ACADEMY_INFO } from '../data/academyInfo';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  GraduationCap,
  Navigation,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO
        title="Contact & Location"
        description="Visit Hassanamba Coaching Academy located Opp. New Bus Stand, KHB Layout, Hassan, Karnataka. Call 99455 42456 / 99012 31088 or chat on WhatsApp."
        keywords="Hassanamba coaching contact number, Hassan coaching centre address, coaching centre near New Bus Stand Hassan"
      />

      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-600/30 text-crimson-300 border border-crimson-500/40 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Campus Visit & Counseling</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
            Contact & Admission Desk
          </h1>
          <p className="text-base sm:text-lg text-amber-300 font-kannada font-medium mt-2">
            ಹಾಸನಾಂಬ ಕೋಚಿಂಗ್ ಅಕಾಡೆಮಿ – ಸಂಪರ್ಕ ವಿವರಗಳು
          </p>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Conveniently situated right next to the New Bus Stand in Hassan with excellent transport connectivity from all taluks.
          </p>
        </div>
      </div>

      {/* Main Grid: Contact Info & Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Campus Info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-navy-800 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-crimson-600 text-white flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold font-heading text-white">
                      Hassanamba Coaching Academy
                    </h3>
                    <p className="text-xs text-amber-300 font-kannada">
                      ಹಾಸನಾಂಬ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷಾ ತರಬೇತಿ ಕೇಂದ್ರ
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-crimson-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white mb-0.5">Address / ಸ್ಥಳ:</p>
                    <p className="leading-snug">{ACADEMY_INFO.address.fullAddress}</p>
                    <p className="text-slate-400 font-kannada text-xs mt-1">{ACADEMY_INFO.address.kannadaAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white mb-0.5">Admission Helplines:</p>
                    <a href={`tel:${ACADEMY_INFO.phones[0].raw}`} className="text-amber-300 font-bold block text-sm hover:underline">
                      {ACADEMY_INFO.phones[0].display}
                    </a>
                    <a href={`tel:${ACADEMY_INFO.phones[1].raw}`} className="text-slate-300 font-medium block hover:underline">
                      {ACADEMY_INFO.phones[1].display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white mb-0.5">WhatsApp Guidance:</p>
                    <a
                      href={ACADEMY_INFO.whatsapp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-semibold"
                    >
                      +91 99012 31088 (Click to Chat)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white mb-0.5">Office & Counseling Hours:</p>
                    <p>Monday – Saturday: 7:30 AM – 9:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-2 border-t border-navy-800 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${ACADEMY_INFO.phones[0].raw}`}
                  className="py-3 px-3 rounded-xl bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 99455 42456</span>
                </a>

                <a
                  href={ACADEMY_INFO.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed Card */}
            <div className="bg-white rounded-3xl p-3 border border-slate-200 shadow-card overflow-hidden">
              <div className="p-3 pb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-navy-950">
                  <Navigation className="w-4 h-4 text-crimson-600" />
                  <span>Location Map (Near New Bus Stand, Hassan)</span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden h-64 bg-slate-100 border border-slate-200">
                <iframe
                  title="Hassanamba Coaching Academy Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.94940768935805!2d76.10008774959869!3d12.997719100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x82717a38bdfb6f93%3A0x33832d2a54c072b7!2zSEFTU0FOQU1CQSBDT0FDSElORyBBQ0FERU1ZIOCyueCyvuCyuOCyqOCyvuCyguCyrCDgspXgs4vgsprgsr_gsoLgspfgs40g4LKF4LKV4LK-4LKh4LOG4LKu4LK_!5e0!3m2!1sen!2sin!4v1786900286382!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Admission Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
