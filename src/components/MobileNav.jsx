"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "works",
    path: "/works"
  },
  {
    name: "about me",
    path: "/about"
  },
  {
    name: "contact",
    path: "/contact"
  }
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet className="items-center flex-justify-center">
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-primary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-2xl text-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Isaiah<span className="text-primary">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${link.path === pathname &&
                "text-primary border-b-2 border-primary"
                } text-xl capitalize hover:text-primary transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
