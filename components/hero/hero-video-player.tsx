import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

export const HeroVideoPlayer = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const videoRef: RefObject<HTMLVideoElement | null> =
    useRef<HTMLVideoElement | null>(null);
  const intervalRef: RefObject<NodeJS.Timeout | null> =
    useRef<NodeJS.Timeout | null>(null);

  const videos: Array<string> = [
    '/images/hero-video-loop-3.mp4',
    '/images/hero-video-loop.mp4',
    '/images/hero-video-loop-2.mp4',
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

  const changeVideo = (index: number) => {
    setCurrentVideoIndex(index);
    startRotationInterval();
  };

  return (
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
          />
        ))}
      </div>
    </>
  );
};
