import { ComponentType } from 'react';

interface Card {
  title: string;
  url: string;
}

export interface BaseBlock {
  id: string;
  type: 'text' | 'code' | 'heading' | 'cards';
  isHidden: boolean;
  content: {
    text?: string;
    language?: string;
    level?: number;
    cards?: Card[];
  };
}

export type BlockRegistry = {
  [key in BaseBlock['type']]?: ComponentType<{ block: BaseBlock }>;
}; 