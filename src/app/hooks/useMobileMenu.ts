import { useState } from "react";

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu((prev) => (prev === title ? null : title));
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    setIsOpen,
    openSubmenu,
    toggleSubmenu,
    closeMenu,
  };
}
