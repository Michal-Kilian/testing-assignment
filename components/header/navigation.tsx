"use client";

import {Button} from "@/components/ui/button";
import {Mail, Package, UsersRound} from "lucide-react";
import {SectionType} from "@/lib/types";

export const Navigation = () => {
  const handleNavigationClick = (sectionType: SectionType) => {
    const section: HTMLElement | null = document.getElementById(sectionType);

    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="flex flex-row items-center justify-end gap-x-3">
      <Button
        variant="default"
        size="default"
        className="cursor-pointer bg-header text-header-foreground hover:bg-header-hover"
        onClick={() => handleNavigationClick("servicesSection")}
      >
        <Package/>
        Služby
      </Button>
      <Button
        variant="default"
        size="default"
        className="cursor-pointer bg-header text-header-foreground hover:bg-header-hover"
        onClick={() => handleNavigationClick("aboutUsSection")}
      >
        <UsersRound/>
        O nás
      </Button>
        <Button
          variant="default"
          size="default"
          className="cursor-pointer bg-header text-header-foreground hover:bg-header-hover"
          onClick={() => handleNavigationClick("contactSection")}
        >
          <Mail/>
          Kontakt
        </Button>
    </div>
  );
};