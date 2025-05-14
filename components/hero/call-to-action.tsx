'use client';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Package } from 'lucide-react';
import { handleNavigateToSection } from '@/lib/utils';

export const CallToAction = () => {
  return (
    <Card
      className='bg-background group right-auto left-auto z-2 max-w-64 cursor-pointer border-none py-2 transition-transform duration-300 hover:scale-105'
      onClick={() => handleNavigateToSection('servicesSection')}
    >
      <CardContent className='text-primary flex flex-row items-center justify-center gap-y-6'>
        <Package className='text-primary h-16 w-16 transition-transform duration-300 group-hover:rotate-360' />
        <CardTitle className='w-full text-center'>
          Objavte naše služby
        </CardTitle>
      </CardContent>
    </Card>
  );
};
