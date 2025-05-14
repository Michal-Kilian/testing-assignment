import { Logo } from '@/components/icons/logo';
import { FooterNavigation } from '@/components/footer/footer-navigation';

export const Footer = () => {
  return (
    <footer className='text-primary-foreground relative h-64 w-full bg-black'>
      <div className='from-primary absolute top-0 z-1 h-32 w-full bg-linear-to-b to-black' />
      <div className='absolute top-32 z-2 flex h-32 w-full flex-row items-center justify-between bg-black p-2'>
        <div className='mb-1'>
          <Logo />
        </div>

        <FooterNavigation />
      </div>
    </footer>
  );
};
