import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Isaiah<span className="text-primary">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex gap-8 items-center">
          <Nav />
          <Button className="text-xs font-bold uppercase">
            Download Resume
          </Button>
        </div>
        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
export default Header;
