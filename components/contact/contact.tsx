'use client';

import { ContactForm } from '@/components/contact/contact-form';
import { ContactInformation } from '@/components/contact/contact-information';

export const Contact = () => {
  return (
    <section
      id='contactSection'
      className='mt-20 md:mt-6 flex w-full flex-col md:flex-row h-fit md:h-96 items-center justify-center gap-12 p-12'
    >
      <ContactInformation />
      <ContactForm />
    </section>
  );
};
