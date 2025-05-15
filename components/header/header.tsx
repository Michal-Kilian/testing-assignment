import { Logo } from '@/components/icons/logo';
import { Navigation } from '@/components/navigation/navigation';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='bg-primary text-primary-foreground flex h-fit w-full flex-row items-center justify-between p-2'>
      <Link href="#" className="w-full">
        <div className="flex flex-row items-center justify-start gap-x-2 w-full cursor-pointer">
          <div className="mb-1">
            <Logo />
          </div>
          <h1 className="w-fit font-medium tracking-tight">
            Blueprint Solutions{" "}
            <i>s.r.o.</i>
          </h1>
        </div>
      </Link>

      <Navigation navigationType="header" />
    </header>
  );
};
