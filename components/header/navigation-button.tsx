import { handleNavigateToSection } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { SectionType } from '@/lib/types';
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
}

export const NavigationButton = ({
  title,
  icon: Icon,
  section,
}: NavigationButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant='default'
          size='default'
          className='bg-primary text-primary-foreground hover:bg-header cursor-pointer'
          onClick={() => handleNavigateToSection(section)}
        >
          <Icon />
          <span className='hidden sm:block'>{title}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent className='block sm:hidden'>{title}</TooltipContent>
    </Tooltip>
  );
};
