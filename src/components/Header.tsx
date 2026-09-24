import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Screen, TransitionType } from '../types';
import { Wrench, Phone, ShieldCheck, MapPin, Calendar, Clock, Menu, X, ArrowRight, Mail } from 'lucide-react';
import { MrGeeLogo } from './MrGeeLogo';

interface HeaderProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen, transition?: TransitionType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (screen: Screen, transition: TransitionType = 'none') => {
    onNavigate(screen, transition);
    setMobileMenuOpen(false);
  };

  const navLinks: { id: Screen; path: string; label: string }[] = [
    { id: 'home', path: 'home', label: 'Home' },
    { id: 'services', path: 'services', label: 'Services & Repairs' },
    { id: 'pricing-enquiry', path: 'pricing-enquiry', label: 'Pricing & Quotes' },
    { id: 'book-appointment', path: 'book-appointment', label: 'Book Appointment' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs transition-colors">
      {/* Top micro-bar for local trust signals & fast phone call */}
      <div className="bg-[#0B1E3B] py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-slate-200">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-blue-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </span>
              On-Call Today Across Gauteng
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-300" />
              Johannesburg • Pretoria • West Rand • East Rand • Centurion
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs ml-auto">
            <a
              href="mailto:Mrgeeappliancesthobela@gmail.com"
              className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-300" />
              <span>Mrgeeappliancesthobela@gmail.com</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-slate-100 font-medium">6 Months Guarantee</span>
            </div>
            <a 
              href="tel:+27623510025" 
              className="flex items-center gap-1.5 text-white font-medium hover:bg-blue-700 transition-colors bg-blue-600 px-2.5 py-0.5 rounded border border-blue-500"
            >
              <Phone className="w-3 h-3 text-white" />
              <span>062 351 0025 / Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNavClick('home', 'none')} 
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <MrGeeLogo size="md" />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 font-heading">
                MR Gee <span className="text-blue-700">Appliance Repair</span>
              </span>
            </div>
            <p className="text-[11px] text-blue-700 font-semibold tracking-wide uppercase">
              Fixing What Matters In Your Home!
            </p>
          </div>
        </div>

        {/* Primary Desktop Nav with animated sliding indicator */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100 p-1.5 rounded-xl border border-slate-200 relative">
          {navLinks.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <a
                key={item.id}
                href="#"
                data-path={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id, 'none');
                }}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 select-none ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="headerActiveIndicator"
                    className="absolute inset-0 bg-blue-600 rounded-lg shadow-xs"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button: xpath matches //header//a[contains(., 'Book a Service')] */}
        <div className="flex items-center gap-3">
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('book-appointment', 'push');
            }}
            className="group relative inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-150 shadow-sm active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4 mr-2 text-white" />
            <span>Book a Service</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-blue-200 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-5 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1.5">
            <a
              href="#"
              data-path="home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home', 'none');
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium ${
                currentScreen === 'home'
                  ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-200'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>Home</span>
              {currentScreen === 'home' && <span className="w-2 h-2 rounded-full bg-blue-600"></span>}
            </a>

            <a
              href="#"
              data-path="services"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('services', 'none');
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium ${
                currentScreen === 'services'
                  ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-200'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>Services & Repairs</span>
              {currentScreen === 'services' && <span className="w-2 h-2 rounded-full bg-blue-600"></span>}
            </a>

            <a
              href="#"
              data-path="pricing-enquiry"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('pricing-enquiry', 'none');
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium ${
                currentScreen === 'pricing-enquiry'
                  ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-200'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>Pricing & Quotes</span>
              {currentScreen === 'pricing-enquiry' && <span className="w-2 h-2 rounded-full bg-blue-600"></span>}
            </a>

            <a
              href="#"
              data-path="book-appointment"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('book-appointment', 'none');
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium ${
                currentScreen === 'book-appointment'
                  ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-200'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>Book Appointment</span>
              {currentScreen === 'book-appointment' && <span className="w-2 h-2 rounded-full bg-blue-600"></span>}
            </a>
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="tel:+27623510025"
              className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call Technician: 062 351 0025</span>
            </a>
            <a
              href="mailto:Mrgeeappliancesthobela@gmail.com"
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium hover:bg-slate-200 transition-colors border border-slate-200"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>Mrgeeappliancesthobela@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
