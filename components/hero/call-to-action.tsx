'use client';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Pickaxe } from 'lucide-react';
import { handleNavigateToSection } from '@/lib/utils';

export const CallToAction = () => {
  return (
    <Card
      className='bg-primary group z-2 max-w-64 cursor-pointer border-none transition-transform duration-300 hover:scale-105'
      onClick={() => handleNavigateToSection('servicesSection')}
    >
      <CardContent className='text-primary-foreground flex flex-col items-center justify-center gap-y-6'>
        <Pickaxe className='text-muted-foreground h-16 w-16 transition-transform duration-300 group-hover:rotate-360' />
        <CardTitle className='w-full text-center'>
          Objavte naše služby
        </CardTitle>
      </CardContent>
    </Card>
  );
};
