import Image from "next/image";

export const HeroAnimation = () => {
  return (
    <div className="w-full flex flex-row items-end justify-center absolute bottom-0 z-1">
      <Image
        src={"/images/city-gif.gif"}
        alt={"Hero Image"}
        width={300}
        height={300}
        className="w-1/3 h-36"
      />
      <Image
        src={"/images/city-gif.gif"}
        alt={"Hero Image"}
        width={300}
        height={300}
        className="w-1/3 h-36"
      />
      <Image
        src={"/images/city-gif.gif"}
        alt={"Hero Image"}
        width={300}
        height={300}
        className="w-1/3 h-36"
      />
    </div>
  );
};