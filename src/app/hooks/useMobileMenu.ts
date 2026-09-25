import { useCallback, useState } from "react";

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (!next) setOpenSubmenu(null); 
      return next;
    });
  }, []);

  const toggleSubmenu = useCallback(
    (key: string) => {
      if (!isOpen) return; 
      setOpenSubmenu((prev) => (prev === key ? null : key));
    },
    [isOpen]
  );

  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  return {
    isOpen,
    setIsOpen, 
    openMenu,
    toggleMenu,
    closeMenu,
    openSubmenu,
    toggleSubmenu,
    setOpenSubmenu, 
  };
}
