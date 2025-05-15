import { TypingAnimation } from '@/components/magicui/typing-animation';
import { ReactElement } from 'react';

interface DynamicTypingAnimationProps {
  title: string;
  startOnView?: boolean;
  delay?: number;
  duration?: number;
}

/**
 * Dynamic Typing Animation for engaging headlines
 *
 * @param {DynamicTypingAnimationProps}
 * @returns {ReactElement}
 */
export const DynamicTypingAnimation = ({
  title,
  startOnView = false,
  delay = 0,
  duration = 100,
}: DynamicTypingAnimationProps): ReactElement => {
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
