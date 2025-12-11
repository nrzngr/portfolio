'use client';

import { Certification } from '@/lib/supabase/queries';

export default function CertificationsSection({ items }: { items: Certification[] }) {
    if (!items || items.length === 0) return null;

    return (
        <section className="w-full py-24 px-4 bg-black text-white border-t border-neutral-900">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-sm font-light uppercase tracking-[0.2em] text-neutral-500 mb-12">
                    Certifications
                </h2>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {items.map((cert) => (
                        <div
                            key={cert.id}
                            className="px-6 py-4 border border-neutral-800 rounded bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300 flex flex-col items-center gap-2"
                        >
                            <span className="font-bold text-neutral-200 text-sm md:text-base">
                                {cert.name}
                            </span>
                            <span className="text-xs text-neutral-500 uppercase tracking-wider">
                                {cert.issuer}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
