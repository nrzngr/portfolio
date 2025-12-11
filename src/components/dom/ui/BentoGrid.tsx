'use client';

import { Project } from '@/lib/supabase/queries';
import ProjectCard from './ProjectCard';

export default function BentoGrid({ projects }: { projects: Project[] }) {
    if (!projects || projects.length === 0) {
        return <div className="text-center py-20 text-neutral-500">No projects found. Add them to Supabase!</div>;
    }

    return (
        <section className="w-full px-4 py-20 max-w-7xl mx-auto">
            <h2 className="text-neutral-400 text-sm font-mono mb-8 uppercase tracking-widest border-b border-neutral-800 pb-4">Selected Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
