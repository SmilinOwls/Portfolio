import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
    Decal,
    OrbitControls,
    Preload,
    Float,
    useTexture
} from '@react-three/drei';
import Loader from '../Loader';

function BallDecal({ icon }) {
    const [decal] = useTexture([icon]);
    return (
        <Float
            speed={10}
            floatIntensity={2}
            rotationIntensity={1}
        >
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            
            <mesh
                castShadow
                receiveShadow
                scale={2.45}
            >
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[6.25, 0, 6.25]}
                    scale={1}
                    map={decal}
                />
            </mesh>
        </Float>
    )
}

function Ball({ tech }) {
    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <BallDecal icon={tech.icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default Ball