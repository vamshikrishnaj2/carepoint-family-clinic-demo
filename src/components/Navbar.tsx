import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

interface NavbarProps {
  onRequestAppointmentClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestAppointmentClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Clinic', href: '#clinic' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to Main Content Link for screen readers & keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-800 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Zone 1: Single text element wordmark in brand display font */}
            <a
              href="#"
              className="group flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 focus-visible:ring-2 focus-visible:ring-teal-700 rounded-md p-1"
              aria-label="CarePoint Family Clinic Home"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 text-teal-700 group-hover:bg-teal-100 transition-colors">
                <Activity className="w-5 h-5 text-teal-700" aria-hidden="true" />
              </span>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                CarePoint
              </span>
            </a>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav
              aria-label="Primary Navigation"
              className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-teal-700 focus-visible:text-teal-800 focus-visible:ring-2 focus-visible:ring-teal-700 rounded px-1.5 py-1 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onRequestAppointmentClick}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-lg shadow-xs hover:shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-teal-800 focus-visible:ring-offset-2 whitespace-nowrap"
              >
                Request Appointment
              </button>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-panel"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-teal-700"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-100 hover:text-teal-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    handleLinkClick();
                    onRequestAppointmentClick();
                  }}
                  className="w-full flex items-center justify-center px-4 py-3 text-base font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-teal-800"
                >
                  Request Appointment
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
