"use client"

import { Hero } from '@/components/hero/hero';
import { Services } from '@/components/services/services';
import { Contact } from '@/components/contact/contact';
import { AppearOnScroll } from '@/components/appear-on-scroll/appear-on-scroll';
import { AboutUs } from '@/components/about-us/about-us';
import { References } from '@/components/about-us/references';
import { DevControls } from '@/components/dev/dev-controls';
import { useState } from 'react';
import { HeroMode } from '@/lib/types';
import { Particles } from '@/components/magicui/particles';

export default function Home() {
  const [heroMode, setHeroMode] = useState<HeroMode>("professional");

  return (
    <div className='flex h-full w-full flex-1 flex-col items-center justify-start'>
      <Hero
        heroMode={heroMode}
      />
      {process.env.NODE_ENV === 'development' && (
        <DevControls
          heroMode={heroMode}
          setHeroModeAction={setHeroMode}
        />
      )}

      <main className="w-full bg-primary relative">
        {heroMode === "playful" && (
          <div className="absolute top-0 h-64 to-primary w-full bg-linear-to-b from-[#525eaf] w-full" />
        )}
        <Particles
          className="absolute inset-0 z-0 w-full h-full"
          quantity={200}
          ease={100}
          color="#FFF"
          refresh
        />
        <AppearOnScroll>
          <Services />
        </AppearOnScroll>
        <AppearOnScroll>
          <AboutUs />
        </AppearOnScroll>
        <AppearOnScroll>
          <References />
        </AppearOnScroll>
        <AppearOnScroll>
          <Contact />
        </AppearOnScroll>
      </main>
    </div>
  );
}
