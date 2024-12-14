import { useEffect } from "react";
import { navItems } from "@/config/navigation";
import { NavMenuButton } from "./NavMenuButton";

interface NavMenuProps {
  openMegaMenu: string | null;
  setOpenMegaMenu: (id: string | null) => void;
}

export function NavMenu({ openMegaMenu, setOpenMegaMenu }: NavMenuProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMegaMenu(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [setOpenMegaMenu]);

  const visibleNavItems = navItems.slice(0, 3); // Erste 3 Items für mobile/tablet

  return (
    <div className="hidden md:flex items-center">
      <ul className="flex h-14 items-center" role="menubar">
        {/* Erste 3 Items werden immer angezeigt (ab md) */}
        {visibleNavItems.map((item) => (
          <li key={item.title} role="none" onMouseEnter={() => setOpenMegaMenu(openMegaMenu === item.megaMenu.id ? null : item.megaMenu.id)}>
            {item.megaMenu && <NavMenuButton title={item.title} isOpen={openMegaMenu === item.megaMenu.id} menuId={item.megaMenu.id} />}
          </li>
        ))}

        {/* Restliche Items werden erst ab xl angezeigt */}
        {navItems.slice(3).map((item) => (
          <li
            key={item.title}
            role="none"
            className="hidden xl:block"
            onMouseEnter={() => setOpenMegaMenu(openMegaMenu === item.megaMenu.id ? null : item.megaMenu.id)}
          >
            {item.megaMenu && <NavMenuButton title={item.title} isOpen={openMegaMenu === item.megaMenu.id} menuId={item.megaMenu.id} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
