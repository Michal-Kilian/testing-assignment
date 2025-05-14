import { Hero } from '@/components/hero/hero';
import { Services } from '@/components/services/services';
import { Contact } from '@/components/contact/contact';
import { AppearOnScroll } from '@/components/appear-on-scroll/appear-on-scroll';
import { AboutUs } from '@/components/about-us/about-us';
import { References } from '@/components/about-us/references';

export default function Home() {
  return (
    <div className='flex h-full w-full flex-1 flex-col items-center justify-start'>
      <Hero />

      <main className='to-primary-foreground w-full bg-linear-to-b from-[#525eaf]'>
        <AppearOnScroll>
          <Services />
        </AppearOnScroll>
        <AppearOnScroll>
          <AboutUs />
        </AppearOnScroll>
        <AppearOnScroll>
          <References />
        </AppearOnScroll>
        <AppearOnScroll>
          <Contact />
        </AppearOnScroll>
      </main>
    </div>
  );
}
