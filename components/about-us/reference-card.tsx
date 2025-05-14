import { Reference } from '@/lib/types';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

interface ReferenceCardProps {
  reference: Reference;
}

export const ReferenceCard = ({ reference }: ReferenceCardProps) => {
  return (
    <Card className='relative h-64 w-96 overflow-hidden rounded-lg border-none transition-transform duration-300 hover:scale-105'>
      <Image
        src={reference.image}
        alt={reference.title}
        fill
        className='z-0 object-cover'
      />
      <div className='absolute right-0 bottom-0 left-0 z-10 h-32 rounded-lg rounded-t-none bg-black/70 py-6'>
        <CardHeader>
          <CardTitle className='text-white'>{reference.title}</CardTitle>
          <CardDescription className='text-gray-300'>
            {reference.description}
          </CardDescription>
        </CardHeader>
      </div>
    </Card>
  );
};
