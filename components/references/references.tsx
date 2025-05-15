import { Marquee } from '@/components/magicui/marquee';
import { REFERENCES } from '@/lib/references';
import { Reference } from '@/lib/types';
import { ReferenceCard } from '@/components/references/reference-card';

export const References = () => {
  return (
    <section
      id='referencesSection'
      className='relative mt-14 flex w-full flex-col items-center justify-center overflow-hidden py-2'
    >
      <h3 className='text-primary-foreground my-6 w-full text-center text-3xl font-medium tracking-tight text-shadow-lg'>
        Prezrite si naše referencie
      </h3>
      <Marquee pauseOnHover className='[--duration:60s]'>
        {REFERENCES.map((reference: Reference) => (
          <ReferenceCard key={reference.id} reference={reference} />
        ))}
      </Marquee>
    </section>
  );
};
