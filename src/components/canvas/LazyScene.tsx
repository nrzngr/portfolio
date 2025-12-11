'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const Scene = dynamic(() => import('@/components/canvas/Scene'), {
    ssr: false,
    loading: () => null
});
const FloatingShape = dynamic(() => import('@/components/canvas/FloatingShape'), { ssr: false });

export default function LazyScene() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Delay 3D load by 1.5s to let Hero text animate smoothly first
        const timer = setTimeout(() => setMounted(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) return null;

    return (
        <Scene>
            <FloatingShape />
        </Scene>
    );
}
