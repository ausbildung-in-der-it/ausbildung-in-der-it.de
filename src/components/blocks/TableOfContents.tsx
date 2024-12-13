'use client';

import { BaseBlock, HeadingBlock } from './types';
import { cn } from '@/lib/utils';
import { useEffect, useState, useCallback } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface TocItem {
  id: string;
  text: string;
  level: string;
}

interface TableOfContentsProps {
  blocks: BaseBlock[];
}

function TableOfContentsInner({ blocks }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  // Extract headings from blocks
  const headings = blocks
    .filter((block): block is HeadingBlock => 
      block.type === 'heading' && !block.isHidden
    )
    .map(block => ({
      id: block.id,
      text: block.content.text,
      level: block.content.level,
    }));

  const getHeadingBounds = useCallback(() => {
    return headings.map(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return null;
      const { top } = element.getBoundingClientRect();
      return { id, top };
    }).filter((item): item is { id: string; top: number } => item !== null);
  }, [headings]);

  // Intersection Observer for active heading
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const bounds = getHeadingBounds();
      const navHeight = 56; // Height of the navigation bar
      
      // Find the first heading that's either above the nav bar or closest to it
      const active = bounds.reduce((nearest, current) => {
        if (current.top <= navHeight) {
          // If this heading is above the nav, prefer it if it's closer to the nav
          return !nearest || current.top > nearest.top ? current : nearest;
        } else if (!nearest || nearest.top > navHeight) {
          // If no heading is above the nav yet, prefer the one closest to the top
          return !nearest || current.top < nearest.top ? current : nearest;
        }
        return nearest;
      }, null as { id: string; top: number } | null);

      setActiveId(active?.id || headings[0]?.id || '');
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings, getHeadingBounds]);

  const scrollToHeading = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const navHeight = 56; // Height of the navigation bar
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navHeight - 24; // Additional offset for better visibility

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="space-y-1">
      {headings.map((heading) => (
        <a
          key={heading.id}
          href={`#${heading.id}`}
          onClick={(e) => scrollToHeading(e, heading.id)}
          className={cn(
            'block text-sm transition-colors hover:text-foreground/80',
            heading.level === 'h1' && 'pl-0',
            heading.level === 'h2' && 'pl-4',
            heading.level === 'h3' && 'pl-6',
            heading.level === 'h4' && 'pl-8',
            heading.level === 'h5' && 'pl-10',
            heading.level === 'h6' && 'pl-12',
            activeId === heading.id
              ? 'font-medium text-foreground'
              : 'text-foreground/60'
          )}
        >
          {heading.text}
        </a>
      ))}
    </nav>
  );
}

function FallbackComponent() {
  return (
    <div className="text-sm text-muted-foreground">
      Inhaltsverzeichnis konnte nicht geladen werden
    </div>
  );
}

export default function TableOfContents(props: TableOfContentsProps) {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <TableOfContentsInner {...props} />
    </ErrorBoundary>
  );
} 