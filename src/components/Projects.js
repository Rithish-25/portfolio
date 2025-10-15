import websiteImg1 from '../assets/voice.jpg';
import websiteImg2 from '../assets/cpu.jpg';
import websiteImg3 from '../assets/netflix.jpg';
import { motion } from 'framer-motion';

export default function Projects() {
    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'Here is AI Voice Generator',
                link: 'https://rithish-ai.web.app/'
            },
            {
                image: websiteImg2,
                description: 'Here is CPU Scheduling',
                link: 'https://cpu-scheduling.onrender.com/'
            },
            {
                image: websiteImg3,
                description: 'Here is Netflix-clone',
                link: 'https://notflix-84bf.onrender.com'
            }
        ]
    };

    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <motion.div className="w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                    <p>These are some of my projects. I have built these with React, MERN, and vanilla CSS. Check them out.</p>
                </div>
            </motion.div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((project, index) => (
                        <motion.a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="w-full md:w-[38%] lg:w-[32%]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                        >
                            <div className='relative'>
                                <img
                                    className='w-full h-auto object-contain rounded-lg'
                                    src={project.image}
                                    alt="project"
                                />
                                <div className='project-desc'>
                                    <p className='text-center px-5 py-5'>{project.description}</p>
                                    <div className='flex justify-center'>
                                        <a className='btn' target='_blank' href={project.link}>View Project</a>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}