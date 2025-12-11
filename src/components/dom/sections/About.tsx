'use client';

import Marquee from '@/components/animation/Marquee';

export default function About({ text, marquee }: { text: string, marquee: string }) {
    return (
        <section id="about" className="w-full bg-black text-white py-24">
            <Marquee text={marquee} />

            <div className="max-w-4xl mx-auto px-6 mt-24 text-center">
                <p className="text-xl md:text-3xl font-light leading-relaxed text-neutral-300">
                    {text}
                </p>
            </div>
        </section>
    );
}
