import { Globe } from '@/components/magicui/globe';
import { DynamicTypingAnimation } from '@/components/about-us/dynamic-typing-animation';

export const AboutUs = () => {
  return (
    <section
      id='aboutUsSection'
      className='relative flex h-96 w-full flex-col items-center justify-center p-6 pt-24'
    >
      <Globe className='absolute top-0 w-106 overflow-hidden' />
      <div className='text-primary-foreground absolute top-0 flex w-full flex-col items-center justify-center gap-y-3 p-20 text-left font-medium tracking-tight text-shadow-lg'>
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
    </section>
  );
};
