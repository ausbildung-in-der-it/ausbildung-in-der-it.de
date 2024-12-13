import {ChevronDown} from 'lucide-react';
import {cn} from '@/lib/utils';

interface NavMenuButtonProps {
    title: string;
    isOpen: boolean;
    menuId: string;
    onClick: () => void;
}

export function NavMenuButton({title, isOpen, menuId, onClick}: NavMenuButtonProps) {
    return (
        <button
            type="button"
            className={cn(
                "inline-flex items-center px-3 py-1.5 text-sm font-medium text-white",
                "focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2",
                "rounded-md border border-transparent transition-colors",
                "hover:underline"
            )}
            onClick={onClick}
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-haspopup="true"
            role="menuitem"
        >
            {title}
            <ChevronDown
                className={cn(
                    "ml-1.5 h-4 w-4 transition-transform duration-200",
                    isOpen && "rotate-180"
                )}
                aria-hidden="true"
            />
        </button>
    );
} 