'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, View } from '@react-three/drei';
import BackgroundShader from './BackgroundShader';
import { Suspense } from 'react';

export default function Scene({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                dpr={[1, 2]} // Optimization for high DPI screens
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <Environment preset="studio" />
                    <BackgroundShader />
                    <View.Port />
                    {children}
                </Suspense>
            </Canvas>
        </div>
    );
}
