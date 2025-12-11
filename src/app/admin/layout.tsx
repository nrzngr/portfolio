import Link from 'next/link';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-neutral-900 text-white font-sans">
            <aside className="w-64 bg-black border-r border-neutral-800 p-6 flex flex-col">
                <h1 className="text-xl font-bold mb-8 tracking-widest uppercase">Admin</h1>
                <nav className="flex-1 flex flex-col gap-4">
                    <Link href="/admin" className="text-neutral-400 hover:text-white transition-colors">
                        Site Settings
                    </Link>
                    <Link href="/admin/projects" className="text-neutral-400 hover:text-white transition-colors">
                        Projects
                    </Link>
                    <Link href="/admin/experiences/new" className="text-neutral-400 hover:text-white transition-colors">
                        Add Experience
                    </Link>
                    <Link href="/admin/certifications/new" className="text-neutral-400 hover:text-white transition-colors">
                        Add Certification
                    </Link>
                </nav>
                <div className="mt-auto">
                    <Link href="/" className="text-sm text-neutral-500 hover:text-white transition-colors">
                        View Site &rarr;
                    </Link>
                </div>
            </aside>
            <main className="flex-1 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
