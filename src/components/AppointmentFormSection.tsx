import React, { useState, useId, useEffect } from 'react';
import { AppointmentFormData, SubmittedAppointment } from '../types';
import {
  Calendar,
  Clock,
  Phone,
  User,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  FileCheck
} from 'lucide-react';

interface AppointmentFormSectionProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export const AppointmentFormSection: React.FC<AppointmentFormSectionProps> = ({
  preselectedService,
  onClearPreselectedService
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    reasonForEnquiry: preselectedService || 'General Consultation',
    notes: '',
    demoDisclaimerAcknowledged: true
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmittedAppointment | null>(null);

  // Sync preselected service if changed
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, reasonForEnquiry: preselectedService }));
    }
  }, [preselectedService]);

  const nameInputId = useId();
  const phoneInputId = useId();
  const dateInputId = useId();
  const timeInputId = useId();
  const reasonInputId = useId();
  const notesInputId = useId();
  const disclaimerCheckboxId = useId();

  // Tomorrow's date as min date
  const minDate = useMemoDate();

  function useMemoDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a contact phone number.';
    } else if (cleanPhone.length < 7 || cleanPhone.length > 15) {
      newErrors.phone = 'Please enter a valid phone number (at least 7 digits).';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred consultation date.';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time window.';
    }

    if (!formData.reasonForEnquiry) {
      newErrors.reasonForEnquiry = 'Please select the reason for your enquiry.';
    }

    if (!formData.demoDisclaimerAcknowledged) {
      newErrors.disclaimer = 'You must acknowledge that this is a simulated demo form.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate standard response time
    setTimeout(() => {
      const randomRef = 'CP-' + Math.floor(100000 + Math.random() * 900000);
      const submission: SubmittedAppointment = {
        referenceId: randomRef,
        timestamp: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        data: { ...formData }
      };

      setSubmissionResult(submission);
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setFormData({
      fullName: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      reasonForEnquiry: 'General Consultation',
      notes: '',
      demoDisclaimerAcknowledged: true
    });
    setErrors({});
    if (onClearPreselectedService) {
      onClearPreselectedService();
    }
  };

  return (
    <section
      id="appointment"
      aria-labelledby="appointment-heading"
      className="py-16 sm:py-20 bg-white border-b border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold tracking-wider uppercase text-teal-800 mb-2">
            06. Online Appointment Request
          </div>
          <h2
            id="appointment-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900"
          >
            Request an Appointment
          </h2>
          <p className="mt-3 text-base text-slate-700 leading-relaxed">
            Submit your preferred date and time. Our fictional reception desk uses this information to coordinate outpatient availability.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          {/* Emergency Callout Box */}
          <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="font-bold text-amber-900 block mb-0.5">
                Notice for urgent health issues:
              </strong>
              This online enquiry form is strictly for non-urgent routine consultations. If you or a loved one is experiencing severe chest pain, shortness of breath, sudden numbness, or any life-threatening condition, call <strong>911</strong> immediately.
            </div>
          </div>

          {/* Submission Success State */}
          {submissionResult ? (
            <div
              className="bg-white rounded-xl border border-teal-200 p-6 sm:p-8 text-center"
              role="status"
              aria-live="polite"
            >
              <div className="w-14 h-14 rounded-full bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Simulated Request Received
              </h3>

              <div className="mt-2 inline-flex items-center gap-2 text-xs font-mono font-semibold text-teal-900 bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
                Reference ID: {submissionResult.referenceId}
              </div>

              <p className="mt-4 text-sm sm:text-base text-slate-700 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{submissionResult.data.fullName}</strong>. In a live clinic workflow, our reception team would call your phone ({submissionResult.data.phone}) within 1 business day to confirm your exact appointment time for <strong>{submissionResult.data.reasonForEnquiry}</strong>.
              </p>

              {/* Summary Details */}
              <div className="mt-6 max-w-md mx-auto bg-slate-50 rounded-lg p-4 border border-slate-200 text-left text-xs sm:text-sm space-y-2 text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-slate-900">{submissionResult.data.reasonForEnquiry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Requested Date:</span>
                  <span className="font-semibold text-slate-900">{submissionResult.data.preferredDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Time Window:</span>
                  <span className="font-semibold capitalize text-slate-900">
                    {submissionResult.data.preferredTime.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200">
                  <span className="text-slate-500">Logged at:</span>
                  <span className="text-slate-600">{submissionResult.timestamp}</span>
                </div>
              </div>

              {/* Mandatory Demo Reminder */}
              <div className="mt-6 p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900">
                <strong>Demo notice:</strong> This demo form does not submit real medical information or transmit data to real healthcare providers.
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  <RefreshCw className="w-4 h-4" aria-hidden="true" />
                  <span>Submit Another Enquiry</span>
                </button>
              </div>
            </div>
          ) : (
            /* Active Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* 1. Name */}
                <div>
                  <label htmlFor={nameInputId} className="block text-sm font-bold text-slate-900 mb-1.5">
                    Full Name <span className="text-red-600" aria-hidden="true">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
                    <input
                      id={nameInputId}
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g. Jane Doe"
                      className={`w-full pl-10 pr-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-700 ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      }`}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? `${nameInputId}-error` : undefined}
                    />
                  </div>
                  {errors.fullName && (
                    <p id={`${nameInputId}-error`} className="mt-1.5 text-xs text-red-600 font-medium">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* 2. Phone */}
                <div>
                  <label htmlFor={phoneInputId} className="block text-sm font-bold text-slate-900 mb-1.5">
                    Contact Phone Number <span className="text-red-600" aria-hidden="true">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
                    <input
                      id={phoneInputId}
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="(555) 000-0000"
                      className={`w-full pl-10 pr-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-700 ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      }`}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? `${phoneInputId}-error` : undefined}
                    />
                  </div>
                  {errors.phone && (
                    <p id={`${phoneInputId}-error`} className="mt-1.5 text-xs text-red-600 font-medium">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* 3. Preferred Date */}
                <div>
                  <label htmlFor={dateInputId} className="block text-sm font-bold text-slate-900 mb-1.5">
                    Preferred Date <span className="text-red-600" aria-hidden="true">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                    <input
                      id={dateInputId}
                      type="date"
                      required
                      min={minDate}
                      value={formData.preferredDate}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredDate: e.target.value });
                        if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                      }}
                      className={`w-full pl-10 pr-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-700 ${
                        errors.preferredDate ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      }`}
                      aria-invalid={!!errors.preferredDate}
                      aria-describedby={errors.preferredDate ? `${dateInputId}-error` : undefined}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p id={`${dateInputId}-error`} className="mt-1.5 text-xs text-red-600 font-medium">
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                {/* 4. Preferred Time */}
                <div>
                  <label htmlFor={timeInputId} className="block text-sm font-bold text-slate-900 mb-1.5">
                    Preferred Time Window <span className="text-red-600" aria-hidden="true">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                    <select
                      id={timeInputId}
                      required
                      value={formData.preferredTime}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredTime: e.target.value as any });
                        if (errors.preferredTime) setErrors({ ...errors, preferredTime: '' });
                      }}
                      className={`w-full pl-10 pr-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-700 ${
                        errors.preferredTime ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      }`}
                      aria-invalid={!!errors.preferredTime}
                      aria-describedby={errors.preferredTime ? `${timeInputId}-error` : undefined}
                    >
                      <option value="">Select a preferred time window...</option>
                      <option value="morning">Morning (8:00 AM – 11:30 AM)</option>
                      <option value="midday">Midday (11:30 AM – 2:00 PM)</option>
                      <option value="afternoon">Afternoon (2:00 PM – 4:30 PM)</option>
                      <option value="late-afternoon">Late Afternoon (4:30 PM – 6:00 PM)</option>
                    </select>
                  </div>
                  {errors.preferredTime && (
                    <p id={`${timeInputId}-error`} className="mt-1.5 text-xs text-red-600 font-medium">
                      {errors.preferredTime}
                    </p>
                  )}
                </div>
              </div>

              {/* 5. Reason for Enquiry */}
              <div>
                <label htmlFor={reasonInputId} className="block text-sm font-bold text-slate-900 mb-1.5">
                  Reason for Enquiry <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <div className="relative">
                  <HelpCircle className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                  <select
                    id={reasonInputId}
                    required
                    value={formData.reasonForEnquiry}
                    onChange={(e) => {
                      setFormData({ ...formData, reasonForEnquiry: e.target.value });
                      if (errors.reasonForEnquiry) setErrors({ ...errors, reasonForEnquiry: '' });
                    }}
                    className={`w-full pl-10 pr-3.5 py-2.5 bg-white border rounded-lg text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-700 ${
                      errors.reasonForEnquiry ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    }`}
                    aria-invalid={!!errors.reasonForEnquiry}
                    aria-describedby={errors.reasonForEnquiry ? `${reasonInputId}-error` : undefined}
                  >
                    <option value="General Consultation">General Consultation (Routine symptom check)</option>
                    <option value="Preventive Care">Preventive Care (Wellness roadmap & advice)</option>
                    <option value="Family Health">Family Health (Multi-member or pediatric visit)</option>
                    <option value="Health Checkups">Health Checkups (Annual physical baseline)</option>
                    <option value="Other Non-Emergency Inquiry">Other General Non-Emergency Inquiry</option>
                  </select>
                </div>
                {errors.reasonForEnquiry && (
                  <p id={`${reasonInputId}-error`} className="mt-1.5 text-xs text-red-600 font-medium">
                    {errors.reasonForEnquiry}
                  </p>
                )}
              </div>

              {/* Additional Notes (Optional) */}
              <div>
                <label htmlFor={notesInputId} className="block text-sm font-bold text-slate-900 mb-1.5">
                  Additional Notes or Questions <span className="text-xs font-normal text-slate-500">(Optional)</span>
                </label>
                <textarea
                  id={notesInputId}
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Do not include sensitive medical history. General scheduling preferences or accessibility accommodations only..."
                  className="w-full p-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-700"
                />
              </div>

              {/* Mandatory Demo Form Disclaimer Checkbox */}
              <div className="pt-2">
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-lg border border-slate-200">
                  <input
                    id={disclaimerCheckboxId}
                    type="checkbox"
                    checked={formData.demoDisclaimerAcknowledged}
                    onChange={(e) => {
                      setFormData({ ...formData, demoDisclaimerAcknowledged: e.target.checked });
                      if (errors.disclaimer) setErrors({ ...errors, disclaimer: '' });
                    }}
                    className="w-4 h-4 mt-0.5 rounded border-slate-300 text-teal-700 focus:ring-teal-700 shrink-0"
                    aria-describedby="disclaimer-text"
                  />
                  <label id="disclaimer-text" htmlFor={disclaimerCheckboxId} className="text-xs text-slate-700 leading-normal select-none">
                    <strong className="text-slate-900 block font-semibold mb-0.5">
                      Demo Acknowledgment:
                    </strong>
                    &ldquo;This demo form does not submit real medical information.&rdquo; I understand this is a fictional portfolio showcase for CarePoint Family Clinic.
                  </label>
                </div>
                {errors.disclaimer && (
                  <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.disclaimer}</p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-lg shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-teal-800 focus-visible:ring-offset-2 disabled:opacity-70 cursor-pointer"
                >
                  <FileCheck className="w-4 h-4" aria-hidden="true" />
                  <span>{isSubmitting ? 'Processing Request...' : 'Submit Appointment Enquiry'}</span>
                </button>

                <span className="text-xs text-slate-500 text-center sm:text-right">
                  No payment required · Free demo submission
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
