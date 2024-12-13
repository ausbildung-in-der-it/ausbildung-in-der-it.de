import { TextBlock } from './types';
import parse from 'html-react-parser';

export default function TextBlockComponent({ block }: { block: TextBlock }) {
  return parse(block.content.text);
} 