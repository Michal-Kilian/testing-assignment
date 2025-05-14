'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Briefcase, Smile } from 'lucide-react';
import { useState } from 'react';
import { Mode } from '@/lib/types';

export const DevControls = () => {
  const [mode, setMode] = useState<Mode>('playful');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='default'
          size='icon'
          className='fixed right-5 bottom-5 cursor-pointer'
        >
          {mode === 'playful' ? <Smile /> : <Briefcase />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='flex flex-col items-center justify-center gap-y-1'>
        <DropdownMenuItem asChild onSelect={() => setMode('playful')}>
          <Button
            variant='outline'
            size='default'
            className='w-full cursor-pointer'
          >
            <Smile />
            Playful
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onSelect={() => setMode('professional')}>
          <Button
            variant='outline'
            size='default'
            className='w-full cursor-pointer'
          >
            <Briefcase />
            Professional
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
