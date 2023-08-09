import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../utils/motion';
import Wrapper from './Wrapper';
import { EarthStar } from './canvas';

function ContactForm() {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Andrew',
                    from_email: form.email,
                    message: form.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            if (response.status === 200) {
                alert('Thanks for your contact to me. I will respond as soon as possible');
            }

        } catch (error) {
            console.error(error);
            alert('Oops, something went wrong! Please try again..');
        } finally {
            setLoading(false);
            setForm({
                name: '',
                email: '',
                message: ''
            });
        }
    };

    return (
        <Wrapper idName="contact">
            <motion.div
                variants={slideIn('left', 'tween', 0.5, 1)}
                className=' bg-black-200 p-6 rounded-xl xl:min-w-[480px]'
            >
                <motion.div
                    variants={textVariant(1)}
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
                            required
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
                            type='email'
                            name='email'
                            id='email'
                            required
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
                            required
                            value={form.message}
                            onChange={handleChange}
                            placeholder='Leave what you wanna say here..'
                            className='bg-tertiary p-4 text-white font-medium rounded-lg border-none placeholder:text-secondary'
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-tertiary w-fit text-white text-center font-bold rounded-xl py-2 px-4 border hover:bg-violet-400'
                    >
                        {loading ? 'Sending..' : 'Send'}
                    </button>
                </form>
            </motion.div>
        </Wrapper>
    )
}

function Contact(){
    return (
        <div className='flex flex-1 xl:flex-row flex-col-reverse gap-8 overflow-hidden -mt-3 sm:-mt-32'>
        <ContactForm />
        <motion.div
          variants={slideIn('right', 'tween', 0.5, 1)}
          className='w-full xl:h-auto h-[480px]'>
          <EarthStar />
        </motion.div>
      </div>
    )
}

export default Contact