import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { testimonials } from '../constants';
import Wrapper from './Wrapper';

function FeedbackCard({ index, feedback }) {
    return (
        <motion.div
            variants={fadeIn('up', 'spring', index * 0.5, 1)}
            className='w-full sm:w-[320px] p-5 bg-black-200 rounded-2xl'
        >
            <p className='text-white font-bold text-[36px]'>"</p>
            <div className='mt-3 space-y-3'>
                <p className='text-white-100 text-lg tracking-wider leading-7 h-[80px] sm:min-h-[120px]'>{feedback.testimonial}</p>
                <div className='flex items-center justify-between gap-2'>
                    <div className='flex flex-col flex-1 gap-2'>
                        <div className='text-white font-medium text-base'>
                            <span className='mr-1 blue-text-gradient'>@</span>{feedback.name}
                        </div>
                        <div className='text-secondary text-xs'>
                            {feedback.designation} of {feedback.company}
                        </div>
                    </div>
                    <img
                        src={feedback.image}
                        alt={`feedback_by_${feedback.name}`}
                        className='w-10 h-10 rounded-full'
                    />
                </div>
            </div>
        </motion.div>
    )
}

function Feedback() {
    return (
        <Wrapper idName="feedback" >
            <div className='mt-2'>
                <motion.div
                    variants={fadeIn("left", "spring", 0.5, 1)}
                    className='bg-tertiary min-h-[270px] w-full text-center p-5 rounded-3xl'
                >
                    <motion.div
                        variants={textVariant(2)}
                    >
                        <p className='sm:text-lg text-sm text-secondary uppercase tracking-wider'>What others review</p>
                        <h2 className='text-white font-extrabold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Testimonial.</h2>
                    </motion.div>
                </motion.div>
                <div className='w-full -mt-32 flex flex-wrap justify-center gap-5 sm:p-16 p-6'>
                    {testimonials.map((testimonial, index) => (
                        <FeedbackCard key={index} index={index} feedback={testimonial} />
                    ))}
                </div>
            </div>

        </Wrapper>
    )
}

export default Feedback