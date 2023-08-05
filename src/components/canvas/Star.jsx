import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload } from '@react-three/drei';

function Star() {
  return (
    <Canvas
        shadows
        frameloop='always' // set to `demand` if wanna stop effect
        dpr={[1,2]}
        camera={{position: [1,0,1]}}
    >
        <Suspense fallback={null}>

        </Suspense>
        <Preload all/>
    </Canvas>
  )
}

export default Star