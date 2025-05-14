import { handleNavigateToSection } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { SectionType } from '@/lib/types';
import { ElementType } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface FooterNavigationButtonProps {
  title: string;
  icon: ElementType;
  section: SectionType;
}

export const FooterNavigationButton = ({
  title,
  icon: Icon,
  section,
}: FooterNavigationButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant='link'
          size='sm'
          className='text-primary-foreground cursor-pointer'
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
