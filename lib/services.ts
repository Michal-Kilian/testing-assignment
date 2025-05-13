import { Service } from '@/lib/types';
import { Cuboid, Fan, Hammer, Layers, Shovel } from 'lucide-react';

export const SERVICES: Array<Service> = [
  {
    id: '1',
    title: 'Demolačné práce',
    description:
      'Profesionálne a bezpečné demolačné práce všetkých typov objektov. Zabezpečujeme kompletnú prípravu, realizáciu a likvidáciu odpadu s ohľadom na životné prostredie.',
    icon: Hammer,
  } satisfies Service,
  {
    id: '2',
    title: 'Výkopové práce',
    description:
      'Precízne výkopové práce pre základy budov, inžinierske siete a ďalšie projekty. Disponujeme modernou technikou a skúseným tímom pre akékoľvek terénne úpravy.',
    icon: Shovel,
  } satisfies Service,
  {
    id: '3',
    title: 'Murárske práce',
    description:
      'Kvalitné murárske práce pre novostavby, rekonštrukcie a opravy. Stavby z tehál, tvárnic a iných materiálov realizujeme s dôrazom na detail a trvácnosť.',
    icon: Cuboid,
  } satisfies Service,
  {
    id: '4',
    title: 'Vzduchotechnika',
    description:
      'Návrh, montáž a servis moderných vzduchotechnických systémov pre komerčné a rezidenčné priestory. Zabezpečujeme optimálnu kvalitu vzduchu, úsporu energie a zdravé prostredie.',
    icon: Fan,
  } satisfies Service,
  {
    id: '5',
    title: 'Komplexné stavebné riešenia',
    description:
      'Kompletné realizácie stavebných projektov od A po Z. Koordinujeme všetky fázy výstavby, od projektovej dokumentácie po odovzdanie stavby na kľúč.',
    icon: Layers,
  } satisfies Service,
];
