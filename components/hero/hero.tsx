import { HeroTitle } from '@/components/hero/hero-title';
import { CallToAction } from '@/components/hero/call-to-action';
import { HeroAnimation } from '@/components/hero/hero-animation';

export const Hero = () => {
  return (
    <div className='bg-brick-wall relative flex h-100 w-full flex-col items-center justify-between'>
      <div className='mt-16 flex w-full flex-row items-center justify-between px-10'>
        <HeroTitle />
        <div className='flex w-1/2 items-center justify-center'>
          <CallToAction />
        </div>
      </div>
      <HeroAnimation />
    </div>
  );
};
