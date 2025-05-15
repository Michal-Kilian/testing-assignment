import { SERVICES } from '@/lib/services';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { Service } from '@/lib/types';
import { ReactElement } from 'react';

/**
 * Services section containing the Bento Grid of all services that the company provides
 *
 * @returns {ReactElement}
 */
export const Services = (): ReactElement => {
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
