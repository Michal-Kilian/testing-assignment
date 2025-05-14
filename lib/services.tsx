import { Service } from '@/lib/types';
import { Cuboid, Fan, Hammer, Layers, Shovel } from 'lucide-react';
import Image from 'next/image';

export const SERVICES: Array<Service> = [
  {
    id: "1",
    Icon: Hammer,
    name: "Demolačné práce",
    description: 'Profesionálne a bezpečné demolačné práce všetkých typov objektov.',
    href: "#",
    cta: "Zistiť viac",
    className: "col-span-4 md:col-span-1",
    background: (
      <div className="bg-black">
        <Image
          src="/images/services-demolition.jpg"
          alt="Demolačné práce"
          width={1000}
          height={1000}
          className="w-full h-full absolute inset-0 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>
    )
  } satisfies Service,
  {
    id: '2',
    Icon: Shovel,
    name: 'Výkopové práce',
    description: 'Precízne výkopové práce pre základy budov, inžinierske siete a ďalšie projekty. Disponujeme modernou technikou a skúseným tímom pre akékoľvek terénne úpravy.',
    href: '#',
    cta: 'Zistiť viac',
    className: 'col-span-4 md:col-span-2',
    background: (
      <div className="bg-black">
        <Image
          src="/images/services-excavation.jfif"
          alt="Výkopové práce"
          width={1000}
          height={1000}
          className="w-full h-full absolute inset-0 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>
    )
  } satisfies Service,
  {
    id: '3',
    Icon: Cuboid,
    name: 'Murárske práce',
    description: 'Kvalitné murárske práce pre novostavby, rekonštrukcie a opravy.',
    href: '#',
    cta: 'Zistiť viac',
    className: 'col-span-4 md:col-span-1',
    background: (
      <div className="bg-black">
        <Image
          src="/images/services-masonry.jpg"
          alt="Murárske práce"
          width={1000}
          height={1000}
          className="w-full h-full absolute inset-0 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>
    )
  } satisfies Service,
  {
    id: '4',
    Icon: Fan,
    name: 'Vzduchotechnika',
    description: 'Návrh, montáž a servis moderných vzduchotechnických systémov pre komerčné a rezidenčné priestory. Zabezpečujeme optimálnu kvalitu vzduchu, úsporu energie a zdravé prostredie.',
    href: '/',
    cta: 'Zistiť viac',
    className: "col-span-4 md:col-span-2",
    background: (
      <div className="bg-black">
        <Image
          src="/images/services-airtech.jpg"
          alt="Vzduchotechnika"
          width={1000}
          height={1000}
          className="w-full h-full absolute inset-0 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>
    )
  } satisfies Service,
  {
    id: '5',
    Icon: Layers,
    name: 'Komplexné stavebné riešenia',
    description: 'Kompletné realizácie stavebných projektov od A po Z. Koordinujeme všetky fázy výstavby, od projektovej dokumentácie po odovzdanie stavby na kľúč.',
    href: '/',
    cta: 'Zistiť viac',
    className: 'col-span-4 md:col-span-2',
    background: (
      <div className="bg-black">
        <Image
          src="/images/services-construction.jpeg"
          alt="Komplexné stavebné riešenia"
          width={1000}
          height={1000}
          className="w-full h-full absolute inset-0 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>
    )
  } satisfies Service,
];
