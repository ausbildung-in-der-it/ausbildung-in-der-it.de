import { notFound } from 'next/navigation';
import BlockRenderer from '@/components/blocks/BlockRenderer';
import { BaseBlock } from '@/components/blocks/types';
import LayoutRenderer from '@/components/layouts/LayoutRenderer';
import { getPageData, getAllPages } from '@/lib/api';

export async function generateStaticParams() {
    const allPages = await getAllPages();
    
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

    const blocks: BaseBlock[] = data.content.blocks ? JSON.parse(data.content.blocks) : [];

    return (
        <LayoutRenderer 
            layout={data.content.layout}
            title={data.content.title}
            blocks={blocks}
            lastModified={data.lastModified}
        >
            <BlockRenderer blocks={blocks} />
        </LayoutRenderer>
    );
}
