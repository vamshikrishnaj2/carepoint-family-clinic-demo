import { ServiceItem, DoctorProfileData, FaqItem, ClinicContactInfo } from '../types';

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'general-consultation',
    title: 'General Consultation',
    shortDescription: 'Routine assessments, initial evaluations of non-emergency symptoms, and health guidance.',
    fullDescription: 'A standard outpatient discussion for everyday health questions, recurring minor discomforts, routine blood pressure reviews, or general well-being check-ins.',
    durationEstimate: '20–30 minutes (Simulated)',
    suitableFor: ['Adults', 'Teens', 'Seniors'],
    keyInclusions: [
      'Comprehensive history discussion and vital signs check',
      'Evaluation of non-emergency symptoms or discomforts',
      'Review of current medications or supplements',
      'Guidance on next steps and outpatient follow-up planning'
    ],
    preparationNotes: 'Please bring a list of your current daily medications and any recent lab reports you wish to review.'
  },
  {
    id: 'preventive-care',
    title: 'Preventive Care',
    shortDescription: 'Proactive wellness roadmaps, lifestyle planning, and age-appropriate screening discussions.',
    fullDescription: 'Focuses on maintaining health and identifying risk factors before symptoms develop. Includes discussions around physical activity, sleep hygiene, and age-based screening recommendations.',
    durationEstimate: '30–45 minutes (Simulated)',
    suitableFor: ['All age groups', 'Healthy individuals seeking ongoing wellness'],
    keyInclusions: [
      'Cardiovascular risk factor overview and lifestyle discussion',
      'Age-appropriate screening recommendations checklist',
      'Personalized sleep, nutrition, and physical activity guidance',
      'Preventive immunization schedule reviews'
    ],
    preparationNotes: 'Consider noting down your family health history and any personal lifestyle goals beforehand.'
  },
  {
    id: 'family-health',
    title: 'Family Health',
    shortDescription: 'Coordinated healthcare guidance tailored for multiple family members across all generations.',
    fullDescription: 'Designed for households seeking a centralized point of contact for their general healthcare needs, from pediatric wellness checks to older adult support and care coordination.',
    durationEstimate: '30–45 minutes (Simulated)',
    suitableFor: ['Multi-generational families', 'Parents with children', 'Older adults'],
    keyInclusions: [
      'Family health history documentation and shared context',
      'Developmental milestones check for growing children',
      'Senior mobility and independence support discussions',
      'Coordinated scheduling for multiple household members'
    ],
    preparationNotes: 'When requesting a visit for children, please bring their pediatric health record booklet or prior immunization history.'
  },
  {
    id: 'health-checkups',
    title: 'Health Checkups',
    shortDescription: 'Periodic comprehensive health evaluations, baseline vitals, and routine lab referrals.',
    fullDescription: 'A thorough periodic review intended to assess overall baseline physical health, track vitals across time, and coordinate standard routine screening panels.',
    durationEstimate: '45 minutes (Simulated)',
    suitableFor: ['Annual reviews', 'Workplace/academic health clearances', 'New patients'],
    keyInclusions: [
      'Full physical exam vitals (blood pressure, pulse, BMI, lung/heart sounds)',
      'Basic vision and hearing screening checks',
      'Referrals for standard baseline blood or urine tests if indicated',
      'Detailed written visit summary for your personal records'
    ],
    preparationNotes: 'If your visit includes morning fasting lab tests, you will be informed in advance during booking confirmation.'
  }
];

export const FICTIONAL_DOCTOR: DoctorProfileData = {
  name: 'Dr. Clara Hensley, MD',
  credentialTitle: 'Family Medicine Practitioner',
  role: 'Attending Family Physician (Simulated)',
  demoLabel: 'Demo profile — fictional information',
  shortBio: 'Dr. Clara Hensley is a fictional persona developed exclusively for this clinic website layout demonstration. In this concept, she represents an approachable family physician with a focus on comprehensive preventative health, multi-generational family guidance, and clear patient communication.',
  clinicalFocus: [
    'General Outpatient Family Medicine',
    'Preventive Wellness & Screening Coordination',
    'Routine Health Maintenance & Lifestyle Support',
    'Pediatric & Adolescent Routine Checkups'
  ],
  consultationPhilosophy: 'Healthcare should be straightforward, compassionate, and easy to navigate. Every consultation is an open dialogue where patients feel heard and unhurried.',
  availableDays: 'Monday, Tuesday, Thursday, Friday (9:00 AM – 4:30 PM)',
  languages: ['English', 'Spanish (Conversational)'],
  fictionalDisclaimer: 'Notice: Dr. Clara Hensley is an entirely fictional persona created for user interface demonstration purposes. No real physician relationship or medical qualifications exist.'
};

