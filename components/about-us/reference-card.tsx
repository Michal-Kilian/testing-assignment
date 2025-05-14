import { Reference } from '@/lib/types';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface ReferenceCardProps {
  reference: Reference;
}

export const ReferenceCard = ({
  reference,
}: ReferenceCardProps) => {
  return (
    <Card className="relative overflow-hidden rounded-lg w-96 h-64 border-none">
      <Image
        src={reference.image}
        alt={reference.title}
        fill
        className="object-cover z-0"
      />
      <div className="h-32 absolute z-10 bg-black/70 py-6 rounded-lg bottom-0 left-0 right-0 rounded-t-none">
        <CardHeader>
          <CardTitle className="text-white">{reference.title}</CardTitle>
          <CardDescription className="text-gray-300">
            {reference.description}
          </CardDescription>
        </CardHeader>
      </div>
    </Card>
  );
};