'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero({ title = "Creative Developer", subtitle = "Interaction • WebGL • Design" }: { title?: string, subtitle?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        if (!titleRef.current) return;

        const timeline = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.5 } });

        timeline
            .fromTo(
                '.hero-text-line',
                { y: '100%' },
                { y: '0%', stagger: 0.1 }
            )
            .fromTo(
                '.hero-sub',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1 },
                '-=1'
            );

    }, { scope: containerRef });

    // Split title into words for the layout
    const words = title.split(' ');

    return (
        <section ref={containerRef} className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden px-4">
            <div className="z-10 text-center mix-blend-exclusion text-white">
                <h1 ref={titleRef} className="text-[10vw] md:text-[8vw] leading-[0.9] font-black uppercase tracking-tighter mix-blend-difference">
                    {words.map((word, i) => (
                        <div key={i} className="overflow-hidden">
                            <span className="hero-text-line block">{word}</span>
                        </div>
                    ))}
                </h1>
                <p className="hero-sub mt-8 text-lg md:text-xl font-light tracking-widest uppercase opacity-0 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            </div>
        </section>
    );
}
