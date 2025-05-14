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
    <div className="w-full flex flex-row items-center justify-center">
      <div className="bg-hero-accent/90 rounded-lg p-6 transition-all duration-300 w-fit shadow-lg">
        <TypingAnimation
          startOnView={startOnView}
          delay={delay}
          duration={duration}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300"
        >
          {title}
        </TypingAnimation>
      </div>
    </div>
  );
};