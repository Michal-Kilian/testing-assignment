'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Briefcase, Smile } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import { HeroMode } from '@/lib/types';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface DevControlsProps {
  heroMode: HeroMode;
  setHeroModeAction: Dispatch<SetStateAction<HeroMode>>;
}

export const DevControls = ({
  heroMode,
  setHeroModeAction,
}: DevControlsProps) => {
  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              variant='default'
              size='icon'
              className='fixed right-5 bottom-5 z-99 cursor-pointer'
            >
              {heroMode === 'playful' ? <Smile /> : <Briefcase />}
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent side='left'>
          {heroMode === 'playful' ? 'Playful hero' : 'Professional hero'}
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent className='bg-primary flex flex-col items-center justify-center gap-y-1'>
        <DropdownMenuItem
          asChild
          onSelect={() => setHeroModeAction('professional')}
        >
          <Button
            variant='default'
            size='default'
            className='w-full cursor-pointer'
          >
            <Briefcase />
            Professional hero
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onSelect={() => setHeroModeAction('playful')}>
          <Button
            variant='default'
            size='default'
            className='w-full cursor-pointer'
          >
            <Smile />
            Playful hero
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
