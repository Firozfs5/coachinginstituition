import React from 'react';
import { MapPin, Phone, Clock, Bus, Train, Navigation, Sparkles } from 'lucide-react';
import { ACADEMY_INFO } from '../../data/academyInfo';
import Button from '../ui/Button';

const LocationBanner = () => {
  return (
    <section className="py-16 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left: Details */}
          <div className="p-8 sm:p-10 lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red-50 text-brand-red-700 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-red-200">
                <MapPin className="w-3.5 h-3.5" />
                <span>Prime Central Location in Hassan</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-950 leading-tight mb-2">
                Hassanamba Coaching Academy
              </h3>
              
              <p className="text-xs sm:text-sm font-semibold font-kannada text-brand-red-600 mb-6">
                ಹೊಸ ಬಸ್ ನಿಲ್ದಾಣದ ಎದುರು, ಕೆ.ಎಚ್.ಬಿ ಲೇಔಟ್, ರೈಲ್ವೆ ಗೇಟ್ ಮೇಲ್ಸೇತುವೆ ಹತ್ತಿರ, ಹಾಸನ
              </p>

              <div className="space-y-4 text-sm text-slate-700 mb-8">
                <div className="flex items-start gap-3">
                  <Bus className="w-5 h-5 text-brand-navy-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-navy-950 block">Direct Bus Stand Proximity:</strong>
                    <span>Located directly opposite the Hassan New KSRTC Bus Stand. Extremely convenient for daily commuters from Arsikere, Belur, Sakleshpur, Channarayapatna, Holenarasipura, Alur & Arakalgud.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-brand-navy-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-navy-950 block">Railway Connectivity:</strong>
                    <span>Near Railway Gate Flyover with prompt local auto, city bus, and station connectivity.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-navy-950 block">Visiting & Admission Desk Hours:</strong>
                    <span>Open 7 Days a Week: 7:00 AM – 8:30 PM (Parents & Aspirants Welcome for Counselling)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Helpline bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${ACADEMY_INFO.phones[0].raw}`}
                className="btn-primary text-xs sm:text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call: {ACADEMY_INFO.phones[0].display}
              </a>
              <a
                href={`tel:${ACADEMY_INFO.phones[1].raw}`}
                className="btn-secondary text-xs sm:text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                {ACADEMY_INFO.phones[1].display}
              </a>
            </div>
          </div>

          {/* Right: Map Simulation & Visual Landmark Card */}
          <div className="bg-gradient-to-br from-brand-navy-900 to-slate-900 text-white p-8 lg:col-span-5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-academic-pattern opacity-10" />

            <div className="relative z-10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-400">
                Official Campus Address
              </span>
              <h4 className="text-xl font-bold text-white leading-snug">
                Hassanamba Coaching Academy
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Opp. New Bus Stand, KHB Layout, Near Railway Gate Flyover, Hassan, Karnataka – 573201
              </p>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-200">
                  <span>Hassan District</span>
                  <span className="font-semibold text-brand-gold-300">Karnataka, India</span>
                </div>
                <div className="flex items-center justify-between text-slate-200">
                  <span>Admissions Helpline</span>
                  <span className="font-bold text-white">99455 42456</span>
                </div>
                <div className="flex items-center justify-between text-slate-200">
                  <span>Alternative Helpline</span>
                  <span className="font-bold text-white">99012 31088</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6">
              <a
                href="https://maps.google.com/?q=New+Bus+Stand+Hassan+Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-navy-950 font-bold text-sm transition-colors shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps / Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationBanner;
