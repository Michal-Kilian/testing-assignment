import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SectionType } from '@/lib/types';

export const cn = (...inputs: Array<ClassValue>) => {
  return twMerge(clsx(inputs));
};

export const handleNavigateToSection = (sectionType: SectionType) => {
  const section: HTMLElement | null = document.getElementById(sectionType);

  section?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
