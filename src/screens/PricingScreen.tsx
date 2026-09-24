import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen, TransitionType } from '../types';
import { 
  Calculator, CheckCircle2, ShieldCheck, HelpCircle, Phone, 
  ArrowRight, FileText, Check, AlertTriangle, Send, Sparkles, MessageSquare, Mail 
} from 'lucide-react';
import { PRICING_TABLE, COVERAGE_AREAS } from '../data/repairData';
import { MrGeeLogo } from '../components/MrGeeLogo';
import pricingBg from '../assets/images/pricing_quote_bg_1790255630276.jpg';

interface PricingScreenProps {
  onNavigate: (screen: Screen, transition?: TransitionType, state?: any) => void;
}

const PRICING_PARTICLES = [
  { size: 4, left: 15, delay: 0.3, duration: 9, color: 'bg-amber-400' },
  { size: 5, left: 35, delay: 2.1, duration: 11.5, color: 'bg-blue-400' },
  { size: 3, left: 55, delay: 1.4, duration: 8, color: 'bg-cyan-300' },
  { size: 5, left: 72, delay: 3.6, duration: 10.5, color: 'bg-amber-300' },
  { size: 4, left: 88, delay: 1.0, duration: 9.5, color: 'bg-sky-400' },
];

export const PricingScreen: React.FC<PricingScreenProps> = ({ onNavigate }) => {
  // Calculator state
  const [appliance, setAppliance] = useState('fridge');
  const [issue, setIssue] = useState('cooling');
  const [area, setArea] = useState(COVERAGE_AREAS[0]);
  const [isSameDay, setIsSameDay] = useState(false);

  // Price guide category filter state
  const [priceCategory, setPriceCategory] = useState('All');
  const pricingCategories = ['All', 'Refrigeration', 'Laundry', 'Cooking', 'Electronics', 'Commercial'];

  const filteredPricingTable = PRICING_TABLE.filter((row) => {
    if (priceCategory === 'All') return true;
    return row.category.toLowerCase().includes(priceCategory.toLowerCase());
  });

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    phone: '',
    brand: '',
    applianceType: 'Fridge / Freezer',
    description: ''
  });

  const calculateEstimate = () => {
    let baseMin = 450;
    let baseMax = 950;
    let partsEst = 'R200 - R400';

    if (appliance === 'fridge') {
      if (issue === 'cooling') {
        baseMin = 550; baseMax = 1150; partsEst = 'R350 - R650 (Gas / Thermostat)';
      } else {
        baseMin = 450; baseMax = 850; partsEst = 'R150 - R350 (Fan / Sensor)';
      }
    } else if (appliance === 'washing-machine') {
      if (issue === 'spin-drain') {
        baseMin = 450; baseMax = 900; partsEst = 'R250 - R500 (Pump / Belt)';
      } else {
        baseMin = 650; baseMax = 1250; partsEst = 'R400 - R800 (Bearings / Seal)';
      }
    } else if (appliance === 'tv') {
      baseMin = 650; baseMax = 1400; partsEst = 'R400 - R900 (LED Strips)';
    } else if (appliance === 'stove') {
      baseMin = 400; baseMax = 800; partsEst = 'R250 - R450 (Element / Switch)';
    } else if (appliance === 'microwave') {
      baseMin = 350; baseMax = 650; partsEst = 'R200 - R400 (Magnetron / Fuse)';
    } else if (appliance === 'cold-room') {
      baseMin = 950; baseMax = 2200; partsEst = 'R600 - R1500 (Commercial valve/relay)';
    }

    const urgencyAdd = isSameDay ? 150 : 0;
    return {
      min: baseMin + urgencyAdd,
      max: baseMax + urgencyAdd,
      partsEst
    };
  };

  const est = calculateEstimate();

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Pricing & Quotes Hero Header with Animated Estimation Background */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800 overflow-hidden bg-slate-950">
        {/* Animated Background Image & Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Animated Ambient Glow Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.25, 1],
              opacity: [0.25, 0.5, 0.25],
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
            className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-amber-500/20 blur-3xl"
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
            className="absolute top-1/3 left-6 w-72 h-72 rounded-full bg-cyan-600/25 blur-3xl"
          />

          {/* Animated Zoom and Pan on Pricing & Quotes Background */}
          <motion.img 
            src={pricingBg} 
            alt="MR Gee Pricing & Quotes Diagnostic Desk" 
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

          {/* Floating Subtle Price / Spark Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {PRICING_PARTICLES.map((p, i) => (
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
                className={`absolute bottom-0 w-1.5 h-1.5 rounded-full ${p.color} blur-[0.5px] pointer-events-none shadow-sm shadow-amber-400`}
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

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/40 text-blue-200 text-xs font-semibold mb-4 backdrop-blur-md shadow-lg shadow-blue-950/50">
            <MrGeeLogo size="sm" />
            <span className="uppercase tracking-wider">Pricing & Quotes</span>
            <span className="text-blue-400">•</span>
            <span className="text-cyan-300">100% Upfront Pricing</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Transparent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              Pricing & Quotes
            </span>{' '}
            for Appliance Repairs
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            No nasty surprises or hidden charges. We believe in 100% pricing transparency before any screwdriver touches your appliance.
          </p>

          <div className="mt-8 max-w-xl mx-auto bg-slate-900/80 border border-blue-500/30 rounded-2xl p-5 shadow-xl backdrop-blur-md text-left flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0 text-blue-300">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-heading">
                R350 Call-Out Diagnostic Fee Guarantee
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Covers technician travel anywhere in Gauteng (Johannesburg, Pretoria, West Rand & East Rand) and thorough fault-finding. <strong className="text-emerald-400 font-semibold">If you proceed with the repair, this R350 is 100% credited against your final invoice!</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Price Estimator & Quote Request */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Estimator Tool */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">Interactive Repair Cost Calculator</h3>
                <p className="text-xs text-slate-500">Configure your appliance fault to calculate standard labor + parts estimate</p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Select Appliance */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Select Appliance Type:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'fridge', label: 'Fridge / Freezer' },
                    { id: 'washing-machine', label: 'Washing Machine' },
                    { id: 'tv', label: 'LED / Smart TV' },
                    { id: 'stove', label: 'Stove / Oven' },
                    { id: 'microwave', label: 'Microwave' },
                    { id: 'cold-room', label: 'Cold Room / Chiller' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setAppliance(item.id)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                        appliance === item.id
                          ? 'bg-blue-50 border-blue-600 text-blue-800 shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Issue Specifics */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Fault Category:
                </label>
                <select
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                >
                  <option value="cooling">Cooling / Heating Failure (Gas leak, element, compressor)</option>
                  <option value="spin-drain">Mechanical Spin / Drainage issue (Motor, pump, belt)</option>
                  <option value="power">Electrical Trip / No Power / Power Surge</option>
                  <option value="leak">Water or Refrigerant Leakage</option>
                  <option value="sound">Noisy Operation or Rattling</option>
                </select>
              </div>

              {/* Location Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Your Location in Gauteng:
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                >
                  {COVERAGE_AREAS.map((a, i) => (
                    <option key={i} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              {/* Urgency checkbox */}
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <input
                  type="checkbox"
                  id="sameday"
                  checked={isSameDay}
                  onChange={(e) => setIsSameDay(e.target.checked)}
                  className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
                />
                <label htmlFor="sameday" className="text-xs text-slate-700 cursor-pointer flex-1">
                  <strong>Need Urgent Same-Day / Weekend Emergency Dispatch</strong> (+R150 priority fee)
                </label>
              </div>

              {/* Estimate Calculation Result Box with smooth animation */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`${appliance}-${issue}-${isSameDay}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="bg-blue-50/80 p-5 rounded-2xl border border-blue-200 space-y-3 mt-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-200/80 pb-3">
                    <div>
                      <span className="text-xs text-slate-600 font-medium">Estimated Total Repair Range:</span>
                      <div className="text-2xl sm:text-3xl font-extrabold text-blue-900 font-heading">
                        R{est.min} – R{est.max}
                      </div>
                    </div>
                    <div className="text-xs text-slate-600 sm:text-right">
                      <span className="block text-emerald-700 font-semibold">Includes Labor & Callout Credit</span>
                      <span>Common parts: {est.partsEst}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600" />
                      <span>6 Months Warranty Included</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600" />
                      <span>Card machine on-site / Instant EFT</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('book-appointment', 'push', {
                      appliance,
                      suburb: area,
                      isUrgent: isSameDay
                    })}
                    className="w-full mt-3 py-3 px-4 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Book Appointment with this Estimate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Custom Quote Enquiry Form */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 font-heading mb-1">
              Request a Fast Quote Callback
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Not sure about the fault? Send us your appliance details and MR Gee will contact you via phone, WhatsApp, or email (<a href="mailto:Mrgeeappliancesthobela@gmail.com" className="text-blue-600 hover:underline">Mrgeeappliancesthobela@gmail.com</a>).
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-slate-900 font-bold text-base">Quote Request Received!</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you, {quoteFormData.name || 'valued customer'}. MR Gee has received your request and will call or WhatsApp {quoteFormData.phone || 'you'} within 30 minutes. A dispatch alert has also been sent to <strong>Mrgeeappliancesthobela@gmail.com</strong>.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/27623510025?text=${encodeURIComponent(`Hi MR Gee, I submitted a quote enquiry for my ${appliance} in ${area}. Contact: ${quoteFormData.phone} / ${quoteFormData.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Confirm via WhatsApp with MR Gee</span>
                  </a>
                  <a
                    href={`mailto:Mrgeeappliancesthobela@gmail.com?subject=${encodeURIComponent(`Quote Request: ${quoteFormData.name} - ${appliance}`)}&body=${encodeURIComponent(`Name: ${quoteFormData.name}\nPhone: ${quoteFormData.phone}\nAppliance: ${appliance}\nIssue: ${issue}\nArea: ${area}\nNotes: ${quoteFormData.description}`)}`}
                    className="w-full py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>Send Copy to Mrgeeappliancesthobela@gmail.com</span>
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs text-blue-700 font-semibold hover:underline block mx-auto"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sipho / Anna"
                    value={quoteFormData.name}
                    onChange={(e) => setQuoteFormData({ ...quoteFormData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 078 123 4567"
                    value={quoteFormData.phone}
                    onChange={(e) => setQuoteFormData({ ...quoteFormData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Appliance</label>
                    <select
                      value={quoteFormData.applianceType}
                      onChange={(e) => setQuoteFormData({ ...quoteFormData, applianceType: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    >
                      <option>Fridge / Freezer</option>
                      <option>Washing Machine</option>
                      <option>TV (LED/Smart)</option>
                      <option>Stove / Oven</option>
                      <option>Microwave</option>
                      <option>Cold Room</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Brand</label>
                    <input
                      type="text"
                      placeholder="e.g. Defy, LG, Samsung"
                      value={quoteFormData.brand}
                      onChange={(e) => setQuoteFormData({ ...quoteFormData, brand: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Describe the problem</label>
                  <textarea
                    rows={3}
                    placeholder="What is the appliance doing or not doing? (e.g. fridge clicking, machine won't drain)"
                    value={quoteFormData.description}
                    onChange={(e) => setQuoteFormData({ ...quoteFormData, description: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Instant Callback</span>
                </button>
              </form>
            )}

            <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Prefer immediate voice chat?</span>
              <a
                href="https://wa.me/27623510025?text=Hi%20MR%20Gee,%20I%20would%20like%20a%20quote%20for%20my%20appliance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] font-semibold flex items-center gap-1 hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp MR Gee</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Typical Price Guide Table */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Standard South African Price Guide
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Based on common repair jobs across Gauteng households and commercial sites. All costs include diagnostic testing and our 6-month warranty.
            </p>
          </div>

          {/* Category Filter Tabs for Pricing Guide */}
          <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-3 mb-8 scrollbar-none bg-slate-100 p-1.5 rounded-xl border border-slate-200 max-w-2xl mx-auto relative">
            {pricingCategories.map((cat) => {
              const isActive = priceCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setPriceCategory(cat)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors select-none ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="pricingActiveCatPill"
                      className="absolute inset-0 bg-blue-600 rounded-lg shadow-xs"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-xs sm:text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-600 uppercase text-[11px] tracking-wider border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Category</th>
                  <th className="py-3.5 px-4 sm:px-6">Repair Description</th>
                  <th className="py-3.5 px-4 sm:px-6">Approximate Range</th>
                  <th className="py-3.5 px-4 sm:px-6">Typical Turnaround</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <AnimatePresence mode="popLayout">
                  {filteredPricingTable.map((row, idx) => (
                    <motion.tr 
                      key={`${row.category}-${row.service}`}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, delay: idx * 0.02 }}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-blue-700 whitespace-nowrap">
                        {row.category}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-900 font-medium">
                        {row.service}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-emerald-700 font-bold whitespace-nowrap">
                        {row.cost}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-500 whitespace-nowrap">
                        {row.time}
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Frequently Asked Questions About Our Pricing
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs">
              <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                How does the R350 call-out fee credit work?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                When MR Gee arrives at your home or business, he inspects the appliance and gives you an exact quote. If you accept the repair quote, the R350 is deducted from the total labor bill. You only pay for the completed repair!
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs">
              <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                What payment methods are accepted on site?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                We accept Speedpoint Card Swipe/Tap (Visa, Mastercard), Instant Bank EFT (Capitec Pay, FNB Pay, Standard Bank, Nedbank), and Cash upon satisfied completion.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs">
              <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                What if the appliance cannot be fixed or is not cost-effective?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                Honesty is MR Gee's trademark. If an appliance is beyond economical repair (for instance, internal refrigerant leaks inside the cabinet insulation), he will advise you honestly so you don't waste money. In that case, only the diagnostic fee applies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
