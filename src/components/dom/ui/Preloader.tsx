'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Preloader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [complete, setComplete] = useState(false);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => setComplete(true)
        });

        // Initial state
        tl.set('.preloader-text', { y: '100%' });

        // Text reveal
        tl.to('.preloader-text', {
            y: '0%',
            duration: 1,
            ease: 'power3.out',
            stagger: 0.1
        })
            .to('.preloader-text', {
                y: '-100%',
                duration: 0.8,
                ease: 'power3.in',
                stagger: 0.1,
                delay: 0.5
            })
            // Curtain reveal
            .to(containerRef.current, {
                y: '-100%',
                duration: 1,
                ease: 'power4.inOut'
            });

    }, { scope: containerRef });

    if (complete) return null;

    return (
        <div ref={containerRef} className="fixed inset-0 z-[9999] bg-black text-white flex items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center">
                <div className="overflow-hidden">
                    <span className="preloader-text block text-4xl md:text-6xl font-black uppercase tracking-tighter">
                        NRZNGR
                    </span>
                </div>
                <div className="overflow-hidden mt-2">
                    <span className="preloader-text block text-sm font-mono tracking-widest text-neutral-500">
                        PORTFOLIO 2025
                    </span>
                </div>
            </div>
        </div>
    );
}
