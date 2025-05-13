import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Service } from '@/lib/types';
import Link from 'next/link';

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
      <Link href={'/services/' + id}>
        <CardContent className='border-muted-foreground text-muted-foreground hover:text-accent-foreground hover:border-accent-foreground bg-background mr-6 flex h-25 w-25 cursor-pointer items-center justify-center rounded-full border-2 p-6 transition-all duration-300 hover:scale-105'>
          <Icon className='h-full w-full' />
        </CardContent>
      </Link>
    </Card>
  );
};
