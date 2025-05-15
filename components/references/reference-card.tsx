import { Reference } from '@/lib/types';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { ReactElement } from 'react';

interface ReferenceCardProps {
  reference: Reference;
}

/**
 * Reference Card component used in the Marquee animation of the references section
 *
 * @param {NavigationProps}
 * @returns {ReactElement}
 */
export const ReferenceCard = ({
  reference,
}: ReferenceCardProps): ReactElement => {
  return (
    <Card className='relative h-64 w-96 overflow-hidden rounded-lg border-none transition-transform duration-300 hover:scale-105'>
      <Image
        src={reference.image}
        alt={reference.title}
        fill
        className='z-0 object-cover'
        sizes='100%'
      />
      <div className='absolute right-0 bottom-0 left-0 z-10 h-32 rounded-lg rounded-t-none bg-black/70 py-6'>
        <CardHeader>
          <CardTitle className='pointer-events-none text-white'>
            {reference.title}
          </CardTitle>
          <CardDescription className='pointer-events-none text-gray-300'>
            {reference.description}
          </CardDescription>
        </CardHeader>
      </div>
    </Card>
  );
};
