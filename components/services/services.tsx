import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Package } from 'lucide-react';
import { SERVICES } from '@/lib/services';
import { Service } from '@/lib/types';
import { ServiceCard } from '@/components/services/service-card';

export const Services = () => {
  return (
    <section
      id='servicesSection'
      className='flex w-full flex-col items-center justify-center p-6'
    >
      <Card className='w-full'>
        <CardHeader>
          <CardTitle className='text-primary flex w-full flex-row items-center justify-start gap-x-2 text-left text-3xl font-medium tracking-tight'>
            <Package />
            Služby
          </CardTitle>
          <CardDescription className='text-primary w-full text-left'>
            Vyberte si z našich komplexných služieb v oblasti výstavby,
            demolácií a technickej infraštruktúry.
          </CardDescription>
        </CardHeader>
        <CardContent className='flex w-full flex-1 flex-row flex-wrap items-center justify-evenly gap-6 px-6 transition-all duration-200'>
          {SERVICES.map((service: Service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </CardContent>
      </Card>
    </section>
  );
};
