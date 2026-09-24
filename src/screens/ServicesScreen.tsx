import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen, TransitionType } from '../types';
import { 
  Wrench, ShieldCheck, Clock, CheckCircle2, AlertCircle, ArrowRight,
  Snowflake, Tv, Flame, Zap, Check, Search, Filter, PhoneCall, Mail, MessageSquare
} from 'lucide-react';
import { SERVICES_DATA, POPULAR_BRANDS } from '../data/repairData';
import { MrGeeLogo } from '../components/MrGeeLogo';
import servicesBg from '../assets/images/services_repair_bg_1790255590819.jpg';

interface ServicesScreenProps {
  onNavigate: (screen: Screen, transition?: TransitionType, state?: any) => void;
}

const SERVICES_PARTICLES = [
  { size: 4, left: 12, delay: 0, duration: 8, color: 'bg-cyan-400' },
  { size: 5, left: 28, delay: 2.5, duration: 11, color: 'bg-blue-400' },
  { size: 3, left: 45, delay: 1.2, duration: 7, color: 'bg-sky-300' },
  { size: 5, left: 62, delay: 3.8, duration: 12, color: 'bg-indigo-300' },
  { size: 4, left: 78, delay: 0.8, duration: 9, color: 'bg-cyan-300' },
  { size: 5, left: 91, delay: 4.2, duration: 10, color: 'bg-blue-300' },
];

