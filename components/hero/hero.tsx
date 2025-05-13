import {HeroTitle} from "@/components/hero/hero-title";
import {CallToAction} from "@/components/hero/call-to-action";
import {HeroAnimation} from "@/components/hero/hero-animation";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-brick-wall w-full h-100 relative">
      <div className="flex flex-row w-full items-center justify-between mt-16 px-10">
        <HeroTitle />
        <div className="w-1/2 flex items-center justify-center">
          <CallToAction />
        </div>
      </div>
      <HeroAnimation />
    </div>
  );
};