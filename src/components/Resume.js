import ResumeImg from '../assets/resume.jpg';
import { motion } from 'framer-motion';

export default function Resume () {
    const config = {
        link : 'https://drive.google.com/file/d/1S6NV2Rmtb8Rn3ry22N69WI_RbGXuDMQe/view?usp=drive_link'
    }

    return <section id = 'resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <motion.div className='py-5 md:w-1/2 flex justify-center md:justify-end'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            <img className='w-[300px]' src={ResumeImg} alt="Resume"/>
        </motion.div>
        <motion.div className='md:w-1/2 flex justify-center'
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn' href={config.link} >Download</a></p>    
            </div>
        </motion.div>
    </section>
}