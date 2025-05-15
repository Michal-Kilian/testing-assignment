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
    <div className='flex w-full flex-row items-center justify-center md:justify-start'>
      <div className='w-fit rounded-lg p-6 transition-all duration-300'>
        <TypingAnimation
          startOnView={startOnView}
          delay={delay}
          duration={duration}
          className='text-2xl transition-all duration-300 lg:text-3xl'
        >
          {title}
        </TypingAnimation>
      </div>
    </div>
  );
};
