import React from 'react';
import { motion } from 'framer-motion';
import Computer from '../../components/canvas/Computer';

function Intro() {
    return (
        <section className='relative w-full px-6 sm:px-16 h-screen mx-auto'>
            <div className='absolute top-[120px] mx-auto flex gap-8'>
                <div className='flex flex-col items-center mt-4'>
                    <div className='w-6 h-6 rounded-full bg-[#8656ee]' />
                    <div className='w-1 h-36 sm:h-80 violet-gradient' />
                </div>
                <div className='mt-2'>
                    <h1 className='font-extrabold text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]'>
                        Hi, I'm <span className='text-[#8d60ee]'>Andrew</span>
                    </h1>
                    <p className='font-medium mt-2 text-white-100 lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>
                        I develop 3D visuals, user <br className='sm:block hidden' />
                        interfaces and web applications
                    </p>
                </div>
            </div>

            <Computer/>

            <div className='absolute w-full flex items-center justify-center bottom-16 xs:bottom-8 mt-10'>
                <a href='#about'>
                    <div className='w-9 h-16 rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5'>
                        <div className='w-full h-full rounded-3xl bg-gray-600 flex justify-center py-2'>
                            <motion.div
                                animate={{
                                    y: [0, 25, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    damping: 5,
                                    stiffness: 40,
                                    restDelta: 0.001,
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }}
                                className="w-3 h-3 rounded-full bg-secondary"
                            />
                            
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Intro