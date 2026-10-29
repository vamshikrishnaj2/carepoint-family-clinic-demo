import React, { useState } from 'react';
import { FICTIONAL_DOCTOR } from '../data/clinicData';
import { Stethoscope, Calendar, Clock, Globe, AlertTriangle, UserCheck } from 'lucide-react';
import doctorPortraitImg from '../assets/images/doctor_portrait_1790711356114.jpg';

interface DoctorProfileProps {
  onRequestAppointmentClick: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onRequestAppointmentClick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="doctors"
      aria-labelledby="doctor-profile-heading"
      className="py-16 sm:py-20 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-teal-800 mb-2">
            02. Clinical Team
          </div>
          <h2
            id="doctor-profile-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900"
          >
            Fictional Practitioner Profile
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            Healthcare websites require clear doctor profiles to help visitors understand provider scope and consultation days.
          </p>
        </div>

        {/* Doctor Card */}
        <article className="max-w-4xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          {/* Prominent Demo Notice Bar inside the Profile Card */}
          <div className="bg-amber-100/90 border-b border-amber-300 px-6 py-2.5 flex items-center justify-between text-xs sm:text-sm text-amber-950 font-semibold">
            <span className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-800 shrink-0" aria-hidden="true" />
              <span>{FICTIONAL_DOCTOR.demoLabel}</span>
            </span>
            <span className="text-amber-800 font-normal hidden sm:inline">Portfolio Demonstration Only</span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Doctor Photo Column */}
              <div className="md:col-span-4 flex flex-col items-center sm:items-start">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-slate-200 bg-white shadow-sm shrink-0">
                  {!imageError ? (
                    <img
                      src={doctorPortraitImg}
                      alt="Fictional portrait representing Dr. Clara Hensley, general family medicine practitioner"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex flex-col items-center justify-center p-4 text-center text-slate-600">
                      <UserCheck className="w-12 h-12 text-teal-700 mb-2" aria-hidden="true" />
                      <span className="text-xs font-semibold">Dr. Clara Hensley</span>
                      <span className="text-[10px] text-slate-500">Demo Image Placeholder</span>
                    </div>
                  )}
                </div>

                {/* Office Hours / Available Days */}
                <div className="mt-5 w-full bg-white p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
                  <div className="flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="font-semibold text-slate-900 block">Consultation Days</span>
                      <span>{FICTIONAL_DOCTOR.availableDays}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                    <Globe className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="font-semibold text-slate-900 block">Languages Spoken</span>
                      <span>{FICTIONAL_DOCTOR.languages.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Doctor Details Column */}
              <div className="md:col-span-8 flex flex-col">
                <div className="flex flex-col">
                  {/* Name and Credential Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {FICTIONAL_DOCTOR.name}
                  </h3>
                  <p className="text-teal-800 font-semibold text-sm sm:text-base mt-1">
                    {FICTIONAL_DOCTOR.credentialTitle} · {FICTIONAL_DOCTOR.role}
                  </p>
                </div>

                {/* Biography */}
                <p className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {FICTIONAL_DOCTOR.shortBio}
                </p>

                {/* Consultation Philosophy */}
                <div className="mt-4 p-4 bg-teal-50/60 rounded-xl border border-teal-100 text-xs sm:text-sm text-teal-950 italic">
                  <strong className="not-italic text-teal-900 font-semibold block mb-1">
                    Approach to Care:
                  </strong>
                  &ldquo;{FICTIONAL_DOCTOR.consultationPhilosophy}&rdquo;
                </div>

                {/* Focus Areas */}
                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-2">
                    Simulated Clinical Areas:
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                    {FICTIONAL_DOCTOR.clinicalFocus.map((focus) => (
                      <li key={focus} className="flex items-center gap-2">
                        <Stethoscope className="w-3.5 h-3.5 text-teal-700 shrink-0" aria-hidden="true" />
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Disclaimer Footnote & CTA */}
                <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-slate-500 leading-normal max-w-sm">
                    {FICTIONAL_DOCTOR.fictionalDisclaimer}
                  </p>
                  <button
                    type="button"
                    onClick={onRequestAppointmentClick}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-teal-800 whitespace-nowrap self-start sm:self-auto"
                  >
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <span>Enquire with Doctor</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
