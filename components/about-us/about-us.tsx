import { Globe } from '@/components/magicui/globe';
import { DynamicTypingAnimation } from '@/components/about-us/dynamic-typing-animation';
import Image from 'next/image';
import { BentoCard } from '@/components/magicui/bento-grid';
import { UsersRound } from 'lucide-react';

export const AboutUs = () => {
  return (
    <section
      id='aboutUsSection'
      className='relative flex h-140 w-full flex-col items-center justify-center p-6 pt-24 md:h-96'
    >
      <Globe className='absolute top-0 z-1 w-106 overflow-hidden' />
      <div className='z-2 mt-30 flex w-full flex-col items-center justify-between gap-x-6 md:mt-0 md:flex-row'>
        <div className='text-primary-foreground flex w-full flex-col items-start justify-center gap-y-3 text-left font-medium tracking-tight text-shadow-lg'>
          <DynamicTypingAnimation
            title='Medzinárodná profesionalita'
            startOnView={true}
          />
          <DynamicTypingAnimation
            title='Takmer 30 rokov skúseností'
            startOnView={true}
            delay={1000}
            duration={50}
          />
          <DynamicTypingAnimation
            title='Spokojnosť u 2700+ zákazníkov'
            startOnView={true}
            delay={2000}
            duration={50}
          />
        </div>
        <div className='mb-20 flex w-full flex-row items-center justify-center md:mb-0 md:justify-end'>
          <BentoCard
            name='O nás'
            className='h-80'
            background={
              <div className='bg-black'>
                <Image
                  src='/images/about-us-team.jpg'
                  alt='Demolačné práce'
                  width={1000}
                  height={1000}
                  className='absolute inset-0 h-full w-full rounded-lg object-cover object-center'
                />
                <div className='absolute inset-0 rounded-lg bg-black opacity-70' />
              </div>
            }
            Icon={UsersRound}
            description='Sme tím odborníkov, ktorí sa zameriavajú na kvalitné stavebné riešenia.
                Našou prioritou je spolupráca, precíznosť a dôraz na detaily,
                ktoré zabezpečujú úspešnú realizáciu každého projektu.'
            href='#'
            cta='Kontaktujte nás'
          />
        </div>
      </div>
    </section>
  );
};
