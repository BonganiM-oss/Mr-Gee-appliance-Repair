/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen, TransitionType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './screens/HomeScreen';
import { ServicesScreen } from './screens/ServicesScreen';
import { PricingScreen } from './screens/PricingScreen';
import { BookAppointmentScreen } from './screens/BookAppointmentScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [transitionType, setTransitionType] = useState<TransitionType>('none');
  const [screenState, setScreenState] = useState<any>(null);

  const handleNavigate = (nextScreen: Screen, transition: TransitionType = 'none', state?: any) => {
    if (nextScreen === currentScreen && !state) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setTransitionType(transition);
    if (state) {
      setScreenState(state);
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
    setCurrentScreen(nextScreen);
  };

  // Sync document title with current screen
  useEffect(() => {
    const titles: Record<Screen, string> = {
      'home': 'MR Gee Appliance Repair | Gauteng Expert Technicians',
      'services': 'MR Gee Appliance Repair - Services',
      'pricing-enquiry': 'MR Gee Appliance Repair - Pricing Enquiry',
      'book-appointment': 'MR Gee Appliance Repair - Book Appointment'
    };
    document.title = titles[currentScreen] || 'MR Gee Appliance Repair';
  }, [currentScreen]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      {/* Persistent App Header */}
      <Header currentScreen={currentScreen} onNavigate={handleNavigate} />

      {/* Screen container with animated page transitions */}
      <main className="flex-1 flex flex-col relative w-full">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 14, filter: 'blur(3px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col w-full"
          >
            {currentScreen === 'home' && (
              <HomeScreen onNavigate={handleNavigate} />
            )}

            {currentScreen === 'services' && (
              <ServicesScreen onNavigate={handleNavigate} />
            )}

            {currentScreen === 'pricing-enquiry' && (
              <PricingScreen onNavigate={handleNavigate} />
            )}

            {currentScreen === 'book-appointment' && (
              <BookAppointmentScreen onNavigate={handleNavigate} initialState={screenState} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent App Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
