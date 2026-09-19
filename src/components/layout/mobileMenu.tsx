"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface NavLink {
  title: string;
  href?: string;
  items?: { title: string; href: string }[];
}

interface MobileMenuProps {
  navLinks: NavLink[];
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <div className="flex items-center md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-200 hover:text-white hover:bg-white/10"
              aria-label="منو"
            >
              <Menu className="size-6" />
            </Button>
          }
        />

        <SheetContent
          side="top"
          showCloseButton={false}
          className="h-full w-full border-none bg-[#0a1220]/95 backdrop-blur-2xl p-0 flex flex-col z-[100]"
        >
          <div className="flex w-full items-center justify-between p-6 border-b border-white/10">
            <span className="text-sm font-semibold text-cyan-400">منوی سایت</span>
            <SheetClose
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="text-slate-300 hover:text-white hover:bg-white/10"
                  aria-label="بستن منو"
                >
                  <X className="size-6" />
                </Button>
              }
            />
          </div>
          <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-2">
            {navLinks?.map((link) => (
              <div key={link.title} className="border-b border-white/5 py-4">
                {link.items ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleSubmenu(link.title)}
                      className="flex w-full items-center justify-between text-right text-base font-medium text-slate-200 transition-colors hover:text-cyan-400"
                    >
                      <span>{link.title}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          openSubmenu === link.title
                            ? "rotate-180 text-cyan-400"
                            : "text-slate-400"
                        }`}
                      />
                    </button>

                    {openSubmenu === link.title && (
                      <div className="mt-3 pr-4 flex flex-col gap-3">
                        {link.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-slate-400 hover:text-cyan-300 py-1 transition-colors"
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
                    onClick={() => setIsOpen(false)}
                    className="block text-right text-base font-medium text-slate-200 transition-colors hover:text-cyan-400"
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="p-6 pb-8 border-t border-white/5">
            <SheetClose
              render={
                <Button
                  nativeButton={false}
                  render={<Link href="/contact" onClick={() => setIsOpen(false)} />}
                  variant="default"
                  size="lg"
                  className="w-full h-12 text-base font-semibold shadow-lg shadow-cyan-500/20 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 text-white flex items-center justify-center gap-2"
                >
                  <Phone className="size-5 ml-2" />
                  <span>استعلام قیمت و مشاوره</span>
                </Button>
              }
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
