import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { services } from '../constants';
import Wrapper from './Wrapper';

function ServiceCard({ index, service}) {
    return (
        <Tilt className="w-full sm:w-[200px]">
            <motion.div
                variants={fadeIn("right","spring", index * 0.5, 1)}
                className='w-full green-pink-gradient rounded-2xl p-1 shadow-card'
            >
                <div
                    className='bg-tertiary flex flex-col items-center justify-around px-10 py-5 rounded-2xl'
                >
                    <img
                        src={service.icon}
                        alt="service_icon"
                        className='w-16 h-16 object-contain'
                    />
                    <h3 className='text-white-100 text-lg font-bold text-center'> {service.title} </h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

function About() {
    return (
        <Wrapper idName="about">
            <motion.div 
                variants={textVariant(1)} 
            >
                <p className='sm:text-lg text-sm text-secondary uppercase tracking-wider'>Introduction</p>
                <h2 className='text-white font-extrabold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>About me.</h2>
            </motion.div>
            <motion.p 
                variants={fadeIn("up", "spring", 0.1, 1)} 
                className="mt-3 text-secondary text-base font-medium leading-7 max-w-3xl"
            >
                I'm a skilled software developer with experience in TypeScript and
                JavaScript, and expertise in frameworks like React, Node.js, and
                Three.js. I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that solve
                real-world problems. Let's work together to bring your ideas to life!
            </motion.p>
            <div className='mt-16 flex flex-wrap gap-5'>
                {services.map((service, index) => (
                    <ServiceCard key={index} index={index} service={service}/>
                ))}
            </div>
        </Wrapper>
    )
}

export default About