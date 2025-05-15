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
      <h3 className="text-3xl w-full text-center my-6 text-primary-foreground text-shadow-lg tracking-tight font-medium">
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
