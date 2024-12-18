import { Container } from "../layout/Container";
import { MegaMenu } from "./MegaMenu";
import { navItems } from "@/config/navigation";

interface MegaMenuContainerProps {
  openMegaMenu: string | null;
  setOpenMegaMenu: (id: string | null) => void;
}

export function MegaMenuContainer({ openMegaMenu, setOpenMegaMenu }: MegaMenuContainerProps) {
  const activeMegaMenu = navItems.find((item) => item.megaMenu?.id === openMegaMenu)?.megaMenu;

  if (!activeMegaMenu) return null;

  return (
    <div
      className="absolute inset-x-0 shadow-lg bg-gray-50"
      role="region"
      aria-label="Mega-Menu"
      onMouseEnter={() => setOpenMegaMenu(activeMegaMenu.id)}
      onMouseLeave={() => setOpenMegaMenu(null)}
    >
      <Container>
        <MegaMenu id={activeMegaMenu.id} columns={activeMegaMenu.columns} isOpen={true} />
      </Container>
    </div>
  );
}
