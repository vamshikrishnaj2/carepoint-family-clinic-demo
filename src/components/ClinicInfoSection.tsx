import React, { useState, useMemo } from 'react';
import { CLINIC_CONTACT_DATA } from '../data/clinicData';
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Car,
  Train,
  Accessibility,
  CheckCircle,
  Copy,
  ExternalLink
} from 'lucide-react';

export const ClinicInfoSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Compute live open/closed status based on local time
  const clinicStatus = useMemo(() => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const currentDecimalTime = hour + minutes / 60;

    if (day === 0) {
      return { isOpen: false, message: 'Closed today (Sunday)', nextOpen: 'Opens Monday at 8:00 AM' };
    } else if (day === 6) {
      // Saturday 9:00 AM - 1:00 PM
      if (currentDecimalTime >= 9 && currentDecimalTime < 13) {
        return { isOpen: true, message: 'Currently Open', nextOpen: 'Closes today at 1:00 PM' };
      } else {
        return { isOpen: false, message: 'Closed now', nextOpen: 'Opens Monday at 8:00 AM' };
      }
    } else if (day === 5) {
      // Friday 8:00 AM - 5:00 PM
      if (currentDecimalTime >= 8 && currentDecimalTime < 17) {
        return { isOpen: true, message: 'Currently Open', nextOpen: 'Closes today at 5:00 PM' };
      } else {
        return { isOpen: false, message: 'Closed now', nextOpen: 'Opens Saturday at 9:00 AM' };
      }
    } else {
      // Mon - Thu 8:00 AM - 6:00 PM
      if (currentDecimalTime >= 8 && currentDecimalTime < 18) {
        return { isOpen: true, message: 'Currently Open', nextOpen: 'Closes today at 6:00 PM' };
      } else {
        return { isOpen: false, message: 'Closed now', nextOpen: 'Opens tomorrow at 8:00 AM' };
      }
    }
  }, []);

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard?.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section
      id="clinic"
      aria-labelledby="clinic-info-heading"
      className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-teal-800 mb-2">
            05. Clinic Timings & Access
          </div>
          <h2
            id="clinic-info-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900"
          >
            Clinic Information & Location
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            Conveniently situated in the Riverdale Medical Arts Plaza with step-free accessibility, dedicated transit links, and complimentary parking.
          </p>
        </div>

        {/* 3-Column Layout: Hours | Location & Access | Contact Channels */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Opening Hours with Live Status (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal-700" aria-hidden="true" />
                <h3 className="text-lg font-bold text-slate-900">Opening Hours</h3>
              </div>

              {/* Status indicator */}
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold ${
                  clinicStatus.isOpen
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    clinicStatus.isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-slate-400'
                  }`}
                  aria-hidden="true"
                />
                {clinicStatus.message}
              </span>
            </div>

            <p className="text-xs text-slate-500 mt-2">
              Status for local Pacific Time: <span className="font-medium text-slate-700">{clinicStatus.nextOpen}</span>
            </p>

            {/* Weekly Schedule Table */}
            <div className="mt-4 divide-y divide-slate-100 text-sm">
              {CLINIC_CONTACT_DATA.hours.map((item) => (
                <div key={item.day} className="py-2.5 flex items-center justify-between">
                  <span className="font-medium text-slate-800">{item.day}</span>
                  <span className="text-slate-600 font-mono text-xs sm:text-sm">{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 leading-normal">
              <strong>Walk-in Notice:</strong> Walk-ins are accommodated based on daily clinical triage availability. Prior appointment enquiry is strongly encouraged.
            </div>
          </div>

          {/* Column 2: Location, Transit & Accessibility (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <MapPin className="w-5 h-5 text-teal-700" aria-hidden="true" />
                <h3 className="text-lg font-bold text-slate-900">Physical Location</h3>
              </div>

              <address className="not-italic mt-3 text-sm text-slate-700 leading-relaxed">
                <p className="font-semibold text-slate-900">{CLINIC_CONTACT_DATA.name}</p>
                <p>{CLINIC_CONTACT_DATA.fictionalAddress.street}</p>
                <p>{CLINIC_CONTACT_DATA.fictionalAddress.suite}</p>
                <p>{CLINIC_CONTACT_DATA.fictionalAddress.district}</p>
                <p>{CLINIC_CONTACT_DATA.fictionalAddress.cityStateZip}</p>
              </address>
            </div>

            {/* Transit */}
            <div className="pt-3 border-t border-slate-100">
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <Train className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 block mb-0.5">Public Transit</strong>
                  <p>{CLINIC_CONTACT_DATA.publicTransit}</p>
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="pt-3 border-t border-slate-100">
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <Car className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 block mb-0.5">Visitor Parking</strong>
                  <p>{CLINIC_CONTACT_DATA.parkingInfo}</p>
                </div>
              </div>
            </div>

            {/* Accessibility */}
            <div className="pt-3 border-t border-slate-100">
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <Accessibility className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-slate-900 block mb-0.5">Accessibility Features</strong>
                  <p>{CLINIC_CONTACT_DATA.accessibilityNotes}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Channels & Interactive Map Diagram (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Contact details box */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <Phone className="w-5 h-5 text-teal-700" aria-hidden="true" />
                <h3 className="text-lg font-bold text-slate-900">Direct Contact</h3>
              </div>

              <div className="mt-4 space-y-3.5 text-sm">
                {/* Phone */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block">Main Reception Line</span>
                    <a
                      href={`tel:${CLINIC_CONTACT_DATA.phone.replace(/[^0-9]/g, '')}`}
                      className="font-bold text-slate-900 hover:text-teal-800 transition-colors"
                    >
                      {CLINIC_CONTACT_DATA.phone}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(CLINIC_CONTACT_DATA.phone, 'phone')}
                    className="p-1.5 rounded-md hover:bg-slate-100 text-slate-600 focus-visible:ring-2 focus-visible:ring-teal-700"
                    title="Copy phone number"
                    aria-label="Copy reception telephone number"
                  >
                    {copiedPhone ? (
                      <CheckCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    ) : (
                      <Copy className="w-4 h-4" aria-hidden="true" />
                    )}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="truncate pr-2">
                    <span className="text-xs text-slate-500 block">General Inquiries</span>
                    <a
                      href={`mailto:${CLINIC_CONTACT_DATA.email}`}
                      className="font-medium text-teal-800 hover:underline truncate block"
                    >
                      {CLINIC_CONTACT_DATA.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(CLINIC_CONTACT_DATA.email, 'email')}
                    className="p-1.5 rounded-md hover:bg-slate-100 text-slate-600 focus-visible:ring-2 focus-visible:ring-teal-700 shrink-0"
                    title="Copy email address"
                    aria-label="Copy reception email address"
                  >
                    {copiedEmail ? (
                      <CheckCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    ) : (
                      <Copy className="w-4 h-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Stylized Vector Map Diagram */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-700">
                <span>Facility Map Diagram</span>
                <span className="text-slate-500">Riverdale District</span>
              </div>

              {/* Accessible Scalable Map Vector */}
              <div className="p-4 bg-slate-50 flex flex-col items-center justify-center">
                <svg
                  viewBox="0 0 400 240"
                  className="w-full h-auto rounded-lg border border-slate-200 bg-white"
                  role="img"
                  aria-label="Campus map showing CarePoint Family Clinic at 450 Horizon Parkway, East Parking Garage, and Riverdale Metro station"
                >
                  {/* Background grid */}
                  <rect width="400" height="240" fill="#f8fafc" />

                  {/* Horizon Parkway (Horizontal road) */}
                  <rect x="0" y="80" width="400" height="40" fill="#e2e8f0" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 6" />
                  <text x="12" y="94" fontSize="10" fill="#64748b" fontWeight="600">HORIZON PARKWAY</text>

                  {/* Medical Arts Plaza Drive (Vertical street) */}
                  <rect x="230" y="0" width="36" height="240" fill="#e2e8f0" />
                  <line x1="248" y1="0" x2="248" y2="240" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 6" />

                  {/* CarePoint Clinic Building */}
                  <rect x="50" y="140" width="160" height="75" rx="6" fill="#0f766e" />
                  <text x="65" y="170" fontSize="12" fill="#ffffff" fontWeight="bold">CarePoint Clinic</text>
                  <text x="65" y="186" fontSize="9" fill="#ccfbf1">Suite 210 · Main Entrance</text>
                  <circle cx="185" cy="155" r="5" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />

                  {/* East Visitor Parking Garage */}
                  <rect x="285" y="140" width="95" height="75" rx="6" fill="#0284c7" />
                  <text x="295" y="172" fontSize="10" fill="#ffffff" fontWeight="bold">East Garage</text>
                  <text x="295" y="186" fontSize="8" fill="#e0f2fe">Visitor Parking P1-P3</text>

                  {/* Metro Station */}
                  <rect x="50" y="20" width="130" height="45" rx="4" fill="#334155" />
                  <text x="60" y="42" fontSize="10" fill="#ffffff" fontWeight="bold">Riverdale Metro (Line 4)</text>
                  <text x="60" y="55" fontSize="8" fill="#94a3b8">Exit B · 2 min walk</text>

                  {/* Pedestrian walkway arrow */}
                  <path d="M 115 65 L 115 80" stroke="#0f766e" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 115 120 L 115 140" stroke="#0f766e" strokeWidth="3" strokeLinecap="round" markerEnd="url(#arrow)" />
                </svg>

                <div className="mt-3 w-full flex items-center justify-between text-[11px] text-slate-500">
                  <span>Step-free ramp at Main Entrance</span>
                  <span className="flex items-center gap-1 text-teal-800 font-semibold">
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    Simulated Campus Map
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
