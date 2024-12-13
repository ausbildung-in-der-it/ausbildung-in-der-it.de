import { Search } from 'lucide-react';
import Link from 'next/link';

export function NavActions() {
  return (
    <div className="flex items-center gap-3">
      <button 
        type="button" 
        className="hidden md:inline-flex p-1.5 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md border border-transparent hover:bg-gray-50 transition-colors items-center gap-1.5"
      >
        <Search className="h-4 w-4" />
        <span className="text-xs text-gray-500 font-medium">⌘K</span>
      </button>

      <Link
        href="/login"
        className="hidden md:inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Anmelden
      </Link>
    </div>
  );
} 