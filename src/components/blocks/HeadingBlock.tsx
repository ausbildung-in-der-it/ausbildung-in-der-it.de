import { HeadingBlock } from './types';
import { cn } from '@/lib/utils';

const headingStyles = {
  h1: 'scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl',
  h2: 'scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0',
  h3: 'scroll-m-20 text-xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-lg font-semibold tracking-tight',
  h5: 'scroll-m-20 text-base font-semibold tracking-tight',
  h6: 'scroll-m-20 text-base font-semibold tracking-tight',
};

// Add extra scroll margin to account for fixed navigation
const SCROLL_MARGIN = 'scroll-mt-24'; // 96px = navigation height + extra padding

export default function HeadingBlockComponent({ block }: { block: HeadingBlock }) {
  const { level, text } = block.content;
  const Component = level;

  return (
    <Component 
      id={block.id}
      className={cn(
        headingStyles[level],
        SCROLL_MARGIN,
        'mt-8 mb-4 first:mt-0'
      )}
    >
      {text}
    </Component>
  );
} 