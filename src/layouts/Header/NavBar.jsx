import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { navLinks } from '../../constants';
import { logo, menu, close } from '../../assets';

function NavBar() {

    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) setScrolled(true);
            else setScrolled(false);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <nav className={`w-full max-h-[120px] sm:px-16 px-6 py-6 flex items-center fixed top-0 z-20 ${scrolled ? 'bg-primary' : 'bg-transparent'}`}>
            <div className='w-full flex items-center justify-between mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-3'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
                    <p className='text-white text-lg font-semibold cursor-pointer'>
                        Adrew <span className='sm:block hidden'> &nbsp;| JS Developer</span>
                    </p>
                </Link>
                <ul className='list-none hidden sm:flex gap-8'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`text-lg font-medium cursor-pointer hover:text-white ${active === nav.title ? 'text-white' : 'text-secondary'}`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img
                        src={!toggle ? menu : close}
                        alt='menu'
                        className='w-7 h-7 object-contain'
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`p-5 black-gradient absolute top-20 right-0 mx-3 my-2 z-10 rounded-xl ${!toggle ? "hidden" : "flex"}`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 gap-3 flex-col">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`text-base font-medium cursor-pointer hover:text-white ${active === nav.title ? 'text-white' : 'text-secondary'}`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar