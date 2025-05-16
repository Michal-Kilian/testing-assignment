import { Navigation } from '@/components/navigation/navigation';
import Link from 'next/link';
import { ReactElement } from 'react';
import Image from 'next/image';

/**
 * Header component containing the navigation to all sections
 *
 * @returns {ReactElement}
 */
export const Header = (): ReactElement => {
  return (
    <header className='bg-primary text-primary-foreground flex h-fit w-full flex-row items-center justify-between p-2'>
      <Link href='#' className='w-full'>
        <div className='flex w-full cursor-pointer flex-row items-center justify-start gap-x-3 ml-1.5'>
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-6 h-6 border border-background rounded-full"
          />
          <h1 className='w-fit font-medium tracking-tight'>
            Blueprint Solutions s.r.o.
          </h1>
        </div>
      </Link>

      <Navigation navigationType='header' />
    </header>
  );
};
