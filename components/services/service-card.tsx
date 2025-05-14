import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Service } from '@/lib/types';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({
  service: { id, title, description, icon: Icon },
}: ServiceCardProps) => {
  return (
    <Card className='bg-accent text-accent-foreground flex h-64 w-full max-w-90 flex-row items-center justify-center rounded-lg border-none transition-transform duration-300 hover:scale-105'>
      <CardHeader className='w-2/3'>
        <CardTitle className='text-xl'>{title}</CardTitle>
        <CardDescription className='text-accent-foreground'>
          {description}
        </CardDescription>
      </CardHeader>
      <Link href={'/services/' + id} className="w-1/3">
        <CardContent
          className={cn(
            'border-primary-foreground text-primary-foreground',
            'mr-6 flex h-25 w-25 cursor-pointer items-center',
            'justify-center rounded-full border-2 p-6 transition-all',
            'duration-300 hover:scale-105',
            'bg-linear-to-br from-primary-foreground to-[#525eaf]',
            'hover:bg-linear-to-tl'
          )}
        >
          <Icon className='h-full w-full' />
        </CardContent>
      </Link>
    </Card>
  );
};
