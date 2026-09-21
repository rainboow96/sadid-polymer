"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import MobileMenu from "./mobileMenu";
import { company } from "../data/content";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export interface NavLink {
  title: string;
  href?: string;
  items?: { title: string; href: string }[];
}

const navLinks: NavLink[] = [
  { title: "صفحه اصلی", href: "/" },
  {
    title: "محصولات",
    items: [
      { title: "لوله لی‌فلت", href: "/products/layflat" },
      { title: "کیسه کاشت نهال", href: "/products/bags" },
    ],
  },
  { title: "مقالات", href: "/blog" },
  { title: "سوالات متداول", href: "/faq" },
  { title: "تماس با ما", href: "/contact" },
];


const navItemStyles = `
  relative py-2 px-3 text-slate-300 font-medium text-sm transition-colors duration-200
  hover:text-white bg-transparent hover:bg-transparent focus:bg-transparent
  data-[state=open]:bg-transparent data-[state=open]:text-white
  after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
  after:h-[2px] after:w-0 after:rounded-full
  after:bg-[image:var(--background-image-brand-blue-gradient)]
  after:shadow-[0_0_8px_rgba(6,182,212,0.9)]
  after:transition-all after:duration-300
  hover:after:w-4/5 data-[state=open]:after:w-4/5
`;

export default function Navbar() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 px-3 sm:px-4 max-w-full">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between rounded-2xl bg-[#0e1626]/80 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_-10px_rgba(6,182,212,0.3)] px-4 sm:px-6 py-2.5">


        <div className="flex items-center">
          <Link href="/" className="inline-block hover:opacity-85 transition-opacity">
            <Image
              src="/logo-sadid.svg"
              alt="سدید پلیمر"
              width={130}
              height={36}
              className="w-28 sm:w-36 h-auto object-contain"
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  {link.items ? (
                    <>
                      <NavigationMenuTrigger className={navItemStyles}>
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-48 p-2 bg-[#0e1626]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl">
                          {link.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="block px-3 py-2 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-lg text-sm text-slate-300 transition-all"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={link.href!} className={navItemStyles}>
                      {link.title}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href={`tel:${company.phone}`}
            className="flex items-center text-slate-300 gap-2 hover:text-cyan-400 transition-colors text-sm font-medium"
            dir="ltr"
          >
            <Phone size={16} className="text-cyan-400" />
            {company.phoneDisplay || company.phone}
          </a>

          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className="bg-[image:var(--background-image-brand-blue-gradient)] text-white shadow-md shadow-cyan-500/20 hover:opacity-90 transition-opacity font-semibold"
          >
            استعلام قیمت
          </Button>
        </div>
        <div className="flex items-center md:hidden">
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