export const ServicesScreen: React.FC<ServicesScreenProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Refrigeration', 'Laundry', 'Cooking', 'Electronics', 'Commercial'];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.commonIssues.some(i => i.toLowerCase().includes(searchQuery.toLowerCase())) ||
      service.brands.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Services & Repairs Hero Header with Animated Workshop Background */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800 overflow-hidden bg-slate-950">
        {/* Animated Background Image & Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Animated Ambient Glow Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.55, 0.3],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-16 right-1/4 w-96 h-96 rounded-full bg-blue-600/30 blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.1, 0.9, 1.1],
              opacity: [0.2, 0.45, 0.2],
              x: [0, -25, 0],
              y: [0, 25, 0]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-cyan-500/25 blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [0.95, 1.15, 0.95],
              opacity: [0.15, 0.35, 0.15]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 left-6 w-72 h-72 rounded-full bg-indigo-600/25 blur-3xl"
          />

          {/* Animated Zoom and Pan on Services & Repairing Image */}
          <motion.img 
            src={servicesBg} 
            alt="MR Gee Services & Repairs Workshop" 
            referrerPolicy="no-referrer"
            animate={{
              scale: [1, 1.06, 1],
              y: [0, -8, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full object-cover object-center lg:object-right opacity-35 sm:opacity-45 filter contrast-110 select-none"
          />

          {/* Floating Subtle Electric / Repair Spark Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {SERVICES_PARTICLES.map((p, i) => (
              <motion.div
                key={i}
                initial={{ 
                  y: '105%', 
                  opacity: 0, 
                  scale: 0.8 
                }}
                animate={{ 
                  y: '-10%', 
                  opacity: [0, 0.85, 0.85, 0], 
                  scale: [0.8, 1.3, 0.7] 
                }}
                transition={{ 
                  duration: p.duration, 
                  repeat: Infinity, 
                  delay: p.delay, 
                  ease: "easeInOut" 
                }}
                className={`absolute bottom-0 w-1.5 h-1.5 rounded-full ${p.color} blur-[0.5px] pointer-events-none shadow-sm shadow-cyan-400`}
                style={{ left: `${p.left}%` }}
              />
            ))}
          </div>

          {/* Subtle Ambient Light Shimmer / Light Sweep */}
          <motion.div 
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "linear"
            }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
          />

          {/* Vignette / Radial Overlay to guarantee readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </div>

        {/* Services Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/40 text-blue-200 text-xs font-semibold mb-5 backdrop-blur-md shadow-lg shadow-blue-950/50">
            <MrGeeLogo size="sm" />
            <span className="uppercase tracking-wider">Services & Repairs</span>
            <span className="text-blue-400">•</span>
            <span className="text-cyan-300">Fixing What Matters in Your Home!</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Professional Appliance{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              Services & Repairs
            </span>{' '}
            Across Gauteng
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            From single-door bar fridges to commercial walk-in cold rooms and digital inverter washing machines. Every repair is performed on-site with transparent pricing and our iron-clad 6-month warranty.
          </p>

          {/* Quick Action Links matching spec */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* xpath: //main//a[contains(., 'Schedule Diagnosis')] */}
            <a
              href="#schedule"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('book-appointment', 'push');
              }}
              className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 border border-blue-500 transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              <Clock className="w-4 h-4" />
              <span>Schedule Diagnosis</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            {/* xpath: //main//a[contains(., 'Book Online')] */}
            <a
              href="#book-online"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('book-appointment', 'push');
              }}
              className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700 backdrop-blur-md shadow-sm transition-all hover:scale-[1.02] flex items-center gap-2"
            >
              <Wrench className="w-4 h-4 text-cyan-400" />
              <span>Book Online</span>
            </a>
          </div>

          {/* Value Pillars */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs mb-0.5">
                <ShieldCheck className="w-4 h-4" />
                <span>6 Months</span>
              </div>
              <p className="text-[11px] text-slate-400">Written warranty on parts & labor</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs mb-0.5">
                <Wrench className="w-4 h-4" />
                <span>On-Site Fix</span>
              </div>
              <p className="text-[11px] text-slate-400">Done at your home or shop</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
              <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs mb-0.5">
                <Clock className="w-4 h-4" />
                <span>Same-Day</span>
              </div>
              <p className="text-[11px] text-slate-400">Rapid Gauteng dispatch</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs mb-0.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>R350 Credited</span>
              </div>
              <p className="text-[11px] text-slate-400">Call-out fee credited to repair</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-4 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs with Animated Indicator */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none bg-slate-100 p-1.5 rounded-xl border border-slate-200 relative">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors select-none ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="servicesActiveCatPill"
                      className="absolute inset-0 bg-blue-600 rounded-lg shadow-xs"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search fault, part or brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => {
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -12 }}
                  transition={{ duration: 0.26, delay: idx * 0.04 }}
                  className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-6 sm:p-8 transition-all shadow-sm hover:shadow-md relative overflow-hidden"
                >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Info */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                        {service.iconName === 'Refrigerator' && <Snowflake className="w-6 h-6" />}
                        {service.iconName === 'WashingMachine' && <Wrench className="w-6 h-6" />}
                        {service.iconName === 'Flame' && <Flame className="w-6 h-6" />}
                        {service.iconName === 'Tv' && <Tv className="w-6 h-6" />}
                        {service.iconName === 'Zap' && <Zap className="w-6 h-6" />}
                        {service.iconName === 'Snowflake' && <Snowflake className="w-6 h-6" />}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                            {service.title}
                          </h3>
                          {service.popular && (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-md">
                              Most Requested
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-blue-700 font-semibold">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Common Issues Checklist */}
                    <div>
                      <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Common Symptoms We Resolve On-Site:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.commonIssues.map((issue, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{issue}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Supported Brands */}
                    <div className="pt-1 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs text-slate-500 font-medium">Brands Serviced:</span>
                      {service.brands.map((brand, bIdx) => (
                        <span key={bIdx} className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md border border-slate-200 font-medium">
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Pricing & Direct Booking Box */}
                  <div className="lg:col-span-4 bg-blue-50/70 p-5 sm:p-6 rounded-xl border border-blue-200 flex flex-col justify-between h-full space-y-4">
                    <div>
                      <div className="text-xs font-medium text-slate-600 mb-1">Estimated Diagnostic & Labor:</div>
                      <div className="text-2xl font-extrabold text-blue-900 font-heading">
                        {service.priceRange}
                      </div>
                      <div className="text-xs text-emerald-700 font-semibold mt-1 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" />
                        <span>R350 Callout fee credited upon repair</span>
                      </div>
                    </div>

                    <div className="space-y-2 border-t border-blue-200/80 pt-3 text-xs text-slate-700">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Duration:</span>
                        <span className="font-semibold text-slate-800">{service.estTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Warranty:</span>
                        <span className="font-semibold text-amber-700">{service.warranty}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Parts Availability:</span>
                        <span className="text-blue-700 font-semibold">Stocked in Service Van</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col gap-2">
                      <button
                        onClick={() => onNavigate('book-appointment', 'push', { appliance: service.id })}
                        className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>Book Diagnostic Slot</span>
                      </button>

                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={`https://wa.me/27623510025?text=${encodeURIComponent(`Hi MR Gee, I need immediate assistance or booking for: ${service.title} in Gauteng.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 px-2.5 rounded-xl font-semibold text-[11px] bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>

                        <a
                          href={`mailto:Mrgeeappliancesthobela@gmail.com?subject=${encodeURIComponent(`Service Request: ${service.title}`)}&body=${encodeURIComponent(`Dear MR Gee,\n\nI would like to book or enquire about ${service.title}.\n\nMy Contact Number:\nMy Gauteng Suburb:\nAppliance Brand & Issue:\n`)}`}
                          className="py-2 px-2.5 rounded-xl font-semibold text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                        >
                          <Mail className="w-3.5 h-3.5 text-blue-600" />
                          <span>Email MR Gee</span>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4-Step Repair Journey */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
              Simple & Hassle-Free
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-heading">
              Our 4-Step Diagnostic & Repair Flow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 relative shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center mb-3">
                1
              </div>
              <h4 className="text-slate-900 font-bold text-sm mb-1">Book or Call</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choose a convenient morning, afternoon, or emergency slot online or via direct WhatsApp call.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 relative shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center mb-3">
                2
              </div>
              <h4 className="text-slate-900 font-bold text-sm mb-1">On-Site Diagnosis</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                MR Gee arrives with diagnostic meters to test electrical boards, gas lines, motors, and thermostats.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 relative shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center mb-3">
                3
              </div>
              <h4 className="text-slate-900 font-bold text-sm mb-1">Upfront Approval</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                You receive a clear, fixed quote. If you accept, the R350 callout fee is waived against labor.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 relative shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center mb-3">
                4
              </div>
              <h4 className="text-slate-900 font-bold text-sm mb-1">Repair & 6-Mo Warranty</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Repair completed on the spot using genuine parts, tested with you, and backed by a written invoice guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Support */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-600 mb-6">
            Certified Repair Expertise Across All Major Household Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {POPULAR_BRANDS.map((brand, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:border-blue-400 hover:text-blue-700 transition-colors shadow-xs"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
