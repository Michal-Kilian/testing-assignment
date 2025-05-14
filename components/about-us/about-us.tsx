import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import { Marquee } from '@/components/magicui/marquee';
import { REFERENCES } from '@/lib/references';
import { Reference } from '@/lib/types';
import { ReferenceCard } from '@/components/about-us/reference-card';
import { Globe } from '@/components/magicui/globe';
import { DynamicTypingAnimation } from '@/components/about-us/dynamic-typing-animation';

export const AboutUs = () => {
  return (
    <section
      id="aboutUsSection"
      className="flex w-full flex-col items-center justify-center p-6 pt-24 h-96 relative"
    >
      <Globe className="absolute top-0 w-106 overflow-hidden" />
      <div
        className="absolute top-0 p-20 font-medium tracking-tight text-left w-full text-shadow-lg flex flex-col items-center justify-center gap-y-3 text-primary-foreground"
      >
        <DynamicTypingAnimation
          title="Medzinárodná profesionalita"
          startOnView={true}
        />
        <DynamicTypingAnimation
          title="Takmer 30 rokov skúseností"
          startOnView={true}
          delay={1000}
          duration={50}
        />
        <DynamicTypingAnimation
          title="Spokojnosť u 2700+ zákazníkov"
          startOnView={true}
          delay={2000}
          duration={50}
        />
      </div>
    </section>
  );

  return (
    <section
      id="aboutUsSection"
      className="flex w-full flex-col items-center justify-center p-6 pt-0"
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle
            className="text-primary flex w-full flex-row items-center justify-start gap-x-2 text-left text-3xl font-medium tracking-tight">
            <Heart />
            O nás
          </CardTitle>
          <CardDescription className="text-primary w-full text-left">
            Sme stavebná firma, ktorá spája skúsenosti, profesionalitu a moderné prístupy. Našou víziou je prinášať
            klientom spoľahlivé riešenia, ktoré spĺňajú najvyššie štandardy kvality. Vďaka tímovej spolupráci a dôrazu
            na detaily dokážeme realizovať projekty rôzneho rozsahu – od menších rekonštrukcií až po komplexné stavebné
            riešenia.
            Prezrite si naše hotové projekty, na všetky práce sme plnohodnotne hrdí.
          </CardDescription>
        </CardHeader>
        <div className="px-12">
          <CardContent className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee className="[--duration:50s]">
              {REFERENCES.map((reference: Reference) => (
                <ReferenceCard key={reference.id} reference={reference} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
          </CardContent>
        </div>
      </Card>
    </section>
  );
};