export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  durationEstimate: string;
  suitableFor: string[];
  keyInclusions: string[];
  preparationNotes: string;
}

export interface DoctorProfileData {
  name: string;
  credentialTitle: string;
  role: string;
  demoLabel: string;
  shortBio: string;
  clinicalFocus: string[];
  consultationPhilosophy: string;
  availableDays: string;
  languages: string[];
  fictionalDisclaimer: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ClinicTimingDay {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface ClinicContactInfo {
  name: string;
  fictionalAddress: {
    street: string;
    suite: string;
    district: string;
    cityStateZip: string;
  };
  phone: string;
  phoneAlt: string;
  email: string;
  hours: ClinicTimingDay[];
  publicTransit: string;
  parkingInfo: string;
  accessibilityNotes: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  preferredDate: string;
  preferredTime: 'morning' | 'midday' | 'afternoon' | 'late-afternoon' | '';
  reasonForEnquiry: string;
  notes?: string;
  demoDisclaimerAcknowledged: boolean;
}

export interface SubmittedAppointment {
  referenceId: string;
  timestamp: string;
  data: AppointmentFormData;
}
