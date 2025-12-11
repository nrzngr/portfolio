import { createCertification } from '@/lib/supabase/actions';
import Link from 'next/link';

export default function NewCertificationPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <header className="mb-8 flex justify-between items-center">
                <h2 className="text-3xl font-light">Add New Certification</h2>
                <Link href="/admin/projects" className="text-neutral-500 hover:text-white">Cancel</Link>
            </header>

            <form action={createCertification} className="space-y-6 bg-neutral-950 p-8 border border-neutral-800 rounded-xl">
                <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider text-neutral-500">Name</label>
                    <input name="name" required className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded text-white" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider text-neutral-500">Issuer</label>
                    <input name="issuer" required className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded text-white" />
                </div>
                <button type="submit" className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-200">
                    Create Certification
                </button>
            </form>
        </div>
    );
}
