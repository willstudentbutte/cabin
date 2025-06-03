'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import EventDetails from '@/components/EventDetails';
import SurvivalKit from '@/components/SurvivalKit';
import PromSection from '@/components/PromSection';
import VotingSection from '@/components/VotingSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EventDetails />
      <SurvivalKit />
      <PromSection />
      <VotingSection />
      <Footer />
    </main>
  );
} 