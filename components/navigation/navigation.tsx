'use client';

import { NavigationType } from '@/lib/types';
import { Heart, House, Mail, Package, UsersRound } from 'lucide-react';
import { NavigationButton } from '@/components/navigation/navigation-button';
import { cn } from '@/lib/utils';

interface NavigationProps {
  navigationType: NavigationType;
}

export const Navigation = ({
  navigationType,
}: NavigationProps) => {
  return (
    <div className={cn(
      'w-full flex flex-row items-center gap-x-3',
      navigationType === "header" ? "justify-end" : "justify-evenly",
    )}>
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

