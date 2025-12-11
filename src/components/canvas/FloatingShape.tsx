'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as ONE from 'three';

export default function FloatingShape() {
    const meshRef = useRef<ONE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={1}>
            <mesh ref={meshRef} scale={1.2}>
                <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                <MeshTransmissionMaterial
                    backside
                    backsideThickness={5}
                    thickness={2}
                    roughness={0}
                    transmission={1}
                    ior={1.5}
                    chromaticAberration={0.4} // High CA for that "awwwards" look
                    anisotropy={0.5}
                    distortion={0.5}
                    distortionScale={0.5}
                    temporalDistortion={0.2}
                    color="#ffffff"
                />
            </mesh>
        </Float>
    );
}
