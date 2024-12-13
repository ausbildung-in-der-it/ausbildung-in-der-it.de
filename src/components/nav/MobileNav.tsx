import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { navItems } from '@/config/navigation';
import Link from 'next/link';

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-white">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menü öffnen</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-scroll">
        <nav className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <div key={item.title}>
              {item.megaMenu ? (
                <>
                  <h2 className="font-bold mb-2 flex items-center">
                    {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                    {item.title}
                  </h2>
                  <div className="grid grid-cols-1 gap-2 space-y-4">
                    {item.megaMenu.columns.map((column) => (
                      <div key={column.title} className="space-y-4">
                        <h3 className="text-sm font-semibold">
                          {column.title}
                        </h3>
                        <ul className="space-y-4">
                          {column.items.map((subItem) => (
                            <li key={subItem.title}>
                              <Link
                                href={subItem.href}
                                className="text-sm text-gray-600 hover:text-gray-900 block transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className="block py-2 font-bold flex items-center"
                >
                  {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                  {item.title}
                </Link>
              ) : null}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
