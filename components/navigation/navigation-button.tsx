import { cn, handleNavigateToSection } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { NavigationType, SectionType } from '@/lib/types';
import { ElementType } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface NavigationButtonProps {
  title: string;
  icon: ElementType;
  section: SectionType;
  navigationType: NavigationType;
}

export const NavigationButton = ({
  title,
  icon: Icon,
  section,
  navigationType,
}: NavigationButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant={navigationType === "header" ? "default" : 'link'}
          size={navigationType === "header" ? "default" : 'sm'}
          className={cn(
            'text-primary-foreground cursor-pointer p-0',
            navigationType === "header" ? "bg-primary" : "bg-transparent",
            navigationType === "header" ? "hover:bg-header" : "hover:bg-transparent",
          )}
          onClick={() => handleNavigateToSection(section)}
        >
          <Icon />
          <span className='hidden md:block'>{title}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent className='block md:hidden'>{title}</TooltipContent>
    </Tooltip>
  );
};