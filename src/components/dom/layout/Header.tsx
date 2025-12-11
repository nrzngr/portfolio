'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-exclusion text-white pointer-events-none">
            <Link href="/" className="text-xl font-bold tracking-tighter pointer-events-auto">
                NRZNGR
            </Link>

            <nav className="flex gap-6 pointer-events-auto">
                <Link href="#work" className="text-sm uppercase tracking-widest hover:underline decoration-1 underline-offset-4">
                    Work
                </Link>
                <Link href="#about" className="text-sm uppercase tracking-widest hover:underline decoration-1 underline-offset-4">
                    About
                </Link>
                <Link href="#contact" className="text-sm uppercase tracking-widest hover:underline decoration-1 underline-offset-4">
                    Contact
                </Link>
            </nav>
        </header>
    );
}
