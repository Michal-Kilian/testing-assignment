import { Hero } from '@/components/hero/hero';
import { Services } from '@/components/services/services';
import { AboutUs } from '@/components/about-us/about-us';
import { Contact } from '@/components/contact/contact';

export default function Home() {
  return (
    <div
      className={
        'flex h-full w-full flex-1 flex-col items-center justify-start' /*+ "bg-[#525eaf]*/
      }
    >
      <Hero />

      <main className='to-primary-foreground w-full bg-linear-to-b from-[#525eaf]'>
        <Services />
        <AboutUs />
        <Contact />
      </main>
    </div>
  );
}
