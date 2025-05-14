'use client';

import { ContactForm } from '@/components/contact/contact-form';

export const Contact = () => {
  return (
    <section
      id='contactSection'
      className='mt-6 flex w-full flex-col items-center justify-center p-6'
    >
      <ContactForm />
    </section>
  );
};
