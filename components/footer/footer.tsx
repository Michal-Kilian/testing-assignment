import { Logo } from '@/components/icons/logo';
import { FooterNavigation } from '@/components/footer/footer-navigation';

export const Footer = () => {
  return (
    <footer className='relative h-64 bg-black text-primary-foreground w-full'>
      <div className="z-1 absolute top-0 h-32 to-black w-full bg-linear-to-b from-primary w-full" />
      <div className="z-2 absolute top-32 h-32 flex w-full flex-row items-center justify-between p-2 bg-black">
        <div className='mb-1'>
          <Logo />
        </div>

        <FooterNavigation />
      </div>
    </footer>
  );
};
