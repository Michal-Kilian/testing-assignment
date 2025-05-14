import { Marquee } from '@/components/magicui/marquee';
import { REFERENCES } from '@/lib/references';
import { Reference } from '@/lib/types';
import { ReferenceCard } from '@/components/about-us/reference-card';

export const References = () => {
  return (
    <section
      id='referencesSection'
      className='relative mt-12 flex w-full flex-col items-center justify-center overflow-hidden py-2'
    >
      <Marquee pauseOnHover className='[--duration:50s]'>
        {REFERENCES.map((reference: Reference) => (
          <ReferenceCard key={reference.id} reference={reference} />
        ))}
      </Marquee>
    </section>
  );
};
