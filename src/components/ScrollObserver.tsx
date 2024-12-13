'use client';

import { useEffect } from 'react';

export function ScrollObserver() {
    useEffect(() => {
        // Erstelle ein Sentinel-Element am Anfang der Seite
        const sentinel = document.createElement('div');
        sentinel.style.position = 'absolute';
        sentinel.style.top = '0';
        sentinel.style.height = '1px';
        sentinel.style.width = '1px';
        sentinel.style.pointerEvents = 'none';
        document.body.prepend(sentinel);

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Wenn der Sentinel nicht mehr sichtbar ist (also gescrollt wurde)
                if (!entry.isIntersecting) {
                    document.body.classList.add('scroll-down');
                } else {
                    document.body.classList.remove('scroll-down');
                }
            },
            {
                // Beobachte den Sentinel relativ zum Viewport
                threshold: [1.0],
                rootMargin: '0px'
            }
        );

        observer.observe(sentinel);

        return () => {
            observer.disconnect();
            sentinel.remove();
        };
    }, []);

    return null;
} 