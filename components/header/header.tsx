import { Navigation } from '@/components/header/navigation';
import { Logo } from '@/components/icons/logo';

export const Header = () => {
  return (
    <header className='bg-header text-header-foreground flex h-fit w-full flex-row items-center justify-between p-2'>
      <div className='mb-1'>
        <Logo />
      </div>

      <Navigation />
    </header>
  );
};
