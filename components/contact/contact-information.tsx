import { FacebookIcon } from '@/components/icons/facebook-icon';
import { InstagramIcon } from '@/components/icons/instagram-icon';
import { Mail, Phone } from 'lucide-react';
import { ReactElement } from 'react';

/**
 * Component displaying the contact information about the company
 *
 * @returns {ReactElement}
 */
export const ContactInformation = (): ReactElement => {
  return (
    <div className='text-primary-foreground flex h-full w-full max-w-lg flex-col items-start justify-center'>
      <h3 className='mb-2 w-full text-left text-3xl font-medium tracking-tight text-shadow-lg'>
        Máte záujem o naše služby?
      </h3>
      <p className='w-full text-left text-lg'>
        Vyplňte náš formulár a my Vám s ďalším postupom pomôžeme
      </p>
      <div className='mt-6 flex h-full w-full flex-1 flex-col items-start justify-center gap-y-3'>
        <div className='flex flex-row items-center justify-center gap-x-2'>
          <FacebookIcon />
          <span className='font-medium tracking-tight text-shadow-md'>
            Blueprint Solutions <i>s.r.o.</i>
          </span>
        </div>
        <div className='flex flex-row items-center justify-center gap-x-2'>
          <InstagramIcon />
          <span className='font-medium tracking-tight text-shadow-md'>
            @blueprintsolutions
          </span>
        </div>
        <div className='flex flex-row items-center justify-center gap-x-2'>
          <Mail className='mx-1 h-10 w-10' />
          <span className='font-medium tracking-tight text-shadow-md'>
            contact@blueprint.com
          </span>
        </div>
        <div className='flex flex-row items-center justify-center gap-x-2'>
          <Phone className='mx-1 h-10 w-10' />
          <span className='font-medium tracking-tight text-shadow-md'>
            0900 123 456
          </span>
        </div>
      </div>
    </div>
  );
};
