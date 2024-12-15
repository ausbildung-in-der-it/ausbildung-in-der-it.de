import { lazy, Suspense } from 'react';
import { BaseBlock, BlockRegistry } from './types';

// Lazy load block components
const TextBlock = lazy(() => import('./TextBlock'));
const CodeBlock = lazy(() => import('./CodeBlock'));
const HeadingBlock = lazy(() => import('./HeadingBlock'));
const CardsBlock = lazy(() => import('./CardsBlock'));
const VideoBlock = lazy(() => import('./VideoBlock'));

// Registry of available blocks
const blockRegistry: BlockRegistry = {
  text: TextBlock,
  code: CodeBlock,
  heading: HeadingBlock,
  cards: CardsBlock,
  video: VideoBlock,
};

interface BlockRendererProps {
  blocks: BaseBlock[];
}

export default function BlockRenderer({ blocks }: BlockRendererProps) {
  return (
    <div>
      {blocks.map((block) => {
        if (block.isHidden) return null;

        const Component = blockRegistry[block.type];
        if (!Component) {
          console.warn(`No component found for block type: ${block.type}`);
          return null;
        }

        return (
          <Suspense 
            key={block.id} 
            fallback={<div className="animate-pulse h-24 bg-gray-100 rounded" />}
          >
            <Component block={block} />
          </Suspense>
        );
      })}
    </div>
  );
} 