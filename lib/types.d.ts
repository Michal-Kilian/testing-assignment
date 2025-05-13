import { ElementType } from 'react';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
};

export type SectionType =
  | 'servicesSection'
  | 'aboutUsSection'
  | 'contactSection';
