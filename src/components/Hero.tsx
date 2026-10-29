import React, { useState } from 'react';
import { ArrowRight, Calendar, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import heroClinicImg from '../assets/images/hero_clinic_interior_1790711341558.jpg';

interface HeroProps {
  onViewServicesClick: () => void;
  onRequestAppointmentClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewServicesClick,
  onRequestAppointmentClick
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section aria-labelledby="hero-heading" className="relative bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Context Notice - unboxed clean metadata */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-4 font-medium">
              <span>Primary Family Healthcare</span>
              <span aria-hidden="true">·</span>
              <span>Riverdale District</span>
              <span aria-hidden="true">·</span>
              <span>Fictional Portfolio Practice</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] max-w-2xl text-balance"
            >
              Clear care. Convenient access.
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-2xl">
              Family-focused healthcare information and appointment access in one simple place.
            </p>

            {/* Key Assurance Bullet Points */}
            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" aria-hidden="true" />
                <span>Transparent visit preparation info</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" aria-hidden="true" />
                <span>Streamlined online appointment enquiry</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" aria-hidden="true" />
                <span>Wheelchair accessible facility</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" aria-hidden="true" />
                <span>Clear weekly operating schedule</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onRequestAppointmentClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-lg shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-teal-800 focus-visible:ring-offset-2"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>Request Appointment</span>
              </button>

              <button
                type="button"
                onClick={onViewServicesClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 border border-slate-300 rounded-lg transition-all focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2"
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4 text-slate-600" aria-hidden="true" />
              </button>
            </div>

            {/* Non-emergency disclaimer under CTA */}
            <p className="mt-4 text-xs text-slate-500 leading-normal">
              *Routine and preventive inquiries only. For medical emergencies, immediately dial 911.
            </p>
          </div>

          {/* Right Column: High-Fidelity Focal Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
              {!imageError ? (
                <img
                  src={heroClinicImg}
                  alt="Modern, bright and calming reception area of CarePoint Family Clinic with comfortable wooden accents and natural daylight"
                  className="w-full h-auto aspect-16/10 object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                /* Resilient CSS/SVG Fallback Container */
                <div className="aspect-16/10 w-full bg-linear-to-br from-teal-50 to-slate-100 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 mb-3">
                    <ShieldCheck className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">CarePoint Family Clinic</h2>
                  <p className="text-sm text-slate-600 mt-1 max-w-xs">
                    Calm, family-focused outpatient healthcare space in Riverdale.
                  </p>
                </div>
              )}

              {/* Informational overlay label */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-medium text-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-teal-700" aria-hidden="true" />
                  450 Horizon Parkway, Suite 210
                </span>
                <span className="text-slate-500">Outpatient Consultation Hub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
