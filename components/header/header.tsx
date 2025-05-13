import Link from 'next/link';
import { Navigation } from '@/components/header/navigation';
import { Logo } from '@/components/icons/logo';

export const Header = () => {
  return (
    <header className='bg-header text-header-foreground flex h-fit w-full flex-row items-center justify-between p-2'>
      <Link href={'/'} className='mb-1'>
        <Logo />
      </Link>

      <Navigation />
    </header>
  );
};
