'use client';

export default function Footer({ cta, email }: { cta: string, email: string }) {
    return (
        <footer id="contact" className="w-full bg-neutral-950 text-white py-24 px-6 border-t border-neutral-900">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <p className="text-neutral-500 mb-8 uppercase tracking-widest text-sm">Have an idea?</p>

                <a
                    href={`mailto:${email}`}
                    className="text-[12vw] font-black uppercase leading-none hover:text-neutral-300 transition-colors duration-300 mix-blend-screen"
                >
                    {cta}
                </a>

                <div className="flex gap-8 mt-24 text-neutral-400">
                    {/* Socials updated as requested */}
                    <a href="https://instagram.com/nrzngr._" target="_blank" className="hover:text-white transition-colors">Instagram</a>
                    <a href="https://linkedin.com/in/nrzngr" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://github.com/nrzngr" target="_blank" className="hover:text-white transition-colors">GitHub</a>
                </div>

                <div className="mt-24 text-neutral-700 text-xs uppercase tracking-widest">
                    © {new Date().getFullYear()} Muhammad Ridzki Nugraha. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
