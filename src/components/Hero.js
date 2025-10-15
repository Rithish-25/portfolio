import RithishImg from '../assets/rithish.jpg';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from 'framer-motion';

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            facebook: 'https://www.facebook.com/rithish.389720/',
            instagram: 'https://www.instagram.com/rithish_.25/',
            linkedin: 'https://www.linkedin.com/in/rithish-r-593452330/'
        }
    }

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <motion.div
                className='md:w-1/2 flex flex-col md:items-start'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h1 className=' text-white text-5xl md:text-6xl font-hero-font'>
                    Hi, <br/> Im <span className='text-sky-400'>R</span> Rithish
                    <motion.p className='text-2xl'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >{config.subtitle}</motion.p>
                </h1>
                <motion.div className='flex py-10'
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
                    }}
                >
                    {[config.social.facebook, config.social.instagram, config.social.linkedin].map((link, i) => (
                        <motion.a key={link} href={link} className='pr-5 hover:text-white'
                            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {i === 0 && <AiOutlineFacebook size={40} />}
                            {i === 1 && <AiOutlineInstagram size={40} />}
                            {i === 2 && <AiOutlineLinkedin size={40} />}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
            <motion.div className='md:w-1/3 flex justify-center items-center'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
                <motion.img 
                    className='w-52 h-52 md:w-72 md:h-72 rounded-full mx-auto mt-5 border-4 border-white shadow-lg glass-panel' 
                    src={RithishImg} 
                    alt="Rithish" 
                    whileHover={{ rotate: 2, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                />
            </motion.div>
        </section>
    );
}
