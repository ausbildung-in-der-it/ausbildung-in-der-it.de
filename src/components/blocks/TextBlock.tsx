import { TextBlock } from './types';

export default function TextBlockComponent({ block }: { block: TextBlock }) {
  return (
    <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: block.content.text }} />
  );
} 