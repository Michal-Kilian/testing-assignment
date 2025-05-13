import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {Pickaxe} from "lucide-react";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <Link href={"/services"} className="z-2">
      <Card className="max-w-64 bg-primary cursor-pointer hover:scale-105 transition-transform duration-300 border-none group">
        <CardContent className="flex flex-col items-center justify-center text-primary-foreground gap-y-6">
          <Pickaxe className="w-16 h-16 text-muted-foreground group-hover:rotate-360 transition-transform duration-300" />
          <CardTitle className="text-center w-full">
            Objavte naše služby
          </CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
};