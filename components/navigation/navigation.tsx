'use client';

import { NavigationType } from '@/lib/types';
import { Heart, House, Mail, Package, UsersRound } from 'lucide-react';
import { NavigationButton } from '@/components/navigation/navigation-button';
import { cn } from '@/lib/utils';
import { ReactElement } from 'react';

interface NavigationProps {
  navigationType: NavigationType;
}

/**
 * Navigation component used in the header and footer
 *
 * @param {NavigationProps}
 * @returns {ReactElement}
 */
export const Navigation = ({
  navigationType,
}: NavigationProps): ReactElement => {
  return (
    <div
      className={cn(
        'flex w-full flex-row items-center gap-x-3',
        navigationType === 'header' ? 'justify-end' : 'justify-evenly',
      )}
    >
      <NavigationButton
        title='Domov'
        section='heroSection'
        icon={House}
        navigationType={navigationType}
      />
      <NavigationButton
        title='Služby'
        section='servicesSection'
        icon={Package}
        navigationType={navigationType}
      />
      <NavigationButton
        title='O nás'
        icon={UsersRound}
        section='aboutUsSection'
        navigationType={navigationType}
      />
      <NavigationButton
        title='Referencie'
        icon={Heart}
        section='referencesSection'
        navigationType={navigationType}
      />
      <NavigationButton
        title='Kontakt'
        icon={Mail}
        section='contactSection'
        navigationType={navigationType}
      />
    </div>
  );
};
