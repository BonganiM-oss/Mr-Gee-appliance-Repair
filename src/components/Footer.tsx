import React, { useState } from 'react';
import { Screen, TransitionType } from '../types';
import { Wrench, MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Heart, ChevronDown, ChevronUp } from 'lucide-react';
import { COVERAGE_AREAS } from '../data/repairData';
import { MrGeeLogo } from './MrGeeLogo';

interface FooterProps {
  onNavigate: (screen: Screen, transition?: TransitionType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [isAreasExpanded, setIsAreasExpanded] = useState(false);

  const handleNav = (screen: Screen, transition: TransitionType = 'push') => {
    onNavigate(screen, transition);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1E3B] border-t border-blue-950 text-slate-300 relative overflow-hidden">
      {/* Trust banner above footer columns */}
      <div className="border-b border-blue-900/60 bg-[#07152B] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-blue-300" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">6-Month Guarantee</h4>
              <p className="text-xs text-slate-300">All parts & labor backed by warranty</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-blue-300" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Same-Day Callouts</h4>
              <p className="text-xs text-slate-300">Fast mobile response across Gauteng</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Transparent Pricing</h4>
              <p className="text-xs text-slate-300">Upfront quote before any repair starts</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">15+ Years Experience</h4>
              <p className="text-xs text-slate-300">Master technician fixing all major brands</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MrGeeLogo size="md" />
              <div>
                <span className="text-xl font-extrabold text-white font-heading block">
                  MR Gee <span className="text-blue-300">Appliance Repair</span>
                </span>
                <span className="text-[11px] text-blue-200 tracking-wider font-semibold uppercase">
                  Fixing What Matters In Your Home!
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Fast, reliable appliance repairs across the entire Gauteng province. Over 15 years experience fixing washing machines, fridges, TVs, microwaves, stoves, and more.
            </p>
            <div className="pt-2 flex flex-col gap-2.5 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0" />
                <span>Johannesburg, Pretoria, West Rand & East Rand Hubs, Gauteng</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Phone className="w-4 h-4 text-blue-300 shrink-0" />
                <a href="tel:+27623510025" className="hover:text-white transition-colors">
                  062 351 0025 / WhatsApp Support
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Mail className="w-4 h-4 text-blue-300 shrink-0" />
                <a href="mailto:Mrgeeappliancesthobela@gmail.com" className="hover:text-white transition-colors">
                  Mrgeeappliancesthobela@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Clock className="w-4 h-4 text-blue-300 shrink-0" />
                <span>Mon – Sat: 07:30 – 18:30 | Sun: Emergency Callouts</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-blue-400 pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#"
                  data-path="home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('home', 'push');
                  }}
                  className="hover:text-white hover:underline transition-colors inline-block text-slate-300"
                >
                  Home Page
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-path="services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('services', 'push');
                  }}
                  className="hover:text-white hover:underline transition-colors inline-block text-slate-300"
                >
                  Services & Appliance Repairs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-path="pricing-enquiry"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('pricing-enquiry', 'push');
                  }}
                  className="hover:text-white hover:underline transition-colors inline-block text-slate-300"
                >
                  Pricing & Free Estimates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-path="book-appointment"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('book-appointment', 'push');
                  }}
                  className="hover:text-white hover:underline transition-colors inline-block text-slate-300"
                >
                  Book a Diagnostic Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Appliances Repaired */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-blue-400 pl-2.5">
              Appliances Repaired
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>Fridges & Domestic Freezers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>Washing Machines & Dryers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>Smart TVs (LED Backlights & Power)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>Stoves, Hobs & Thermo-fan Ovens</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>Microwaves & Countertop Appliances</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>Commercial Cold Rooms & Chillers</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-4 border-l-2 border-blue-400 pl-2.5">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                Gauteng Coverage Areas
              </h4>
              <button
                type="button"
                onClick={() => setIsAreasExpanded(!isAreasExpanded)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg bg-blue-900/80 hover:bg-blue-800 text-blue-200 border border-blue-700/60 transition-colors cursor-pointer"
                aria-expanded={isAreasExpanded}
                aria-label={isAreasExpanded ? "Hide coverage areas" : "Show all coverage areas"}
              >
                <span>{isAreasExpanded ? 'Hide List' : 'View List'}</span>
                {isAreasExpanded ? (
                  <ChevronUp className="w-3.5 h-3.5 text-blue-300" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-blue-300" />
                )}
              </button>
            </div>

            {isAreasExpanded ? (
              <div className="flex flex-wrap gap-1.5 transition-all duration-300">
                {COVERAGE_AREAS.map((area, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs px-2.5 py-1 rounded bg-blue-900/60 border border-blue-800/80 text-blue-100 hover:border-blue-600 transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            ) : (
              <div className="text-xs text-slate-400 flex items-center justify-between bg-blue-950/40 p-2.5 rounded-lg border border-blue-900/50">
                <span>{COVERAGE_AREAS.length} service hubs covered across Gauteng</span>
                <button
                  type="button"
                  onClick={() => setIsAreasExpanded(true)}
                  className="text-blue-300 hover:text-blue-100 font-semibold underline underline-offset-2 ml-2"
                >
                  Show all
                </button>
              </div>
            )}

            <div className="mt-4 p-3.5 rounded-lg bg-blue-900/40 border border-blue-700/50 text-xs text-blue-100">
              <strong className="block text-white font-semibold mb-0.5">Need immediate assistance?</strong>
              Call MR Gee directly for priority emergency dispatch anywhere in Gauteng.
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} MR Gee Appliance Repair. All rights reserved. Across Gauteng Province.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-300">
              Built with care for Gauteng households & businesses
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
