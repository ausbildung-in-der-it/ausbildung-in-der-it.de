import { CodeBlock } from './types';

export default function CodeBlockComponent({ block }: { block: CodeBlock }) {
  return (
    <pre className="p-4 bg-zinc-900 rounded-lg overflow-x-auto">
      <code className={`language-${block.content.language}`}>
        {block.content.code}
      </code>
    </pre>
  );
} 