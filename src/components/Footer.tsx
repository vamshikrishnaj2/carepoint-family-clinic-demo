import React from 'react';
import { Activity, AlertTriangle, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { CLINIC_CONTACT_DATA } from '../data/clinicData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-sm">
      {/* Top Banner Notice inside Footer */}
      <div className="bg-slate-950/80 border-b border-slate-800 py-3 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
            <span>
              <strong>Fictional Demonstration:</strong> All content, services, qualifications, and patient workflows are simulated.
            </span>
          </div>
          <div className="text-red-400 font-medium">
            Medical Emergency? Call 911 or your local emergency services.
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-800 text-teal-200">
                <Activity className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                CarePoint Family Clinic
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              A modern, accessible web portal concept showcasing family-focused outpatient healthcare information, transparent clinic schedules, and intuitive appointment enquiries.
            </p>

            <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-teal-300 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Accessibility Standards</span>
              </div>
              <p className="text-slate-400 leading-normal">
                Engineered with high contrast typography, keyboard navigation, clear ARIA labeling, and responsive controls for all visitors.
              </p>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 rounded">
                  Services
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 rounded">
                  Practitioner Profile
                </a>
              </li>
              <li>
                <a href="#why-use" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 rounded">
                  Why Use This Site
                </a>
              </li>
              <li>
                <a href="#clinic" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 rounded">
                  Clinic & Hours
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 rounded">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 rounded">
                  Appointment Form
                </a>
              </li>
            </ul>
          </div>

          {/* Clinic Timings & Location Summary (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4">
              Clinic & Location
            </h3>
            <address className="not-italic text-sm text-slate-400 space-y-1 leading-relaxed">
              <p className="text-slate-200 font-medium">{CLINIC_CONTACT_DATA.name}</p>
              <p>{CLINIC_CONTACT_DATA.fictionalAddress.street}</p>
              <p>{CLINIC_CONTACT_DATA.fictionalAddress.suite}</p>
              <p>{CLINIC_CONTACT_DATA.fictionalAddress.cityStateZip}</p>
            </address>

            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
              <p className="text-slate-300 font-medium">Standard Hours:</p>
              <p>Mon–Thu: 8:00 AM – 6:00 PM</p>
              <p>Fri: 8:00 AM – 5:00 PM</p>
              <p>Sat: 9:00 AM – 1:00 PM</p>
            </div>
          </div>

          {/* Contact (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4">
              Reception
            </h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>
                <span className="block text-xs text-slate-500">Phone</span>
                <span className="text-slate-200 font-medium">{CLINIC_CONTACT_DATA.phone}</span>
              </p>
              <p>
                <span className="block text-xs text-slate-500">Email</span>
                <span className="text-slate-200 text-xs break-all">{CLINIC_CONTACT_DATA.email}</span>
              </p>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-teal-400"
                aria-label="Back to top of page"
              >
                <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Disclaimers & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © 2026 CarePoint Family Clinic. Fictional portfolio demonstration. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Designed for clear patient communication & accessibility</span>
            <Heart className="w-3.5 h-3.5 text-teal-400 inline mx-1" aria-hidden="true" />
          </div>
        </div>
      </div>
    </footer>
  );
};
