import { notFound } from 'next/navigation';
import BlockRenderer from '@/components/blocks/BlockRenderer';
import { BaseBlock } from '@/components/blocks/types';
import LayoutRenderer from '@/components/layouts/LayoutRenderer';
import { LayoutType } from '@/components/layouts/types';

// Typen für die API-Daten
interface PageData {
    title: string;
    slug: string;
    breadcrumb: string[];
    content: {
        title: string;
        text: string;
        blocks: string;
        uuid: string;
        layout: "article" | "overview";
    };
    children: string[];
    layout?: LayoutType;
}

async function getPageData(slugParts: string[]): Promise<PageData | null> {
    const path = slugParts.join('/');
    const res = await fetch(`http://localhost:8000/api/page?path=${path}`, {
        headers: {
            "Authorization": `Basic ${btoa("api@ausbildung-in-der-it.de:test1234")}`
        },
        // Optional: ISR/On-Demand Revalidation durch `revalidate`-Option ermöglichen
        next: { revalidate: 60 }
    });

    if (!res.ok) {
        return null;
    }

    return res.json();
}

// Statische Pfade generieren (Alle möglichen Routen aus Kirby holen)
export async function generateStaticParams() {
    const res = await fetch('http://localhost:8000/api/all-pages', {
        headers: {
            "Authorization": `Basic ${btoa("api@ausbildung-in-der-it.de:test1234")}`,
        }
    });

    console.log(res);

    if (!res.ok) return [];

    const allPages: string[] = await res.json();

    return allPages.map(path => {
        const parts = path.split('/');
        return { slug: parts };
    });
}

export default async function Page({ params }: { params: { slug: string[] } }) {
    const data = await getPageData(params.slug);

    if (!data) {
        notFound();
    }

    // Parse the content string into blocks
    const blocks: BaseBlock[] = data.content.blocks ? JSON.parse(data.content.blocks) : [];

    return (
        <LayoutRenderer 
            layout={data.content.layout}
            title={data.content.title}
            blocks={blocks}
        >
            <BlockRenderer blocks={blocks} />
        </LayoutRenderer>
    );
}
