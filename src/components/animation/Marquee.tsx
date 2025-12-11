'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Marquee({ text, repeat = 4 }: { text: string, repeat?: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!textRef.current) return;

        // Clone logic for seamless loop is simpler with just rendering multiple times in storage
        const totalWidth = textRef.current.scrollWidth / 2; // Assuming double rendering for loop

        gsap.to(textRef.current, {
            xPercent: -50,
            ease: 'none',
            duration: 60,
            repeat: -1,
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full overflow-hidden py-12 border-y border-neutral-800 bg-neutral-950">
            <div ref={textRef} className="flex whitespace-nowrap w-fit">
                {/* Render enough copies to cover screen width + buffer */}
                {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i} className="text-8xl md:text-9xl font-black uppercase text-transparent px-8 [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">
                        {text}
                    </span>
                ))}
            </div>
        </div>
    );
}
