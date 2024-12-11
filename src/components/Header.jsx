import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container flex justify-between mx-auto">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Isaiah<span className="text-primary">.</span>
          </h1>
        </Link>
        <div className="items-center hidden gap-8 xl:flex">
          <Nav />
          <Button className="text-xs font-bold uppercase" asChild>
            <Link href="/assets/resume/IsaiahVickers_SWE_Resume.pdf" download="IsaiahVickers_SWE_Resume.pdf" target="_blank" >
              Download Resume
            </Link>
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
