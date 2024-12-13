export interface BaseBlock {
  id: string;
  type: string;
  isHidden: boolean;
  content: Record<string, any>;
}

export interface TextBlock extends BaseBlock {
  type: 'text';
  content: {
    text: string;
  };
}

export interface CodeBlock extends BaseBlock {
  type: 'code';
  content: {
    code: string;
    language: string;
  };
}

export interface HeadingBlock extends BaseBlock {
  type: 'heading';
  content: {
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    text: string;
  };
}

export type BlockTypes = TextBlock | CodeBlock | HeadingBlock;

export type BlockComponent<T extends BaseBlock> = React.ComponentType<{
  block: T;
}>;

export interface BlockRegistry {
  [key: string]: BlockComponent<any>;
} 