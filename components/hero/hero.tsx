'use client';

import { HeroTitle } from '@/components/hero/hero-title';
import { CallToAction } from '@/components/hero/call-to-action';
import { HeroAnimation } from '@/components/hero/hero-animation';
import { cn } from '@/lib/utils';
import { HeroMode } from '@/lib/types';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  heroMode: HeroMode;
}

export const Hero = ({ heroMode }: HeroProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const videoRef: RefObject<HTMLVideoElement | null> =
    useRef<HTMLVideoElement | null>(null);
  const intervalRef: RefObject<NodeJS.Timeout | null> =
    useRef<NodeJS.Timeout | null>(null);

  const videos: Array<string> = [
    '/images/hero-video-loop.mp4',
    '/images/hero-video-loop-2.mp4',
    '/images/hero-video-loop-3.mp4',
  ];

  const startRotationInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentVideoIndex((previousIndex: number) => {
        const index: number = previousIndex + 1;
        if (previousIndex === videos.length - 1) {
          return 0;
        }
        return index;
      });
    }, 5000);
  }, [videos.length]);

  const changeVideo = (index: number) => {
    setCurrentVideoIndex(index);
    startRotationInterval();
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }

    startRotationInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startRotationInterval, videos.length]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.log('Video play error:', error);
      });
    }
  }, [currentVideoIndex]);

  return (
    <div
      className={cn(
        'relative flex h-100 w-full flex-col items-center justify-between',
        heroMode === 'playful' ? 'bg-brick-wall' : 'bg-[#282c54]',
      )}
    >
      {heroMode === 'professional' && (
        <>
          <video
            ref={videoRef}
            className='absolute inset-0 min-h-full min-w-full object-cover'
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videos[currentVideoIndex]} type='video/mp4' />
          </video>

          <div className='absolute inset-0 bg-black opacity-60' />

          <div className='absolute right-6 bottom-6 z-20 flex space-x-2'>
            {videos.map((_: string, index: number) => (
              <Button
                key={index}
                onClick={() => changeVideo(index)}
                className={cn(
                  'h-4 w-4 cursor-pointer rounded-full p-0 transition-all duration-300 hover:bg-white',
                  currentVideoIndex === index
                    ? 'scale-125 bg-white'
                    : 'bg-white/50 hover:scale-110 hover:bg-white/70',
                )}
                aria-label={`Switch to video ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
      <div className='mt-16 flex w-full flex-row items-center justify-center px-10'>
        <HeroTitle />
        <div className='absolute right-0 bottom-6 left-0 flex items-center justify-center'>
          <CallToAction />
        </div>
      </div>
      ;{heroMode === 'playful' && <HeroAnimation />}
    </div>
  );
};
