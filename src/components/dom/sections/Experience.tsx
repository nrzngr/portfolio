'use client';

import { Experience } from '@/lib/supabase/queries';

export default function ExperienceSection({ items }: { items: Experience[] }) {
    if (!items || items.length === 0) return null;

    return (
        <section className="relative w-full py-24 px-4 bg-neutral-950 text-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold uppercase tracking-tighter mb-16 text-center text-neutral-200">
                    Experience
                </h2>

                <div className="space-y-16">
                    {items.map((exp) => (
                        <div key={exp.id} className="group relative border-l border-neutral-800 pl-8 md:pl-12 py-2">
                            <span className="absolute -left-[5px] top-3 w-2.5 h-2.5 bg-neutral-800 rounded-full group-hover:bg-white transition-colors duration-300" />

                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {exp.company}
                                </h3>
                                <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest mt-1 md:mt-0">
                                    {exp.date_range}
                                </span>
                            </div>

                            <h4 className="text-lg text-neutral-400 mb-6 font-medium">
                                {exp.role}
                            </h4>

                            {exp.description && (
                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-neutral-400 leading-relaxed text-sm md:text-base flex items-start gap-3">
                                            <span className="mt-2 w-1 h-1 bg-neutral-600 rounded-full shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
