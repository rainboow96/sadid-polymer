"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMobileMenu } from "../../app/hooks/useMobileMenu"; 

export interface NavLink {
  title: string;
  href?: string;
  items?: { title: string; href: string }[];
}

interface MobileMenuProps {
  navLinks: NavLink[];
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
  const {
    isOpen,
    setIsOpen,
    openSubmenu,
    toggleSubmenu,
    closeMenu,
  } = useMobileMenu();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 p-1.5 h-9 w-9 flex items-center justify-center rounded-lg border border-white/10"
            aria-label="منو"
          >
            <Menu className="w-5 h-5 text-cyan-400" />
          </Button>
        }
      />

      <SheetContent
        side="top"
        showCloseButton={false}
        className="h-[100dvh] w-full border-none bg-[#0a1220] p-0 flex flex-col z-[9999]"
      >
        <div className="flex w-full items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center">
            <Link
              href="/"
              onClick={closeMenu}
              className="inline-block hover:opacity-85 transition-opacity"
            >
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

          <SheetClose
            render={
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-white h-9 w-9 rounded-lg border border-white/10 flex items-center justify-center"
                aria-label="بستن"
              >
                <X className="w-5 h-5 text-slate-300" />
              </Button>
            }
          />
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto px-5 py-4 divide-y divide-white/5">
          {navLinks?.map((link) => (
            <div key={link.title} className="py-3">
              {link.items ? (
                <div>
                  <button
                    type="button"
                    onClick={() => toggleSubmenu(link.title)}
                    className="flex w-full items-center justify-between text-right text-base font-medium text-slate-200"
                  >
                    <span>{link.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        openSubmenu === link.title ? "rotate-180 text-cyan-400" : ""
                      }`}
                    />
                  </button>

                  {openSubmenu === link.title && (
                    <div className="mt-2.5 pr-3 flex flex-col gap-2 border-r-2 border-cyan-500/30">
                      {link.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={closeMenu}
                          className="block text-sm text-slate-400 hover:text-cyan-300 py-1.5 transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href || "#"}
                  onClick={closeMenu}
                  className="block text-right text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10 bg-[#070c16]">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/25"
          >
            <Phone className="w-5 h-5" />
            <span>استعلام قیمت و مشاوره</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
