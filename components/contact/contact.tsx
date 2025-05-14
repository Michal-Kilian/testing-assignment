'use client';

import { ContactForm } from '@/components/contact/contact-form';

export const Contact = () => {
  return (
    <section
      id='contactSection'
      className='flex w-full flex-col items-center justify-center p-6 mt-6'
    >
      <ContactForm />
    </section>
  );
};
