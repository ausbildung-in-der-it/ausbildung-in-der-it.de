import { LayoutProps } from './types';

export default function OverviewLayout({ children, title, blocks }: LayoutProps) {
    return (
        <main className="pt-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight mb-8">{title}</h1>
                {children}
            </div>
        </main>
    );
} 