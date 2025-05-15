import { ElementType, ReactElement } from 'react';

export type Service = {
  id: string;
  Icon: ElementType;
  name: string;
  description: string;
  href: string;
  cta: string;
  className: string;
  background: ReactElement;
};

export type Reference = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type SectionType =
  | 'heroSection'
  | 'servicesSection'
  | 'aboutUsSection'
  | 'referencesSection'
  | 'contactSection';

export type NavigationType = 'header' | 'footer';

export type HeroMode = 'playful' | 'professional';

export type FormFieldName = 'email' | 'serviceId' | 'description';
