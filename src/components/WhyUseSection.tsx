import React from 'react';
import { FileText, PhoneCall, Clock, MapPin, CalendarCheck } from 'lucide-react';
import whyUseHeaderImg from '../assets/images/why_use_header_bg_1793214408928.jpg';

interface WhyUseSectionProps {
  onNavigateSection: (sectionId: string) => void;
}

export const WhyUseSection: React.FC<WhyUseSectionProps> = ({ onNavigateSection }) => {
  const pillars = [
    {
      id: 'clear-service-information',
      title: 'Clear Service Information',
      description:
        'Know exactly what each consultation entails, how long it takes, and what documentation to have ready before visiting.',
      benefit: 'No guesswork before your consultation',
      targetSection: 'services',
      icon: FileText
    },
    {
      id: 'easy-contact',
      title: 'Direct, Easy Contact',
      description:
        'Connect directly with the reception desk via dedicated phone lines and responsive general inquiry email.',
      benefit: 'Accessible communication channels',
      targetSection: 'clinic',
      icon: PhoneCall
    },
    {
      id: 'clinic-timings',
      title: 'Transparent Clinic Timings',
      description:
        'View live status indicators showing current clinic open/closed status and full weekly operating hours.',
      benefit: 'Real-time schedule clarity',
      targetSection: 'clinic',
      icon: Clock
    },
    {
      id: 'clinic-location',
      title: 'Accessible Location & Transit',
      description:
        'Review turn-by-turn transit directions, step-free wheelchair access notes, and complimentary visitor garage parking.',
      benefit: 'Barrier-free arrival guidance',
      targetSection: 'clinic',
      icon: MapPin
    },
    {
      id: 'appointment-enquiry',
      title: 'Frictionless Appointment Enquiry',
      description:
        'Select your preferred date, time window, and reason for visit online in under two minutes with instant confirmation.',
      benefit: 'Fast digital enquiry without queues',
      targetSection: 'appointment',
      icon: CalendarCheck
    }
  ];

  return (
    <section
      id="why-use"
      aria-labelledby="why-use-heading"
      className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-teal-800 mb-2">
            03. Purpose & Usability
          </div>
          <h2
            id="why-use-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900"
          >
            Why Patients Can Use This Website
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            Our digital portal is engineered around patient convenience, clear information, and effortless clinic interaction.
          </p>
        </div>
        <div className="mb-12 rounded-2xl overflow-hidden shadow-md">
          <img src={whyUseHeaderImg} alt="Professional healthcare team collaborating in a modern office, symbolizing trust and clarity" className="w-full h-auto aspect-[24/9] object-cover" />
        </div>

        {/* 5-Pillar Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            // Span 2 columns on the last card on large screens for a balanced 5-card layout
            const isLast = idx === 4;

            return (
              <article
                key={pillar.id}
                className={`bg-white rounded-xl border border-slate-200 hover:border-slate-300 p-6 sm:p-7 flex flex-col justify-between shadow-xs transition-shadow ${
                  isLast ? 'sm:col-span-2 lg:col-span-2 bg-linear-to-r from-white to-teal-50/40' : ''
                }`}
              >
                <div>
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Sub-label & Navigation link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-teal-900 font-medium">{pillar.benefit}</span>
                  <button
                    type="button"
                    onClick={() => onNavigateSection(pillar.targetSection)}
                    className="font-semibold text-slate-700 hover:text-teal-800 focus-visible:ring-2 focus-visible:ring-teal-700 rounded p-1 transition-colors"
                  >
                    View section →
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
