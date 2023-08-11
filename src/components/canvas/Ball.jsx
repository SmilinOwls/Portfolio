import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
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
    const mesh = useRef();
    
    useFrame(({clock}) => {
        mesh.current.geometry.rotateX(clock.getElapsedTime() % 5 * 0.01);
    });
    
    return (
        <Float
            speed={10}
            floatIntensity={2}
            rotationIntensity={1}
        >
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.4]} />
            <mesh
                ref={mesh}
                castShadow
                receiveShadow
                scale={2.45}
            >
                <icosahedronGeometry args={[1, 2]}/>
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 0.8]}
                    rotation={[-0.2, 0, 0]} // radian = degree * Math.PI / 180
                    scale={0.9}
                    map={decal}
                    depthTest
                />
            </mesh>
        </Float>
    )
}

function Ball({ tech }) {
    return (
        <Canvas
            frameloop='demand' // set to 'always' to apply changes to each frame
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