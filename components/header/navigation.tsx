"use client";

import {Button} from "@/components/ui/button";
import {Mail, Package, UsersRound} from "lucide-react";
import {handleNavigateToSection} from "@/lib/utils";

export const Navigation = () => {
  return (
    <div className="flex flex-row items-center justify-end gap-x-3">
      <Button
        variant="default"
        size="default"
        className="cursor-pointer bg-header text-header-foreground hover:bg-header-hover"
        onClick={() => handleNavigateToSection("servicesSection")}
      >
        <Package/>
        Služby
      </Button>
      <Button
        variant="default"
        size="default"
        className="cursor-pointer bg-header text-header-foreground hover:bg-header-hover"
        onClick={() => handleNavigateToSection("aboutUsSection")}
      >
        <UsersRound/>
        O nás
      </Button>
        <Button
          variant="default"
          size="default"
          className="cursor-pointer bg-header text-header-foreground hover:bg-header-hover"
          onClick={() => handleNavigateToSection("contactSection")}
        >
          <Mail/>
          Kontakt
        </Button>
    </div>
  );
};