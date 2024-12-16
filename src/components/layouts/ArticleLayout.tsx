import { LayoutProps } from './types';
import TableOfContents from '@/components/blocks/TableOfContents';
import { Heading } from "@/components/ui/typography";
import { BaseBlock } from '@/components/blocks/types';
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";

const WORDS_PER_MINUTE = 200;

function countWords(text: string): number {
    return text.trim().split(/\s+/).length;
}

function calculateReadingTime(blocks: BaseBlock[]): string {
    const totalWords = blocks
        .filter(block => !block.isHidden && (block.type === 'text' || block.type === 'heading'))
        .reduce((acc, block) => {
            const text = block.content.text || '';
            return acc + countWords(text);
        }, 0);

    const minutes = Math.ceil(totalWords / WORDS_PER_MINUTE);
    return `${minutes} Minuten Lesezeit`;
}

export default function ArticleLayout({ 
    children, 
    title, 
    blocks, 
    lastModified
}: LayoutProps) {
    const readingTime = calculateReadingTime(blocks);
    const formattedDate = lastModified ? formatDate(lastModified) : undefined;

    return (
        <main className={"lg:pt-8"}>
            <div className={"max-w-[65ch] mx-auto text-lg mt-8 lg:mt-12"}>
                <div className={"flex items-center justify-start text-base mb-3"}>
                    {formattedDate && <span className={"pr-3 leading-none"}>Zuletzt aktualisiert am {formattedDate}</span>}
                    <span className={cn(
                        "leading-none",
                        formattedDate && "border-l border-black pl-3"
                    )}>{readingTime}</span>
                </div>
                <Heading level={1}>{title}</Heading>
            </div>

            <div className={"lg:mt-3 gap-3"}>
                <div lang={"de"}
                     className="mx-auto col-span-4 prose prose-p:leading-relaxed prose-h2:mb-0 text-black prose-lg break-words hyphens-auto">
                    {children}
                </div>
            </div>
        </main>
    );
} 