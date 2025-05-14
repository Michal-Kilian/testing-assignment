import { SERVICES } from '@/lib/services';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { Service } from '@/lib/types';

export const Services = () => {
  return (
    <section
      id='servicesSection'
      className='flex w-full flex-col flex-wrap items-center justify-center p-6'
    >
      <BentoGrid>
        {SERVICES.map((service: Service) => (
          <BentoCard key={service.name} {...service} />
        ))}
      </BentoGrid>
    </section>
  );
};
