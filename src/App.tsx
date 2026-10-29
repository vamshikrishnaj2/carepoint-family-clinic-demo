/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { DemoNotice } from './components/DemoNotice';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { DoctorProfile } from './components/DoctorProfile';
import { WhyUseSection } from './components/WhyUseSection';
import { FaqSection } from './components/FaqSection';
import { ClinicInfoSection } from './components/ClinicInfoSection';
import { AppointmentFormSection } from './components/AppointmentFormSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export default function App() {
  const [isLargeText, setIsLargeText] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('General Consultation');

  // Toggle accessible large text mode on the document body
  const handleToggleLargeText = () => {
    setIsLargeText((prev) => !prev);
  };

  useEffect(() => {
    if (isLargeText) {
      document.body.classList.add('accessible-large-text');
    } else {
      document.body.classList.remove('accessible-large-text');
    }
  }, [isLargeText]);

  // Smooth scroll and focus helper
  const scrollToAppointmentForm = (serviceToPreselect?: string) => {
    if (serviceToPreselect) {
      setPreselectedService(serviceToPreselect);
    }
    const target = document.getElementById('appointment');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Find the first input and focus it for keyboard accessibility
      const firstInput = target.querySelector('input') as HTMLInputElement | null;
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 600);
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* 1. DEMO NOTICE */}
      <DemoNotice
        isLargeText={isLargeText}
        onToggleLargeText={handleToggleLargeText}
      />

      {/* 2. NAVBAR */}
      <Navbar
        onRequestAppointmentClick={() => scrollToAppointmentForm()}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 3. HERO */}
        <Hero
          onViewServicesClick={() => scrollToSection('services')}
          onRequestAppointmentClick={() => scrollToAppointmentForm()}
        />

        {/* 4. SERVICES */}
        <ServicesSection
          onSelectService={(serviceTitle) => scrollToAppointmentForm(serviceTitle)}
        />

        {/* 5. DOCTOR PROFILE */}
        <DoctorProfile
          onRequestAppointmentClick={() => scrollToAppointmentForm()}
        />

        {/* 6. WHY PATIENTS CAN USE THIS WEBSITE */}
        <WhyUseSection
          onNavigateSection={(sectionId) => scrollToSection(sectionId)}
        />

        {/* 7. FAQ */}
        <FaqSection />

        {/* 8. CLINIC INFORMATION */}
        <ClinicInfoSection />

        {/* 9. APPOINTMENT FORM */}
        <AppointmentFormSection
          preselectedService={preselectedService}
          onClearPreselectedService={() => setPreselectedService('General Consultation')}
        />

        {/* 10. FINAL CTA */}
        <FinalCta
          onRequestAppointmentClick={() => scrollToAppointmentForm()}
        />
      </main>

      {/* 11. FOOTER */}
      <Footer />
    </div>
  );
}
