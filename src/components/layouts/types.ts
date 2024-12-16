import { BaseBlock } from '../blocks/types';

export type LayoutType = 'article' | 'overview';

export interface LayoutProps {
    children: React.ReactNode;
    title: string;
    lastModified?: string;
    blocks: BaseBlock[];
}

export type LayoutRegistry = {
    [key in LayoutType]: React.ComponentType<LayoutProps>;
}; 