"use client"

import { Heart, Mail, Package, UsersRound } from 'lucide-react';
import { FooterNavigationButton } from '@/components/footer/footer-navigation-button';

export const FooterNavigation = () => {
  return (
    <div className='flex flex-col items-center justify-end gap-y-1'>
      <FooterNavigationButton
        title='Služby'
        section='servicesSection'
        icon={Package}
      />
      <FooterNavigationButton
        title='O nás'
        icon={UsersRound}
        section='aboutUsSection'
      />
      <FooterNavigationButton
        title='Referencie'
        icon={Heart}
        section='referencesSection'
      />
      <FooterNavigationButton
        title='Kontakt'
        icon={Mail}
        section='contactSection'
      />
    </div>
  );
};