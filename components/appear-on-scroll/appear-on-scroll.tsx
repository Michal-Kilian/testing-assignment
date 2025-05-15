'use client';

import {
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

interface AppearOnScrollProps {
  children: ReactNode;
  threshold?: number;
  animationClass?: string;
}

/**
 * Component that makes its children appear after a part is in users view
 *
 * @param {AppearOnScrollProps}
 * @returns {ReactElement}
 */
export const AppearOnScroll = ({
  children,
  threshold = 0.3,
  animationClass = 'fade-in',
}: AppearOnScrollProps): ReactElement => {
  const [inView, setInView] = useState(false);
  const ref: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: Array<IntersectionObserverEntry>) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: threshold },
    );

    const currentRef: HTMLDivElement | null = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${inView ? animationClass : 'opacity-0'} `}
    >
      {children}
    </div>
  );
};
