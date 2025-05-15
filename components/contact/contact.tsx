'use client';

import { ContactForm } from '@/components/contact/contact-form';
import { ContactInformation } from '@/components/contact/contact-information';
import { ReactElement } from 'react';

/**
 * Contact section containing the contact information and the contact form
 *
 * @returns {ReactElement}
 */
export const Contact = (): ReactElement => {
  return (
    <section
      id='contactSection'
      className='mt-20 flex h-fit w-full flex-col items-center justify-center gap-12 p-12 md:mt-6 md:h-96 md:flex-row'
    >
      <ContactInformation />
      <ContactForm />
    </section>
  );
};
