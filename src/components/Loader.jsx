import React from 'react';
import { Html, useProgress } from '@react-three/drei';

function Loader() {
  const {progress} = useProgress();

  return (
    <Html
        as='div'
        center
        className={`w-52 flex flex-col justify-center items-center ${progress === 100 && 'hidden'}`} 
    >
        <div className='w-full h-6 bg-gray-200 rounded-xl'>
            <div className='progress-bar__loading rounded-xl' style={{
                width: progress + '%'
            }}>

            </div>
        </div>
        <p className="text-xl text-[#F1F1F1] font-bold mt-4"
        >
            {progress.toFixed(2)}%
        </p>
    </Html>
  )
}

export default Loader