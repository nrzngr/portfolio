'use client';

import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/canvas/Scene'), {
    ssr: false,
    loading: () => null
});
const FloatingShape = dynamic(() => import('@/components/canvas/FloatingShape'), { ssr: false });

export default function LazyScene() {
    return (
        <Scene>
            <FloatingShape />
        </Scene>
    );
}
