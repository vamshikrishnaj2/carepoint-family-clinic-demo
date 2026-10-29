import React, { useState } from 'react';
import { CLINIC_SERVICES } from '../data/clinicData';
import { ServiceItem } from '../types';
import { Check, Clock, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import servicesHeaderImg from '../assets/images/services_header_bg_1793214409378.jpg';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>('general-consultation');

  const toggleExpand = (id: string) => {
    setExpandedServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" aria-labelledby="services-heading" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-teal-800 mb-2">
            01. Clinical Offerings
          </div>
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900"
          >
            Fictional Outpatient Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            CarePoint Family Clinic provides structured primary care and preventive routines designed for individuals and households.
            All descriptions below are simulated examples.
          </p>
        </div>
        <div className="mb-12 rounded-2xl overflow-hidden shadow-md">
          <img src={servicesHeaderImg} alt="Modern, calming reception and consultation area in a fictional medical clinic" className="w-full h-auto aspect-[24/9] object-cover" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {CLINIC_SERVICES.map((service: ServiceItem) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <article
                key={service.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between p-6 sm:p-7"
              >
                <div>
                  {/* Top Metadata Line - Zero Pill Discipline */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3 font-medium">
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-teal-700" aria-hidden="true" />
                      <span>{service.durationEstimate}</span>
                    </span>
                    <span className="text-slate-400">Routine Non-Emergency</span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Target Audience (clean unboxed text) */}
                  <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                    <span className="font-semibold text-slate-800">Ideal for:</span>
                    {service.suitableFor.map((item, idx) => (
                      <React.Fragment key={item}>
                        <span>{item}</span>
                        {idx < service.suitableFor.length - 1 && <span aria-hidden="true" className="text-slate-300">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Expandable Inclusions & Details */}
                  {isExpanded && (
                    <div className="mt-5 pt-4 border-t border-slate-100 text-sm">
                      <h4 className="font-semibold text-slate-900 text-xs tracking-wider uppercase mb-2">
                        What this consultation covers:
                      </h4>
                      <ul className="space-y-2 text-slate-700">
                        {service.keyInclusions.map((inc) => (
                          <li key={inc} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Preparation Notes */}
                      <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 leading-normal">
                        <strong className="text-slate-900">What to prepare: </strong>
                        {service.preparationNotes}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Controls */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    aria-expanded={isExpanded}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-800 hover:text-teal-900 focus-visible:ring-2 focus-visible:ring-teal-700 rounded p-1 transition-colors"
                  >
                    <span>{isExpanded ? 'Show Less Details' : 'View Inclusions & Tips'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-teal-800 focus-visible:ring-offset-1"
                  >
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Enquire for {service.title.split(' ')[0]}</span>
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
