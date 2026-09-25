"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 p-1.5 text-white hover:bg-white/10"
            aria-label="منو"
          >
            <Menu className="h-5 w-5 text-cyan-400" />
          </Button>
        }
      />

      <SheetContent
        side="top"
        showCloseButton={false}
        className="z-[9999] flex h-dvh w-full flex-col border-none bg-[#0a1220] p-0"
      >
        <div className="flex w-full items-center justify-between border-b border-white/10 p-4">
          <div className="flex items-center">
            <Link
              href="/"
              onClick={closeMenu}
              className="inline-block transition-opacity hover:opacity-85"
            >
              <Image
                src="/logo-sadid.svg"
                alt="سدید پلیمر"
                width={130}
                height={36}
                className="h-auto w-28 object-contain sm:w-36"
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
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:text-white"
                aria-label="بستن"
              >
                <X className="h-5 w-5 text-slate-300" />
              </Button>
            }
          />
        </div>

        <nav className="flex flex-1 flex-col divide-y divide-white/5 overflow-y-auto px-5 py-4">
          {navLinks.map((link) => (
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
                      className={cn(
                        "h-4 w-4 text-slate-400 transition-transform duration-200",
                        openSubmenu === link.title && "rotate-180 text-cyan-400"
                      )}
                    />
                  </button>

                  {openSubmenu === link.title && (
                    <div className="mt-2.5 flex flex-col gap-2 border-s-2 border-cyan-500/30 ps-3">
                      {link.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={closeMenu}
                          className="block py-1.5 text-sm text-slate-400 transition-colors hover:text-cyan-300 text-right"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href ?? "#"}
                  onClick={closeMenu}
                  className="block text-right text-base font-medium text-slate-200 transition-colors hover:text-cyan-400"
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="border-t border-white/10 bg-[#070c16] p-4">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-opacity hover:opacity-95"
          >
            <Phone className="h-5 w-5" />
            <span>استعلام قیمت و مشاوره</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}