'use client';

import { shaderMaterial } from '@react-three/drei';
import { extend, ReactThreeFiber } from '@react-three/fiber';
import * as THREE from 'three';

// Simple wave distortion shader
const ImageDistortionMaterial = shaderMaterial(
    {
        uTime: 0,
        uHover: 0,
        uTexture: new THREE.Texture(),
    },
    // Vertex Shader
    `
    varying vec2 vUv;
    uniform float uHover;
    uniform float uTime;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Gentle sine wave distortion on hover
      float noise = sin(pos.y * 10.0 + uTime) * 0.05;
      pos.z += noise * uHover;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
    // Fragment Shader
    `
    uniform sampler2D uTexture;
    uniform float uHover;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      
      // Chromatc aberration on hover
      float shift = uHover * 0.02;
      float r = texture2D(uTexture, uv + vec2(shift, 0.0)).r;
      float g = texture2D(uTexture, uv).g;
      float b = texture2D(uTexture, uv - vec2(shift, 0.0)).b;
      
      vec3 color = vec3(r, g, b);
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ ImageDistortionMaterial });

declare module '@react-three/fiber' {
    interface ThreeElements {
        imageDistortionMaterial: any;
    }
}

export { ImageDistortionMaterial };
