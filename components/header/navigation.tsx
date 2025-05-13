'use client';

import { Button } from '@/components/ui/button';
import { Mail, Package, UsersRound } from 'lucide-react';
import { handleNavigateToSection } from '@/lib/utils';

export const Navigation = () => {
  return (
    <div className='flex flex-row items-center justify-end gap-x-3'>
      <Button
        variant='default'
        size='default'
        className='bg-header text-header-foreground hover:bg-header-hover cursor-pointer'
        onClick={() => handleNavigateToSection('servicesSection')}
      >
        <Package />
        Služby
      </Button>
      <Button
        variant='default'
        size='default'
        className='bg-header text-header-foreground hover:bg-header-hover cursor-pointer'
        onClick={() => handleNavigateToSection('aboutUsSection')}
      >
        <UsersRound />O nás
      </Button>
      <Button
        variant='default'
        size='default'
        className='bg-header text-header-foreground hover:bg-header-hover cursor-pointer'
        onClick={() => handleNavigateToSection('contactSection')}
      >
        <Mail />
        Kontakt
      </Button>
    </div>
  );
};
