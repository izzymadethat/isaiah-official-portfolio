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
    name: "about",
    path: "/about"
  },
  {
    name: "education",
    path: "/education"
  },
  {
    name: "contact",
    path: "/contact"
  }
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet className="flex-justify-center items-center">
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-primary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Isaiah<span className="text-primary">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname &&
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