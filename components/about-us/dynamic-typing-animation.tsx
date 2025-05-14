import { TypingAnimation } from '@/components/magicui/typing-animation';

interface DynamicTypingAnimationProps {
  title: string;
  startOnView?: boolean;
  delay?: number;
  duration?: number;
}

export const DynamicTypingAnimation = ({
  title,
  startOnView = false,
  delay = 0,
  duration = 100,
}: DynamicTypingAnimationProps) => {
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      <div className='bg-hero-accent/90 w-fit rounded-lg p-6 shadow-lg transition-all duration-300'>
        <TypingAnimation
          startOnView={startOnView}
          delay={delay}
          duration={duration}
          className='text-lg transition-all duration-300 sm:text-xl md:text-2xl lg:text-3xl'
        >
          {title}
        </TypingAnimation>
      </div>
    </div>
  );
};
