import React from 'react';
import { render, screen } from '@testing-library/react';
import HeadingBlock from '../HeadingBlock';
import { HeadingBlock as HeadingBlockType } from '../types';

describe('HeadingBlock', () => {
  const levels: Array<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  levels.forEach((level) => {
    it(`renders ${level} heading correctly`, () => {
      const mockBlock: HeadingBlockType = {
        id: '1',
        type: 'heading',
        isHidden: false,
        content: {
          level,
          text: `This is a ${level} heading`,
        },
      };

      render(<HeadingBlock block={mockBlock} />);
      
      const heading = screen.getByRole('heading', { level: parseInt(level.charAt(1)) });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(`This is a ${level} heading`);
      expect(heading).toHaveClass('scroll-m-20');
    });
  });

  it('applies correct styling based on level', () => {
    const mockBlock: HeadingBlockType = {
      id: '1',
      type: 'heading',
      isHidden: false,
      content: {
        level: 'h2',
        text: 'Test Heading',
      },
    };

    render(<HeadingBlock block={mockBlock} />);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass(
      'scroll-m-20',
      'border-b',
      'pb-2',
      'text-3xl',
      'font-semibold',
      'tracking-tight',
      'first:mt-0'
    );
  });
}); 