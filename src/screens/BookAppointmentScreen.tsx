import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Screen, TransitionType, BookingFormData } from '../types';
import { 
  Calendar, Clock, MapPin, User, Phone, CheckCircle2, 
  Wrench, ShieldCheck, AlertCircle, ArrowRight, MessageSquare, 
  FileText, Check, Sparkles, Mail 
} from 'lucide-react';
import { COVERAGE_AREAS, POPULAR_BRANDS } from '../data/repairData';
import { MrGeeLogo } from '../components/MrGeeLogo';
import bookingBg from '../assets/images/booking_appointment_bg_1790255603679.jpg';

interface BookAppointmentScreenProps {
  onNavigate: (screen: Screen, transition?: TransitionType, state?: any) => void;
  initialState?: Partial<BookingFormData>;
}

const BOOKING_PARTICLES = [
  { size: 4, left: 14, delay: 0.2, duration: 8.5, color: 'bg-emerald-400' },
  { size: 5, left: 32, delay: 2.0, duration: 10.5, color: 'bg-blue-400' },
  { size: 3, left: 52, delay: 1.5, duration: 7.8, color: 'bg-cyan-300' },
  { size: 6, left: 68, delay: 3.2, duration: 11.2, color: 'bg-teal-300' },
  { size: 4, left: 84, delay: 0.9, duration: 9.0, color: 'bg-sky-300' },
];

