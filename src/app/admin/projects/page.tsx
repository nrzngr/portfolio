import { getProjects } from '@/lib/supabase/queries';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminProjects() {
    const projects = await getProjects();

    return (
        <div className="max-w-5xl mx-auto">
            <header className="mb-8 flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-light">Projects</h2>
                    <p className="text-neutral-400 mt-2">Manage your work portfolio.</p>
                </div>
                <Link
                    href="/admin/projects/new"
                    className="px-6 py-2 bg-white text-black font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
                >
                    Add New
                </Link>
            </header>

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-neutral-900 text-neutral-400 uppercase text-xs tracking-wider">
                        <tr>
                            <th className="p-4">Title</th>
                            <th className="p-4">Tags</th>
                            <th className="p-4">Date</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800">
                        {projects.map((project) => (
                            <tr key={project.id} className="hover:bg-neutral-900/50 transition-colors">
                                <td className="p-4 font-medium">{project.title}</td>
                                <td className="p-4 text-neutral-400 text-sm">
                                    {project.tags ? project.tags.join(', ') : '-'}
                                </td>
                                <td className="p-4 text-neutral-500 text-sm">
                                    {new Date(project.created_at).toLocaleDateString()}
                                </td>
                                <td className="p-4 text-right">
                                    <Link
                                        href={`/admin/projects/${project.id}`}
                                        className="text-neutral-400 hover:text-white mr-4"
                                    >
                                        Edit
                                    </Link>
                                    {/* Delete button would go here */}
                                </td>
                            </tr>
                        ))}
                        {projects.length === 0 && (
                            <tr>
                                <td colSpan={4} className="p-8 text-center text-neutral-500">
                                    No projects found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
