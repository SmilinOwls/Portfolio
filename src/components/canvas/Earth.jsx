import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from '../Loader';

function Earth() {
    const earth = useGLTF('./planet/scene.gltf');

    return (
        <Canvas
            shadows
            camera={{ position: [10, 10, 5], fov: 35 }}
            frameloop='demand'
            dpr={[1, 2]}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <mesh>
                    <primitive
                        object={earth.scene}
                        scale={2.5}
                        postion={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                    />
                </mesh>

                <Preload all />
            </Suspense>
        </Canvas>
    )
}

export default Earth