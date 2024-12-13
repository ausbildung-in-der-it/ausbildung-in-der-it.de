import Link from 'next/link';

export function NavLogo() {
    return (
        <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-semibold text-white tracking-tight hover:underline">
                Ausbildung in der IT
            </Link>
        </div>
    );
} 