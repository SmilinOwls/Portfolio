import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from '../Loader';

function Computer() {
    const computer = useGLTF('./desktop_pc/scene.gltf');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleWindowResize = () => {
            const isMobile = window.innerWidth <= 600;
            setIsMobile(isMobile);
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    }, []);

    return (
        <Canvas
            shadows
            camera={{ position: [20, 10, 5], fov: 23 }}
            dpr={[1, 2]}
            frameloop="demand"
        >
            <Suspense fallback={<Loader />} >
                <ambientLight intensity={0.5} />
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <mesh>
                    <hemisphereLight intensity={0.15} groundColor='black' />
                    <spotLight
                        position={[-20, 50, 10]}
                        angle={0.12}
                        penumbra={1}
                        intensity={1}
                        castShadow
                        shadow-mapSize={1024}
                    />
                    <pointLight intensity={1} />
                    <primitive
                        object={computer.scene}
                        scale={isMobile ? 0.7 : 0.75}
                        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                        rotation={[-0.01, -0.2, -0.1]}
                    />
                </mesh>
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default Computer