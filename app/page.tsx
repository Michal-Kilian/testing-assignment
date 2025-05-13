import {Hero} from "@/components/hero/hero";
import {SERVICES} from "@/lib/services";
import {Service} from "@/lib/types";
import {ServiceCard} from "@/components/services/service-card";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function Home() {
  return (
    <div className={"flex flex-1 flex-col h-full w-full items-center justify-start" /*+ "bg-[#525eaf]*/}>
      <Hero/>

      <main className="w-full bg-linear-to-b from-[#525eaf] to-primary-foreground">
        <section id="servicesSection" className="w-full flex flex-col items-center justify-center p-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="w-full text-left tracking-tight text-3xl font-medium text-primary">
                Služby
              </CardTitle>
              <CardDescription className="w-full text-left text-primary">
                Vyberte si z našich profesionálnych služieb - demolačné práce, výkopové práce, murárske práce,
                vzduchotechnika alebo komplexné stavebné riešenia.
              </CardDescription>
            </CardHeader>
              <CardContent
                className="w-full flex flex-1 flex-wrap items-center justify-evenly flex-row gap-6 px-6 transition-all duration-200">
                {SERVICES.map((service: Service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                  />
                ))}
              </CardContent>
          </Card>
          {/*<div className="w-full text-primary p-10">
            <h2 className="w-full text-left tracking-tight text-3xl font-medium text-primary-foreground text-shadow-md">
              Služby
            </h2>
            <p className="w-full text-left text-primary-foreground text-shadow-md">
              Vyberte si z našich profesionálnych služieb - demolačné práce, výkopové práce, murárske práce,
              vzduchotechnika alebo komplexné stavebné riešenia
            </p>
          </div>*/}
        </section>

        <section id="aboutUsSection" className="w-full flex flex-col items-center justify-center">
          <div className="w-full text-primary p-10">
            <h2 className="w-full text-left tracking-tight text-3xl font-medium text-primary">
              O nás
            </h2>
            <p className="w-full text-left text-primary">
              Vyberte si z našich profesionálnych služieb - demolačné práce, výkopové práce, murárske práce,
              vzduchotechnika alebo komplexné stavebné riešenia
            </p>
          </div>
        </section>

        <section id="contactSection" className="w-full flex flex-col items-center justify-center">
          <div className="w-full text-primary p-10">
            <h2 className="w-full text-left tracking-tight text-3xl font-medium text-primary">
              Kontakt
            </h2>
            <p className="w-full text-left text-primary">
              Vyberte si z našich profesionálnych služieb - demolačné práce, výkopové práce, murárske práce,
              vzduchotechnika alebo komplexné stavebné riešenia
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
