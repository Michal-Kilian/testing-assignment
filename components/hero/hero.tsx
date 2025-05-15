'use client';

import { HeroTitle } from '@/components/hero/hero-title';
import { CallToAction } from '@/components/hero/call-to-action';
import { HeroAnimation } from '@/components/hero/hero-animation';
import { cn } from '@/lib/utils';
import { HeroMode } from '@/lib/types';
import { HeroVideoPlayer } from '@/components/hero/hero-video-player';

interface HeroProps {
  heroMode: HeroMode;
}

export const Hero = ({ heroMode }: HeroProps) => {
  return (
    <section
      id="heroSection"
      className={cn(
        'relative flex h-110 w-full flex-col items-center justify-between',
        heroMode === 'playful' ? 'bg-brick-wall' : 'bg-[#282c54]',
      )}
    >
      {heroMode === 'professional' && (
        <HeroVideoPlayer />
      )}
      <div className='mt-16 flex w-full flex-row items-center justify-center px-10'>
        <HeroTitle />
        <div className='absolute right-0 bottom-6 left-0 flex items-center justify-center'>
          <CallToAction />
        </div>
      </div>
      {heroMode === 'playful' && <HeroAnimation />}
    </section>
  );
};
