import { Container } from '../layout/Container';
import { MegaMenu } from './MegaMenu';
import { navItems } from '@/config/navigation';

interface MegaMenuContainerProps {
  openMegaMenu: string | null;
}

export function MegaMenuContainer({ openMegaMenu }: MegaMenuContainerProps) {
  const activeMegaMenu = navItems.find(item => item.megaMenu?.id === openMegaMenu)?.megaMenu;

  if (!activeMegaMenu) return null;

  return (
    <div 
      className="absolute inset-x-0 shadow-lg bg-gray-50"
      role="region"
      aria-label="Mega-Menu"
    >
      <Container>
        <MegaMenu
          id={activeMegaMenu.id}
          columns={activeMegaMenu.columns}
          isOpen={true}
        />
      </Container>
    </div>
  );
} 