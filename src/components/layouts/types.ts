import { BaseBlock } from '../blocks/types';

export type LayoutType = 'article' | 'overview';

export interface LayoutProps {
    children: React.ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
    blocks: BaseBlock[];
}

export type LayoutRegistry = {
    [key in LayoutType]: React.ComponentType<LayoutProps>;
}; 