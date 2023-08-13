import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Points, Preload } from '@react-three/drei';
import { random } from 'maath';

function StarPoint() {
    const points = useRef();
    const sphere = random.inSphere(new Float32Array(5001), { radius: 1.5 });
    useFrame((state, delta) => {
        // points.current.rotation.x -= delta / 10;
        points.current.rotation.y += delta / 5;

    });

    return (
        <group rotation={[0, 0, 2*Math.PI / 3]}>
            <Points
                ref={points}
                positions={sphere}
                stride={3}
                frustumCulled
            >
                <PointMaterial
                    color='#f272c8'
                    size={0.006}
                />
            </Points>
        </group>
    )
}

function Star() {


    return (
        <Canvas
            shadows
            frameloop='always' // set to `demand` if wanna stop effect
            dpr={[1, 2]}
            camera={{ position: [1, 0, 1] }}
        >
            <Suspense fallback={null}>
                <StarPoint />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default Star