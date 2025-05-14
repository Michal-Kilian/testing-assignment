import Image from 'next/image';

export const HeroAnimation = () => {
  return (
    <div className='absolute bottom-0 z-1 flex w-full flex-row items-end justify-center'>
      <Image
        src={'/images/city-gif.gif'}
        alt={'Hero Image'}
        width={300}
        height={300}
        className='h-36 w-1/3'
        unoptimized
      />
      <Image
        src={'/images/city-gif.gif'}
        alt={'Hero Image'}
        width={300}
        height={300}
        className='h-36 w-1/3'
        unoptimized
      />
      <Image
        src={'/images/city-gif.gif'}
        alt={'Hero Image'}
        width={300}
        height={300}
        className='h-36 w-1/3'
        unoptimized
      />
    </div>
  );
};
