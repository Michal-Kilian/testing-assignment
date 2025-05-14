import { ElementType } from 'react';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
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

export type Mode = 'playful' | 'professional';

export type FormFieldName = 'email' | 'serviceId' | 'description';
