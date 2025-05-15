import { Navigation } from '@/components/navigation/navigation';


export const Footer = () => {
  return (
    <footer className='text-primary-foreground relative h-64 w-full bg-black'>
      <div className='from-primary absolute top-0 z-1 h-32 w-full bg-linear-to-b to-black' />
      <div className='absolute bottom-6 z-2 flex w-full flex-row items-center justify-between bg-black p-2'>
        <Navigation navigationType="footer" />
      </div>
    </footer>
  );
};
