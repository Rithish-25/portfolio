import websiteImg1 from '../assets/github.jpg';
import websiteImg2 from '../assets/leetcode.jpg';
import websiteImg3 from '../assets/linkedin.jpg';

export default function Projects() {
    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'Here is my GitHub link',
                link: 'https://github.com/'
            },
            {
                image: websiteImg2,
                description: 'My LeetCode profile',
                link: 'https://leetcode.com/u/rithish_05/'
            },
            {
                image: websiteImg3,
                description: 'My LinkedIn profile',
                link: 'https://www.linkedin.com/in/rithish-r-593452330'
            }
        ]
    };

    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                    <p>These are some of my projects. I have built these with React, MERN, and vanilla CSS. Check them out.</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((project, index) => (
                        <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="w-full md:w-[38%] lg:w-[32%]">
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
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}