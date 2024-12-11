"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${link.path === pathname && "text-primary border-b-2 border-primary"
            } capitalize font-medium hover:text-primary transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
export default Nav;
