import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../utils/motion';
import Wrapper from './Wrapper';
import Earth from './canvas/Earth';


function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
    };

    return (
        <Wrapper idName="contact">
            <div className='mt-4 flex flex-1 xl:flex-row flex-col-reverse gap-8 overflow-hidden'>
                <motion.div
                    variants={slideIn('left', 'tween', 2, 1)}
                    className=' bg-black-200 p-6 rounded-xl xl:min-w-[480px]'
                >
                    <motion.div
                        variants={textVariant(1.5)}
                    >
                        <p className='sm:text-lg text-sm text-secondary uppercase tracking-wider'>Get in touch</p>
                        <h2 className='text-white font-extrabold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Contact.</h2>
                    </motion.div>
                    <form
                        onSubmit={handleSubmit}
                        className='mt-10 flex flex-col gap-8'
                    >
                        <div
                            className='flex flex-col space-y-2'
                        >
                            <label className='text-white font-medium' htmlFor='name'>Your Name</label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder='Enter your name here..'
                                className='bg-tertiary p-4 text-white font-medium rounded-lg border-none placeholder:text-secondary'
                            />
                        </div>
                        <div
                            className='flex flex-col space-y-2'
                        >
                            <label className='text-white font-medium' htmlFor='email'>Your Email</label>
                            <input
                                type='text'
                                name='email'
                                id='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder='Enter your email here..'
                                className='bg-tertiary p-4 text-white font-medium rounded-lg border-none placeholder:text-secondary'
                            />
                        </div>
                        <div
                            className='flex flex-col space-y-2'
                        >
                            <label className='text-white font-medium' htmlFor='message'>Your Message</label>
                            <textarea
                                rows={8}
                                name='message'
                                id='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder='Leave what you wanna say here..'
                                className='bg-tertiary p-4 text-white font-medium rounded-lg border-none placeholder:text-secondary'
                            />
                        </div>
                        <button
                            type='submit'
                            className='bg-tertiary w-fit text-white text-center font-bold rounded-xl py-2 px-4'
                        >
                            {loading ? 'Sending..' : 'Send'}
                        </button>
                    </form>
                </motion.div>
                <div className='w-full'>
                    <Earth />
                </div>
            </div>

        </Wrapper>
    )
}

export default Contact