import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Package} from "lucide-react";
import {SERVICES} from "@/lib/services";
import {Service} from "@/lib/types";
import {ServiceCard} from "@/components/services/service-card";

export const Services = () => {
  return (
    <section id="servicesSection" className="w-full flex flex-col items-center justify-center p-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle
            className="w-full text-left tracking-tight text-3xl font-medium text-primary flex flex-row items-center justify-start gap-x-2">
            <Package/>
            Služby
          </CardTitle>
          <CardDescription className="w-full text-left text-primary">
            Vyberte si z našich komplexných služieb v oblasti výstavby, demolácií a
            technickej infraštruktúry.
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
    </section>
  );
};