export const WHY_USE_POINTS = [
  {
    id: 'clear-info',
    title: 'Clear Service Information',
    description: 'Understand exactly what each consultation covers, what to expect, and what documents to bring before you arrive.',
    iconName: 'FileText'
  },
  {
    id: 'easy-contact',
    title: 'Easy Contact Options',
    description: 'Reach our reception desk directly by phone, email, or online enquiry without complicated phone trees.',
    iconName: 'PhoneCall'
  },
  {
    id: 'clinic-timings',
    title: 'Transparent Clinic Timings',
    description: 'Check real-time office availability and weekly opening hours so you always know when care is accessible.',
    iconName: 'Clock'
  },
  {
    id: 'location-access',
    title: 'Accessible Clinic Location',
    description: 'Step-by-step transit routes, dedicated street-level wheelchair access, and reserved visitor parking.',
    iconName: 'MapPin'
  },
  {
    id: 'appointment-enquiry',
    title: 'Simple Appointment Enquiry',
    description: 'Submit your preferred date and time online in less than two minutes with an instant confirmation summary.',
    iconName: 'CalendarCheck'
  }
];

export const GENERAL_FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Appointments',
    question: 'How does the online appointment enquiry process work?',
    answer: 'Select your preferred service, date, and general time window using our online form. In a live environment, our reception team reviews schedule availability and contacts you within one business day via phone or email to confirm your exact appointment slot.'
  },
  {
    id: 'faq-2',
    category: 'Visiting the Clinic',
    question: 'What documents should I bring to my first visit?',
    answer: 'Please bring a valid photo identification card, your current insurance card (if applicable), and an up-to-date list of all prescription medications, over-the-counter vitamins, and supplements you take.'
  },
  {
    id: 'faq-3',
    category: 'Appointments',
    question: 'How far in advance should I request an appointment?',
    answer: 'For routine annual checkups and preventive visits, we recommend booking 1 to 2 weeks in advance. For non-urgent general consultations, appointments are typically accommodated within 48 to 72 hours.'
  },
  {
    id: 'faq-4',
    category: 'Visiting the Clinic',
    question: 'What is your rescheduling or cancellation policy?',
    answer: 'We kindly request at least 24 hours advance notice for cancellations or rescheduling. This allows us to offer the opening to another patient needing consultation.'
  },
  {
    id: 'faq-5',
    category: 'Accessibility',
    question: 'Is the clinic facility wheelchair accessible?',
    answer: 'Yes. Our clinic entrance features step-free automatic sliding doors, wide hallways, ADA-compliant restrooms, and elevator access from the visitor parking garage.'
  },
  {
    id: 'faq-6',
    category: 'Emergency Notice',
    question: 'Can I visit this clinic for medical emergencies?',
    answer: 'No. CarePoint Family Clinic is an outpatient scheduled practice. If you are experiencing chest pain, difficulty breathing, severe bleeding, or any medical emergency, dial 911 or visit the nearest hospital emergency department immediately.'
  }
];

export const CLINIC_CONTACT_DATA: ClinicContactInfo = {
  name: 'CarePoint Family Clinic',
  fictionalAddress: {
    street: '450 Horizon Parkway',
    suite: 'Suite 210 (Second Floor)',
    district: 'Riverdale Medical Arts Plaza',
    cityStateZip: 'Maplewood, CA 94103'
  },
  phone: '(555) 019-2834',
  phoneAlt: '(555) 019-2835',
  email: 'reception@demo-carepointclinic.com',
  hours: [
    { day: 'Monday', hours: '8:00 AM – 6:00 PM', isOpen: true },
    { day: 'Tuesday', hours: '8:00 AM – 6:00 PM', isOpen: true },
    { day: 'Wednesday', hours: '8:00 AM – 6:00 PM', isOpen: true },
    { day: 'Thursday', hours: '8:00 AM – 6:00 PM', isOpen: true },
    { day: 'Friday', hours: '8:00 AM – 5:00 PM', isOpen: true },
    { day: 'Saturday', hours: '9:00 AM – 1:00 PM (Routine only)', isOpen: true },
    { day: 'Sunday', hours: 'Closed', isOpen: false }
  ],
  publicTransit: 'Maplewood Metro Line 4 (Riverdale Station, Exit B, 2-minute walk) · City Bus routes 14 and 28 stop right outside Plaza entrance.',
  parkingInfo: 'Complimentary 2-hour patient parking in the attached East Garage. Bring your parking ticket to reception for validation.',
  accessibilityNotes: 'Step-free entrance ramp, automatic sliding entrance doors, dual elevators to Suite 210, and accessible examination rooms.'
};
