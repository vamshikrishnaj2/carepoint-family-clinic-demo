import React from 'react';
import { Calendar, PhoneCall, ShieldCheck } from 'lucide-react';
import { CLINIC_CONTACT_DATA } from '../data/clinicData';
import finalCtaImg from '../assets/images/final_cta_bg_1793214409512.jpg';

interface FinalCtaProps {
  onRequestAppointmentClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onRequestAppointmentClick }) => {
  return (
    <section aria-labelledby="final-cta-heading" className="bg-teal-900 text-white py-16 sm:py-20 relative overflow-hidden">
      <img src={finalCtaImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" aria-hidden="true" />
      {/* Subtle background decoration */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Unboxed Header Metadata */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-teal-200 font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-teal-300" aria-hidden="true" />
            <span>Accessible Outpatient Practice</span>
          </div>

          <h2
            id="final-cta-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance"
          >
            Clear, straightforward healthcare begins here.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-teal-100 leading-relaxed max-w-2xl mx-auto">
            Whether planning an annual health baseline, asking about pediatric checkups, or looking for clinic timings, our portal gives you convenient access in one place.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onRequestAppointmentClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-teal-950 bg-white hover:bg-teal-50 active:bg-teal-100 rounded-lg shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-900"
            >
              <Calendar className="w-4 h-4 text-teal-800" aria-hidden="true" />
              <span>Request Appointment</span>
            </button>

            <a
              href={`tel:${CLINIC_CONTACT_DATA.phone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-teal-800/80 hover:bg-teal-800 border border-teal-600 rounded-lg transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-900"
            >
              <PhoneCall className="w-4 h-4 text-teal-300" aria-hidden="true" />
              <span>Call Reception: {CLINIC_CONTACT_DATA.phone}</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-teal-200">
            *Fictional practice demonstration. Online submissions simulate real clinic appointment coordination.
          </p>
        </div>
      </div>
    </section>
  );
};
