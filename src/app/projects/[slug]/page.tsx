import { getProjectBySlug, getProjects } from '@/lib/supabase/queries';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Generate static params for all projects
export async function generateStaticParams() {
    const projects = await getProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export const dynamic = 'force-static';

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = await getProjectBySlug(params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            {/* Header / Nav Back */}
            <nav className="absolute top-32 w-full px-8 z-50 mix-blend-difference">
                <Link href="/" className="text-sm font-bold uppercase tracking-widest hover:underline decoration-white/50 underline-offset-4">
                    &larr; Back to Index
                </Link>
            </nav>

            {/* Hero Section */}
            <section className="relative w-full min-h-[60vh] flex flex-col justify-end p-4 md:p-20 border-b border-neutral-900">
                <div className="max-w-5xl">
                    <div className="flex flex-wrap gap-3 mb-6">
                        {project.tags?.map(tag => (
                            <span key={tag} className="text-xs border border-white/20 text-neutral-400 px-2 py-1 rounded-full uppercase tracking-wider font-mono">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-white leading-[0.9]">
                        {project.title}
                    </h1>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-20 text-sm uppercase tracking-widest text-neutral-500 border-t border-dashed border-neutral-800 pt-8 w-full md:w-auto">
                        <div>
                            <span className="block text-neutral-700 mb-1">Role</span>
                            <span className="text-white block">{project.role || 'Developer'}</span>
                        </div>
                        {/* Dates not currently in project schema, hiding for now or using created_at */}
                        <div>
                            <span className="block text-neutral-700 mb-1">Created</span>
                            <span className="text-white block">{new Date(project.created_at).getFullYear()}</span>
                        </div>
                        {project.url && (
                            <div>
                                <span className="block text-neutral-700 mb-1">Live Site</span>
                                <a href={project.url} target="_blank" className="text-white hover:underline decoration-white/50 block decoration-2">
                                    View Project &uarr;
                                </a>
                            </div>
                        )}
                        {project.github && (
                            <div>
                                <span className="block text-neutral-700 mb-1">Source</span>
                                <a href={project.github} target="_blank" className="text-white hover:underline decoration-white/50 block decoration-2">
                                    GitHub &uarr;
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-4 py-20 md:p-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Left: Description */}
                <div className="md:col-span-5 space-y-12">
                    <div className="prose prose-invert prose-lg">
                        <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4">Overview</h3>
                        <p className="text-neutral-300 font-light leading-relaxed text-xl">
                            {project.description}
                        </p>
                    </div>

                    {project.impact && (
                        <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl">
                            <h4 className="text-sm font-mono uppercase tracking-widest text-blue-400 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" /> Impact
                            </h4>
                            <p className="text-white font-medium text-lg leading-relaxed">
                                {project.impact}
                            </p>
                        </div>
                    )}
                </div>

                {/* Right: Gallery substitute or detailed tech stack */}
                <div className="md:col-span-7 space-y-8">
                    {/* Gallery currently only has text array in our schema or main_image */}
                    {/* We could render dummy gallery placeholders or if we have array of images */}
                    <div className="aspect-video w-full bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center text-neutral-700 font-mono text-sm uppercase tracking-widest">
                        {project.main_image ? (
                            <img
                                src={project.main_image}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-lg opacity-50 hover:opacity-100 transition-opacity"
                                // Add Fetch Priority High for LCP
                                style={{ contentVisibility: 'auto' }}
                            />
                        ) : 'Project Preview Image'}
                    </div>
                </div>
            </section>
        </main>
    );
}
