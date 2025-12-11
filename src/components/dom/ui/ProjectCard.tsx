'use client';

import Link from 'next/link';
import { Project } from '@/lib/supabase/queries';

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block h-[300px] w-full bg-neutral-900/50 border border-neutral-800 p-8 flex flex-col justify-between hover:bg-neutral-900 transition-all duration-500 rounded-xl"
        >
            <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    {project.tags?.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs text-neutral-500 uppercase tracking-wider font-mono">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                    {project.title}
                </h3>
                {project.description && (
                    <p className="text-sm text-neutral-400 line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>
                )}
            </div>

            <div className="flex items-center text-sm font-bold uppercase tracking-widest text-white mt-auto">
                <span className="relative overflow-hidden">
                    <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                        View Project
                    </span>
                    <span className="absolute top-0 left-0 block transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-neutral-400">
                        Read Case Study
                    </span>
                </span>
                <span className="ml-2 transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
            </div>
        </Link>
    );
}
