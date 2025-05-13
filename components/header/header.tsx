import Link from "next/link";
import {Navigation} from "@/components/header/navigation";
import {Logo} from "@/components/icons/logo";

export const Header = () => {
  return (
    <header
      className="w-full h-fit flex flex-row items-center justify-between bg-header text-header-foreground p-2">
      <Link href={"/"} className="mb-1">
          <Logo />
      </Link>

      <Navigation />
    </header>
  );
};