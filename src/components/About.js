import AboutImg from '../assets/about.png';
import { motion } from 'framer-motion';

export default function About () {
    const config = {
        line1: 'Hi, My name is R Rithish. I am a Full stack Web developer. I built beautiful Websites With React.js and Tailwind CSS',
        line2: 'I am proficient in Frontend skills like React.js, Html, CSS, Tailwind CSS and JavaScript and more.',
        line3: 'In backend I know Node.js, Express.js, MongoDB, And Mongoose'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id = 'about'>
        <motion.div className='py-5 md:w-1/2'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
        >
            <img src={AboutImg} alt="About"/>
        </motion.div>
        <motion.div className='md:w-1/2 flex justify-center'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
        >
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </motion.div>
    </section>
}