export const BookAppointmentScreen: React.FC<BookAppointmentScreenProps> = ({ 
  onNavigate, 
  initialState 
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    appliance: initialState?.appliance || 'Fridge / Freezer (Double Door / Side-by-Side)',
    brand: initialState?.brand || 'Defy',
    model: '',
    issueDescription: '',
    symptoms: [],
    serviceDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: 'Morning (08:00 – 12:00)',
    isUrgent: initialState?.isUrgent || false,
    fullName: '',
    phone: '',
    email: '',
    streetAddress: '',
    suburb: initialState?.suburb || COVERAGE_AREAS[0],
    notes: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  const commonSymptomList = [
    'Not turning on / No power',
    'Tripping DB main breaker',
    'Not cooling or freezing',
    'Water pooling or leaking',
    'Loud banging or squeaking',
    'Not spinning or draining',
    'Error code on digital screen',
    'Gas smell or clicking'
  ];

  const toggleSymptom = (sym: string) => {
    if (formData.symptoms.includes(sym)) {
      setFormData({
        ...formData,
        symptoms: formData.symptoms.filter((s) => s !== sym)
      });
    } else {
      setFormData({
        ...formData,
        symptoms: [...formData.symptoms, sym]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `MRG-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    setBookingReference(refCode);
    setBookingConfirmed(true);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Book Appointment Hero Header with Animated Scheduling Background */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800 overflow-hidden bg-slate-950">
        {/* Animated Background Image & Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Animated Ambient Glow Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.5, 0.25],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-16 right-1/4 w-96 h-96 rounded-full bg-blue-600/30 blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.1, 0.95, 1.1],
              opacity: [0.2, 0.45, 0.2],
              x: [0, -20, 0],
              y: [0, 20, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [0.95, 1.15, 0.95],
              opacity: [0.15, 0.35, 0.15]
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 left-6 w-72 h-72 rounded-full bg-cyan-600/25 blur-3xl"
          />

          {/* Animated Zoom and Pan on Booking Appointment Background */}
          <motion.img 
            src={bookingBg} 
            alt="MR Gee Book Appointment Technician Dispatch" 
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

          {/* Floating Subtle Scheduling Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {BOOKING_PARTICLES.map((p, i) => (
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
                className={`absolute bottom-0 w-1.5 h-1.5 rounded-full ${p.color} blur-[0.5px] pointer-events-none shadow-sm shadow-emerald-400`}
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

        {/* Header content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/40 text-blue-200 text-xs font-semibold mb-4 backdrop-blur-md shadow-lg shadow-blue-950/50">
            <MrGeeLogo size="sm" />
            <span className="uppercase tracking-wider">Book Appointment</span>
            <span className="text-blue-400">•</span>
            <span className="text-cyan-300">Fast Gauteng Dispatch</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Schedule an{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              Appliance Diagnostic
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Book a trusted repair technician to your home or shop in Kagiso, Johannesburg, Pretoria, West Rand & East Rand. R350 call-out fee is 100% credited towards the repair upon quote approval.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 backdrop-blur-md shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Same-day slots available
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 backdrop-blur-md shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              6-month warranty included
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 backdrop-blur-md shadow-sm">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Prompt on-time arrival
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {bookingConfirmed ? (
          /* Confirmation Success Card */
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
              <Check className="w-10 h-10 stroke-[3]" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Booking Registered Successfully
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-1">
                Your Appointment is Confirmed!
              </h2>
              <div className="mt-3 inline-block bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono text-blue-800">
                Reference Code: <span className="font-bold text-slate-900">{bookingReference}</span>
              </div>
            </div>

            <div className="max-w-xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-500">Customer Name:</span>
                <span className="text-slate-900 font-semibold">{formData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-500">Contact Number:</span>
                <span className="text-slate-900 font-semibold">{formData.phone}</span>
              </div>
              {formData.email && (
                <div className="flex justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-slate-500">Customer Email:</span>
                  <span className="text-slate-900 font-semibold">{formData.email}</span>
                </div>
              )}
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-500">Appliance:</span>
                <span className="text-blue-700 font-semibold">{formData.brand} - {formData.appliance}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-500">Appointment Date & Slot:</span>
                <span className="text-slate-900 font-semibold">{formData.serviceDate} ({formData.timeSlot})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service Address:</span>
                <span className="text-slate-800 font-medium text-right">{formData.streetAddress}, {formData.suburb}</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 max-w-xl mx-auto space-y-1 text-left">
              <p className="font-semibold flex items-center gap-1.5 text-blue-950">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Owner Notification Alert Generated:</span>
              </p>
              <p className="text-slate-700">
                MR Gee has received a dispatch alert for your service booking from phone <strong>{formData.phone}</strong>{formData.email ? ` / email ${formData.email}` : ''}.
              </p>
              <p className="text-slate-700">
                ⚡ MR Gee will contact you via WhatsApp or call 30 minutes prior to arrival to confirm entry and gate access.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/27623510025?text=${encodeURIComponent(`Hi MR Gee, I just booked appointment ${bookingReference} for my ${formData.brand} ${formData.appliance} on ${formData.serviceDate} (${formData.timeSlot}). Customer: ${formData.fullName} - Phone: ${formData.phone}${formData.email ? ` - Email: ${formData.email}` : ''} at ${formData.streetAddress}, ${formData.suburb}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp With MR Gee</span>
              </a>

              <a
                href={`mailto:Mrgeeappliancesthobela@gmail.com?subject=${encodeURIComponent(`New Booking: ${bookingReference} - ${formData.fullName} (${formData.appliance})`)}&body=${encodeURIComponent(`Dear MR Gee,\n\nA new appliance service has been booked:\n\nReference: ${bookingReference}\nCustomer: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'Not provided'}\nAppliance: ${formData.brand} - ${formData.appliance}\nModel: ${formData.model || 'N/A'}\nDate & Slot: ${formData.serviceDate} (${formData.timeSlot})\nAddress: ${formData.streetAddress}, ${formData.suburb}\nNotes / Access: ${formData.notes || 'None'}\n\nPlease confirm dispatch.`)}`}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send Booking to Email</span>
              </a>

              <button
                onClick={() => {
                  setBookingConfirmed(false);
                  onNavigate('home', 'push');
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold text-sm shadow-xs transition-colors"
              >
                Return Home
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Section Booking Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Form (8 Cols) */}
            <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              
              {/* Section 1: Appliance & Fault */}
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center">
                    1
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    Appliance & Fault Information
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Appliance Type *
                      </label>
                      <select
                        required
                        value={formData.appliance}
                        onChange={(e) => setFormData({ ...formData, appliance: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                      >
                        <option>Fridge / Freezer (Double Door / Side-by-Side)</option>
                        <option>Washing Machine (Front Loader)</option>
                        <option>Washing Machine (Top Loader)</option>
                        <option>Tumble Dryer</option>
                        <option>LED / QLED / Smart TV</option>
                        <option>Thermo-fan Oven / Stove / Hob</option>
                        <option>Microwave Oven</option>
                        <option>Commercial Cold Room / Chiller</option>
                        <option>Dishwasher</option>
                        <option>Other Domestic Appliance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Brand *
                      </label>
                      <select
                        required
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                      >
                        {POPULAR_BRANDS.map((brand, idx) => (
                          <option key={idx} value={brand}>{brand}</option>
                        ))}
                        <option value="Other">Other Brand</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Model / Serial Number (Optional if known)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Defy DAD238 or Samsung WW80TA"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Common symptoms quick tags */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Select Symptoms that apply:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {commonSymptomList.map((sym, idx) => {
                        const isSelected = formData.symptoms.includes(sym);
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => toggleSymptom(sym)}
                            className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                              isSelected
                                ? 'bg-blue-50 border-blue-600 text-blue-800 font-medium'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                            }`}
                          >
                            {sym}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Problem Details / Description
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Describe anything helpful (e.g. started making loud buzzing after power came back on)"
                      value={formData.issueDescription}
                      onChange={(e) => setFormData({ ...formData, issueDescription: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Date & Preferred Time */}
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center">
                    2
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    Preferred Date & Time Window
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.serviceDate}
                      onChange={(e) => setFormData({ ...formData, serviceDate: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Time Slot *
                    </label>
                    <select
                      required
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    >
                      <option>Morning (08:00 – 12:00)</option>
                      <option>Afternoon (12:00 – 16:00)</option>
                      <option>Late Afternoon (16:00 – 18:30)</option>
                      <option>Urgent / Emergency First Available Slot</option>
                    </select>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                  <input
                    type="checkbox"
                    id="urgentCheck"
                    checked={formData.isUrgent}
                    onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                    className="w-4 h-4 accent-amber-600 rounded cursor-pointer"
                  />
                  <label htmlFor="urgentCheck" className="cursor-pointer">
                    <strong>Priority Same-Day Urgent Callout</strong> (Fridge contents spoiling or commercial breakdown)
                  </label>
                </div>
              </div>

              {/* Section 3: Location & Contact */}
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center">
                    3
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    Service Address & Contact Details
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lerato Ndlovu"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 062 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Email Address (For Booking Confirmation & Invoice)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      A copy of your booking and diagnostic dispatch alert is routed to MR Gee at <span className="font-semibold text-blue-700">Mrgeeappliancesthobela@gmail.com</span>.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Street Address / House No. *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 1422 Moshoeshoe St / Stand 408"
                        value={formData.streetAddress}
                        onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Gauteng Suburb / Area *
                      </label>
                      <select
                        required
                        value={formData.suburb}
                        onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                      >
                        {COVERAGE_AREAS.map((area, idx) => (
                          <option key={idx} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Gate code / Complex name / Directions (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Complex / Street name, gate code, security buzzer"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl font-bold text-base text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors flex items-center justify-center gap-2 transform active:scale-[0.99]"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Confirm & Book Diagnostic Appointment</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  R350 Credited upon repair
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  6 Months Warranty
                </span>
              </div>
            </form>

            {/* Right Side: Trust & Direct Help (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Direct Call Card */}
              <div className="bg-blue-50/70 border border-blue-200 rounded-3xl p-6 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg font-heading">
                    Prefer Booking by Phone?
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Speak directly with MR Gee to describe the noise or symptom over the phone or via email.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href="tel:+27623510025"
                    className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors block text-center shadow-xs"
                  >
                    <Phone className="w-4 h-4" />
                    <span>062 351 0025</span>
                  </a>

                  <a
                    href="https://wa.me/27623510025?text=Hi%20MR%20Gee,%20I%20would%20like%20to%20book%20a%20technician"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors block text-center shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Direct</span>
                  </a>

                  <a
                    href="mailto:Mrgeeappliancesthobela@gmail.com"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs flex items-center justify-center gap-2 transition-colors border border-slate-200"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>Mrgeeappliancesthobela@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Guarantees list */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Our Service Promise
                </h4>
                
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>No surprise quotes:</strong> Upfront diagnostic price before work commences.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>6 Months Warranty:</strong> We guarantee both replacement components and workmanship.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Payment convenience:</strong> Card machine on van, Instant EFT, or Cash upon job completion.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </section>
    </main>
  );
};
