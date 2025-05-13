import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Service} from "@/lib/types";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({
  service: {
    id,
    title,
    description,
    icon: Icon,
  },
}: ServiceCardProps) => {
  return (
    <Card className="rounded-lg h-64 w-full max-w-md hover:scale-105 transition-transform duration-300 bg-hero-accent text-primary-foreground flex flex-row items-center justify-center border-none">
      <CardHeader className="w-2/3">
        <CardTitle className="text-xl">
          {title}
        </CardTitle>
        <CardDescription className="text-primary-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <Link href={"/services/" + id}>
        <CardContent
          className="flex items-center justify-center w-25 h-25 p-6 rounded-full border-2 border-primary-foreground text-primary-foreground mr-6 hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-hero"
        >
          <Icon className="w-full h-full"/>
        </CardContent>
      </Link>
    </Card>
  );
};