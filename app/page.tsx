import {Hero} from "@/components/hero/hero";
import {Services} from "@/components/services/services";
import {AboutUs} from "@/components/about-us/about-us";
import {Contact} from "@/components/contact/contact";

export default function Home() {
  return (
    <div className={"flex flex-1 flex-col h-full w-full items-center justify-start" /*+ "bg-[#525eaf]*/}>
      <Hero/>

      <main className="w-full bg-linear-to-b from-[#525eaf] to-primary-foreground">
        <Services />
        <AboutUs />
        <Contact />
      </main>
    </div>
  );
}
