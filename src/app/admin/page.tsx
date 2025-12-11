import { getSiteSettings } from '@/lib/supabase/queries';
import { updateSiteSettings } from '@/lib/supabase/actions';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
    const settings = await getSiteSettings();

    return (
        <div className="max-w-4xl mx-auto">
            <header className="mb-8">
                <h2 className="text-3xl font-light">Site Settings</h2>
                <p className="text-neutral-400 mt-2">Manage global content.</p>
            </header>

            <form action={updateSiteSettings} className="space-y-8 bg-neutral-950 p-8 border border-neutral-800 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm uppercase tracking-wider text-neutral-500">Hero Title</label>
                        <input
                            name="hero_title"
                            defaultValue={settings?.hero_title}
                            className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded focus:outline-none focus:border-white transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm uppercase tracking-wider text-neutral-500">Hero Subtitle</label>
                        <input
                            name="hero_subtitle"
                            defaultValue={settings?.hero_subtitle}
                            className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded focus:outline-none focus:border-white transition-colors"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider text-neutral-500">About Text</label>
                    <textarea
                        name="about_text"
                        defaultValue={settings?.about_text}
                        rows={4}
                        className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded focus:outline-none focus:border-white transition-colors"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider text-neutral-500">Marquee Text</label>
                    <input
                        name="marquee_text"
                        defaultValue={settings?.marquee_text}
                        className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded focus:outline-none focus:border-white transition-colors"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm uppercase tracking-wider text-neutral-500">Footer CTA</label>
                        <input
                            name="footer_cta"
                            defaultValue={settings?.footer_cta}
                            className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded focus:outline-none focus:border-white transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm uppercase tracking-wider text-neutral-500">Contact Email</label>
                        <input
                            name="contact_email"
                            defaultValue={settings?.contact_email}
                            className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded focus:outline-none focus:border-white transition-colors"
                        />
                    </div>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex justify-end">
                    <button type="submit" className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}
