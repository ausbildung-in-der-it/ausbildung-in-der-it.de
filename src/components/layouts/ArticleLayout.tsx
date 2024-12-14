import { LayoutProps } from './types';
import TableOfContents from '@/components/blocks/TableOfContents';

export default function ArticleLayout({ children, title, blocks, date = '14. Dezember 2024', readingTime = '2 Minuten Lesezeit' }: LayoutProps) {
    return (
        <main className={"lg:pt-8"}>
            <div className={"max-w-[65ch] mx-auto text-lg mt-8 lg:mt-12"}>
                <div className={"flex items-center justify-start text-base mb-3"}>
                    <span className={"pr-3 leading-none"}>{date}</span>
                    <span className={"border-l leading-none border-black pl-3"}>{readingTime}</span>
                </div>
                <h1 className={"text-2xl lg:text-4xl font-bold tracking-tight"}>{title}</h1>
            </div>

            <div className={"lg:mt-3 gap-3"}>
                <div lang={"de"}
                     className="mx-auto col-span-4 prose prose-p:leading-relaxed  prose-h2:mb-0 text-black prose-lg break-words hyphens-auto">
                    {children}
                </div>
                {/* <div className="col-span-2 space-y-3">
                    <div className="bg-white border rounded p-3 sticky top-16">
                        <h2 className={"text-lg font-bold tracking-tight mb-2"}>Inhaltsverzeichnis</h2>
                        <TableOfContents blocks={blocks} />
                    </div>
                </div> */}
            </div>
        </main>
    );
} 