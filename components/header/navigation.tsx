'use client';

import { Heart, Mail, Package, UsersRound } from 'lucide-react';
import { NavigationButton } from '@/components/header/navigation-button';

export const Navigation = () => {
  return (
    <div className='flex flex-row items-center justify-end gap-x-3'>
      <NavigationButton
        title='Služby'
        section='servicesSection'
        icon={Package}
      />
      <NavigationButton
        title='O nás'
        icon={UsersRound}
        section='aboutUsSection'
      />
      <NavigationButton
        title='Referencie'
        icon={Heart}
        section='referencesSection'
      />
      <NavigationButton title='Kontakt' icon={Mail} section='contactSection' />
    </div>
  );
};
