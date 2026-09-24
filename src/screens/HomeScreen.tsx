import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen, TransitionType } from '../types';
import { 
  Wrench, ShieldCheck, Clock, CheckCircle2, Star, ArrowRight, 
  Sparkles, Phone, MessageSquare, Zap, Snowflake, Tv, Flame,
  Check, ChevronRight, HelpCircle, AlertTriangle, MapPin, Mail
} from 'lucide-react';
import { SERVICES_DATA, TESTIMONIALS, COVERAGE_AREAS } from '../data/repairData';
import { MrGeeLogo } from '../components/MrGeeLogo';
import heroTechnicianBg from '../assets/images/hero_technician_bg_1790254131062.jpg';

interface HomeScreenProps {
  onNavigate: (screen: Screen, transition?: TransitionType, state?: any) => void;
}

const HERO_PARTICLES = [
  { size: 4, left: 10, delay: 0, duration: 8.5, color: 'bg-cyan-400' },
  { size: 5, left: 24, delay: 2.2, duration: 11, color: 'bg-blue-400' },
  { size: 3, left: 42, delay: 1.0, duration: 7.5, color: 'bg-sky-300' },
  { size: 6, left: 58, delay: 3.5, duration: 12, color: 'bg-amber-300' },
  { size: 4, left: 74, delay: 0.5, duration: 9.5, color: 'bg-cyan-300' },
  { size: 5, left: 86, delay: 4.0, duration: 11.5, color: 'bg-blue-300' },
  { size: 3, left: 93, delay: 1.8, duration: 8.8, color: 'bg-sky-400' },
];

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  // Quick estimator state
  const [selectedAppliance, setSelectedAppliance] = useState('fridge');
  const [selectedIssue, setSelectedIssue] = useState('not-cooling');
  const [selectedArea, setSelectedArea] = useState(COVERAGE_AREAS[0]);

  // Category filter state for services grid
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const homeCategories = ['All', 'Refrigeration', 'Laundry', 'Cooking', 'Electronics'];

  const displayedServices = SERVICES_DATA.filter((service) => {
    if (selectedCategory === 'All') return true;
    return service.category === selectedCategory;
  }).slice(0, 6);

  const getEstimatedCost = () => {
    switch (selectedAppliance) {
      case 'fridge':
        return { range: 'R550 – R1,150', time: '1 - 2 hrs', parts: 'Gas / Defrost thermostat' };
      case 'washing-machine':
        return { range: 'R450 – R980', time: '45 - 90 mins', parts: 'Pump / Belt / Brushes' };
      case 'tv':
        return { range: 'R650 – R1,400', time: 'Same day', parts: 'LED backlight strips / Power IC' };
      case 'microwave':
        return { range: 'R350 – R650', time: '30 - 45 mins', parts: 'Magnetron / Diode' };
      case 'stove':
        return { range: 'R450 – R850', time: '1 hr', parts: 'Bake element / Plate switch' };
      default:
        return { range: 'R450 – R950', time: '1 - 2 hrs', parts: 'Standard OEM components' };
    }
  };

  const estimate = getEstimatedCost();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section with Animated Technician Background matching flyer */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200 overflow-hidden bg-slate-950">
        {/* Background Image Layer with smooth atmospheric movement & glow animations */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Animated Ambient Glow Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.55, 0.3],
              x: [0, 35, 0],
              y: [0, -25, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-20 right-1/4 w-96 h-96 rounded-full bg-blue-600/30 blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.1, 0.9, 1.1],
              opacity: [0.25, 0.5, 0.25],
              x: [0, -30, 0],
              y: [0, 30, 0]
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

          {/* Animated Zoom and Pan on the Flyer Technician Image */}
          <motion.img 
            src={heroTechnicianBg} 
            alt="MR Gee Expert Technician Background" 
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
            {HERO_PARTICLES.map((p, i) => (
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
                  ease: "linear" 
                }}
                className={`absolute rounded-full blur-[0.5px] shadow-sm ${p.color}`}
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  left: `${p.left}%`,
                }}
              />
            ))}
          </div>

          {/* Gradient readability overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/75 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-slate-950/70" />

          {/* Gentle light sweep shimmer */}
          <motion.div 
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent skew-x-12"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge matching flyer logo styling */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-900/80 border border-blue-400/40 text-blue-100 text-xs sm:text-sm font-semibold shadow-inner backdrop-blur-md">
                <MrGeeLogo size="sm" />
                <span className="text-white font-bold tracking-wide">MR GEE APPLIANCE REPAIR</span>
                <span className="text-blue-300">•</span>
                <span className="text-amber-400 font-extrabold uppercase tracking-wider text-[11px]">Fixing What Matters in Your Home!</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-heading drop-shadow-sm">
                Fixing What Matters In Your Home Across{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
                  Gauteng
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-sm">
                Fast, honest, and certified repairs for washing machines, fridges, TVs, microwaves, stoves, and more. Mobile technicians ready across Kagiso, Johannesburg, Pretoria, West Rand & East Rand with a 6-month written warranty.
              </p>

              {/* Feature Pill Tags matching the flyer list */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                {[
                  'TVs',
                  'Washing Machines',
                  'Fridges',
                  'Microwaves',
                  'Stoves & Ovens',
                  'General Appliances'
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-100 text-xs font-semibold backdrop-blur-xs shadow-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>

              {/* CTA Buttons: Contains specified xpaths */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                {/* xpath: //main//a[contains(., 'Book a Service')] */}
                <a
                  href="#book"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('book-appointment', 'push');
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-base text-white bg-blue-600 hover:bg-blue-500 shadow-md border border-blue-500 transition-colors duration-150 flex items-center justify-center gap-2 group"
                >
                  <Wrench className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
                  <span>Book a Service</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* xpath: //main//a[contains(., 'Get Free Price Estimate')] */}
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('pricing-enquiry', 'push');
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-base text-slate-100 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 shadow-sm transition-colors duration-150 flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <span>Get Free Price Estimate</span>
                </a>
              </div>

              {/* Flyer 4 Highlights: Fast Service, Quality Repairs, Affordable Prices, Experienced Technician */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left max-w-xl mx-auto lg:mx-0">
                <div className="bg-slate-900/90 border border-blue-500/30 p-3 rounded-xl shadow-xs backdrop-blur-sm">
                  <div className="text-cyan-400 font-extrabold text-sm sm:text-base font-heading flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>Fast Service</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5">Same-Day Priority</div>
                </div>

                <div className="bg-slate-900/90 border border-blue-500/30 p-3 rounded-xl shadow-xs backdrop-blur-sm">
                  <div className="text-cyan-400 font-extrabold text-sm sm:text-base font-heading flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Quality Repairs</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5">6 Months Warranty</div>
                </div>

                <div className="bg-slate-900/90 border border-blue-500/30 p-3 rounded-xl shadow-xs backdrop-blur-sm">
                  <div className="text-amber-400 font-extrabold text-sm sm:text-base font-heading flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Affordable</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5">R350 Credited on repair</div>
                </div>

                <div className="bg-slate-900/90 border border-blue-500/30 p-3 rounded-xl shadow-xs backdrop-blur-sm">
                  <div className="text-cyan-400 font-extrabold text-sm sm:text-base font-heading flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>Experienced</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5">Master Technician</div>
                </div>
              </div>
            </div>

            {/* Right column: Interactive Quick Cost Estimator Widget */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-md relative">
                <div className="absolute -top-3 right-6 bg-blue-700 text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Instant Estimate
                </div>

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">Quick Repair Estimator</h3>
                    <p className="text-xs text-slate-500">Get an upfront price range for your repair</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Select Appliance */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      1. What needs fixing?
                    </label>
                    <select
                      value={selectedAppliance}
                      onChange={(e) => setSelectedAppliance(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    >
                      <option value="fridge">Refrigerator / Deep Freezer</option>
                      <option value="washing-machine">Washing Machine / Dryer</option>
                      <option value="tv">Smart TV / LED Television</option>
                      <option value="stove">Oven / Stove / Ceramic Hob</option>
                      <option value="microwave">Microwave Oven</option>
                    </select>
                  </div>

                  {/* Select Issue */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      2. Common Symptom
                    </label>
                    <select
                      value={selectedIssue}
                      onChange={(e) => setSelectedIssue(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    >
                      <option value="not-cooling">Not cooling / Not heating</option>
                      <option value="no-power">No power / Tripping electricity</option>
                      <option value="strange-noise">Loud banging or squeaking noise</option>
                      <option value="water-leak">Water leaking on floor</option>
                      <option value="black-screen">Sound on, but black dark screen (TV)</option>
                    </select>
                  </div>

                  {/* Select Area */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      3. Your Gauteng Suburb / Area
                    </label>
                    <select
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    >
                      {COVERAGE_AREAS.map((area, idx) => (
                        <option key={idx} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>

                  {/* Dynamic Calculation Box with smooth animation */}
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={`${selectedAppliance}-${selectedIssue}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="bg-blue-50/80 p-4 rounded-xl border border-blue-200 space-y-2 mt-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-600">Estimated Repair Cost:</span>
                        <span className="text-xl font-extrabold text-blue-800 font-heading">{estimate.range}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-600">
                        <span>Typical On-Site Duration:</span>
                        <span className="text-slate-800 font-semibold">{estimate.time}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-600">
                        <span>Call-out fee (R350):</span>
                        <span className="text-emerald-700 font-bold">100% Credited if repaired</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Required xpath: //main//a[@id='estimator-cta'] */}
                  <a
                    href="#book-appointment"
                    id="estimator-cta"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('book-appointment', 'push', {
                        appliance: selectedAppliance,
                        suburb: selectedArea
                      });
                    }}
                    className="w-full mt-2 py-3 px-4 rounded-xl font-bold text-sm text-center text-white bg-blue-600 hover:bg-blue-700 shadow-sm flex items-center justify-center gap-2 transition-colors duration-150 block"
                  >
                    <span>Book Repair at Estimated Price</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <p className="text-[11px] text-center text-slate-500">
                    No obligations. Final quote confirmed before technician starts work.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2">
                <Wrench className="w-3.5 h-3.5" />
                Comprehensive Technical Services
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                What Appliances Do We Fix?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                We service all leading brands in South Africa with genuine spare parts and same-day diagnostics.
              </p>
            </div>

            {/* xpath: //main//a[@data-path='services' and contains(., 'Explore All')] */}
            <a
              href="#services"
              data-path="services"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('services', 'push');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 hover:text-blue-700 text-sm font-semibold transition-colors group shrink-0"
            >
              <span>Explore All Services & Repairs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Category Tabs with Animated Indicator */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
            {homeCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-150 whitespace-nowrap select-none ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/70 border border-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="homeCategoryPill"
                      className="absolute inset-0 bg-blue-600 rounded-xl shadow-xs"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat === 'All' ? 'All Appliances' : cat}</span>
                </button>
              );
            })}
          </div>

          {/* Cards Grid with Category Transition Animations */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {displayedServices.map((service, idx) => {
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.25, delay: idx * 0.04 }}
                    className="bg-white hover:border-blue-300 border border-slate-200 rounded-2xl p-6 transition-all duration-200 hover:shadow-md group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 group-hover:scale-105 transition-transform">
                          {service.iconName === 'Refrigerator' && <Snowflake className="w-6 h-6" />}
                          {service.iconName === 'WashingMachine' && <Wrench className="w-6 h-6" />}
                          {service.iconName === 'Flame' && <Flame className="w-6 h-6" />}
                          {service.iconName === 'Tv' && <Tv className="w-6 h-6" />}
                          {service.iconName === 'Zap' && <Zap className="w-6 h-6" />}
                          {service.iconName === 'Snowflake' && <Snowflake className="w-6 h-6" />}
                        </div>

                        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">
                          {service.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading group-hover:text-blue-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                        {service.description}
                      </p>

                      <div className="space-y-1.5 mb-5 border-t border-slate-100 pt-4">
                        <div className="text-xs font-semibold text-slate-700 mb-1">Common fixes:</div>
                        {service.commonIssues.slice(0, 2).map((issue, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span className="truncate">{issue}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[11px] text-slate-500 uppercase block font-medium">Starting from</span>
                          <span className="text-sm font-bold text-slate-900">{service.priceRange.split(' ')[0]}</span>
                        </div>

                        <button
                          onClick={() => onNavigate('book-appointment', 'push', { appliance: service.id })}
                          className="text-xs font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-1 group-hover:underline"
                        >
                          <span>Book Diagnostic</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 pt-1">
                        <a
                          href={`https://wa.me/27623510025?text=${encodeURIComponent(`Hi MR Gee, I need a repair for ${service.title} in Gauteng.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1.5 px-2 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#1a8a43] text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>WhatsApp</span>
                        </a>
                        <a
                          href={`mailto:Mrgeeappliancesthobela@gmail.com?subject=${encodeURIComponent(`Service Enquiry: ${service.title}`)}&body=${encodeURIComponent(`Dear MR Gee,\n\nI need service for ${service.title}.\nMy Contact Number:\nMy Suburb:\n`)}`}
                          className="py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors"
                        >
                          <Mail className="w-3 h-3 text-blue-600" />
                          <span>Email</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Why Choose MR Gee Appliance Repair */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Shield Banner matching the flyer */}
          <div className="mb-14 max-w-4xl mx-auto bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-lg border border-blue-400/30 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
            <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-2xl bg-gradient-to-b from-amber-400 to-amber-600 p-1 shadow-lg flex items-center justify-center">
              <div className="w-full h-full rounded-xl bg-blue-950 flex flex-col items-center justify-center text-center p-2 border border-amber-300">
                <div className="flex items-center gap-0.5 text-amber-400 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-tighter leading-none">WE CAN</span>
                <span className="text-sm font-extrabold text-white uppercase tracking-tight leading-none mt-0.5">TRUST</span>
                <span className="text-[8px] font-semibold text-cyan-300 uppercase tracking-tighter mt-1">PROFESSIONAL</span>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-300">
                Kagiso & All Gauteng Coverage
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading tracking-tight text-white">
                "Fixing What Matters in Your Home!"
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-xl">
                Call or WhatsApp <strong>062 351 0025</strong> or email <strong>Mrgeeappliancesthobela@gmail.com</strong>. We dispatch fully equipped mobile vans directly to your doorstep with guaranteed workmanship and genuine manufacturer parts.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2 w-full md:w-auto">
              <a
                href="https://wa.me/27623510025?text=Hi%20MR%20Gee,%20I%20would%20like%20to%20request%20an%20appliance%20repair"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp 062 351 0025</span>
              </a>
              <a
                href="mailto:Mrgeeappliancesthobela@gmail.com"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 flex items-center justify-center gap-2 backdrop-blur-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-300" />
                <span>Email MR Gee</span>
              </a>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
              Gauteng's Trusted Appliance Specialist
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Why Gauteng Residents & Businesses Count On MR Gee
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              We understand the stress when a fridge spoils groceries or a washing machine floods. Here is our customer-first commitment:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">6 Months Warranty</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every repair is backed by a 6-month written warranty on both installed replacement components and labor.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Same-Day Priority</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mobile teams operating across Johannesburg, Pretoria, West Rand & East Rand ensure fast response times within 1-2 hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-amber-600 mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">No Hidden Fees</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear quotes provided upfront. If you accept the repair quote, the R350 call-out inspection fee is 100% credited.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-emerald-600 mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Genuine OEM Parts</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We only fit factory-certified parts for Defy, Samsung, LG, Hisense, Whirlpool, and Bosch appliances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Real Reviews from Satisfied Customers Across Gauteng
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Over 4,800 appliances successfully repaired across Johannesburg, Pretoria, West Rand & East Rand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic mb-4 leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <div className="font-semibold text-slate-900 text-xs sm:text-sm">{t.name}</div>
                  <div className="text-xs text-blue-700 font-medium flex items-center justify-between">
                    <span>{t.location}</span>
                    <span className="text-slate-500">{t.date}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 truncate">
                    Fixed: {t.appliance}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Call-out CTA Banner */}
      <section className="py-12 bg-blue-900 text-white border-t border-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Appliance emergency anywhere in Gauteng?
            </h3>
            <p className="text-sm text-blue-100">
              Speak directly with MR Gee for immediate troubleshooting advice or same-day dispatch.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+27623510025"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold text-sm shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              <span>Call 062 351 0025</span>
            </a>
            <a
              href="https://wa.me/27623510025?text=Hi%20MR%20Gee,%20I%20need%20appliance%20repair%20in%20Gauteng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
