import {NavColumn} from '@/config/navigation';
import Link from 'next/link';

interface MegaMenuProps {
    id: string;
    columns: NavColumn[];
    isOpen: boolean;
}

export function MegaMenu({id, columns, isOpen}: MegaMenuProps) {
    if (!isOpen) return null;

    return (
        <div id={id} className="py-6" role="menu">
            <div className="grid grid-cols-3 gap-x-12 gap-y-8">
                {columns.map((column, idx) => (
                    <div key={idx}>
                        <h3 className="font-semibold text-gray-900 mb-3">
                            {column.title}
                        </h3>
                        <ul className="space-y-2.5" role="menu">
                            {column.items.map((item) => (
                                <li key={item.title} role="none">
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-600 hover:text-gray-900 block transition-colors hover:underline"
                                        role="menuitem"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
} 