import { ReactElement } from 'react';

/**
 * Hero Title component used to display a taking headline along with a sub-headline
 *
 * @returns {ReactElement}
 */
export const HeroTitle = (): ReactElement => {
  return (
    <div className='text-primary-foreground z-2 flex w-full flex-col items-center justify-center gap-y-3 md:px-20'>
      <h1 className='w-full text-center text-5xl font-medium tracking-tight text-shadow-lg'>
        Spoľahlivý partner pre Vaše projekty
      </h1>
      <p className='w-full text-center text-xl text-shadow-md'>
        Profesionálne riešenie prác od demolácie cez vzduchotechniku až po
        komplexné stavebné riešenia
      </p>
    </div>
  );
};
