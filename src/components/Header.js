import { Bars3Icon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header(){
    const [toggleMenu, setToggleMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 4);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return <header className={`sticky top-0 z-50 ${scrolled ? 'shadow-lg shadow-black/20' : ''}`}>
        <div className="flex justify-between px-5 py-2 bg-primary/90 backdrop-blur">
            <a className = "font-bold text-sky-400"href="#">Rithish</a>
            <nav className="hidden md:block">
                <ul className="flex text-white">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <button onClick = {() => setToggleMenu(!toggleMenu)}className='block md:hidden'><Bars3Icon className='text-white h-6' /></button>
        </div>
        <AnimatePresence>
            {toggleMenu && (
                <motion.nav
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="block md:hidden"
                >
                    <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </motion.nav>
            )}
        </AnimatePresence>
    </header>
}