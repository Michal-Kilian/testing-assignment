import Image from 'next/image';
import { ReactElement } from 'react';

/**
 * Hero Animation component only visible when "playful" Hero mode is set
 *
 * @returns {ReactElement}
 */
export const HeroAnimation = (): ReactElement => {
  return (
    <div className='absolute bottom-0 z-1 flex w-full flex-row items-end justify-center'>
      <Image
        src={'/gifs/city-gif.gif'}
        alt={'Hero Image'}
        width={300}
        height={300}
        className='h-36 w-1/3'
        unoptimized
      />
      <Image
        src={'/gifs/city-gif.gif'}
        alt={'Hero Image'}
        width={300}
        height={300}
        className='h-36 w-1/3'
        unoptimized
      />
      <Image
        src={'/gifs/city-gif.gif'}
        alt={'Hero Image'}
        width={300}
        height={300}
        className='h-36 w-1/3'
        unoptimized
      />
    </div>
  );
};
