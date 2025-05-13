"use client";

import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {Pickaxe} from "lucide-react";
import {handleNavigateToSection} from "@/lib/utils";

export const CallToAction = () => {
  return (
      <Card
        className="z-2 max-w-64 bg-primary cursor-pointer hover:scale-105 transition-transform duration-300 border-none group"
        onClick={() => handleNavigateToSection("servicesSection")}
      >
        <CardContent className="flex flex-col items-center justify-center text-primary-foreground gap-y-6">
          <Pickaxe className="w-16 h-16 text-muted-foreground group-hover:rotate-360 transition-transform duration-300" />
          <CardTitle className="text-center w-full">
            Objavte naše služby
          </CardTitle>
        </CardContent>
      </Card>
  );
};