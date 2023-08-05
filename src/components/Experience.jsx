import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { experiences } from '../constants';
import Wrapper from './Wrapper';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";


function ExperienceCard({ index, experience }) {
    return (
        <VerticalTimelineElement
            contentArrowStyle={{ borderRight: "8px solid #fff" }}
            contentStyle={{ background: "#1d1836" }}
            className='text-white'
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <img src={experience.icon} alt={experience.company_name} className='w-full h-full object-contain p-1' />
            }
        >
            <motion.div
                variants={fadeIn('up', 'spring', index*0.5, 1)}
                className='flex flex-col gap-5 bg-transparent'
            >
                <div className='space-y-1'>
                    <h3 className='text-white text-xl font-bold tracking-wide'>{experience.title}</h3>
                    <p
                        className='mt-1 text-secondary text-base font-medium'
                    >
                        {experience.company_name}
                    </p>
                </div>
                <ul className='mt-5 list-disc pl-10 space-y-2'>
                    {experience.points.map((point, idx) => (
                        <li key={`experience_${index}-point_${idx}`} className='text-white-100 text-sm font-medium tracking-wider leading-5'>
                            {point}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </VerticalTimelineElement>
    )
};

function Experience() {
    return (
        <Wrapper idName="work">
            <motion.div variants={textVariant(1)}>
                <p className='text-center sm:text-lg text-sm text-secondary uppercase tracking-wider'>What I have got so far</p>
                <h2 className='text-center text-white font-extrabold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Work Experience.</h2>
            </motion.div>
            <div className='mt-16'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} index={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </Wrapper>
    )
}

export default Experience