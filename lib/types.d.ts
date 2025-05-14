import { ElementType, ReactElement } from 'react';

export type Service = {
  id: string;
  Icon: ElementType,
  name: string,
  description: string,
  href: string,
  cta: string,
  className: string,
  background: ReactElement,
};

export type Reference = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type SectionType =
  | 'servicesSection'
  | 'aboutUsSection'
  | 'referencesSection'
  | 'contactSection';

export type HeroMode = 'playful' | 'professional';

export type FormFieldName = 'email' | 'serviceId' | 'description';
