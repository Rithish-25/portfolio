import HeroImg from '../assets/hero.png';
import RithishImg from '../assets/rithish.jpg';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

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
            <div className='md:w-1/2 flex flex-col'>
                <h1 className=' text-white text-6xl font-hero-font'>
                    Hi, <br/> Im <span className='text-black'>R</span> Rithish
                    <p className='text-2xl'>{config.subtitle}</p>
                </h1>
                <div className='flex py-10'>
                    <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40} /></a>
                    <a href={config.social.instagram} className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
                    <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
                </div>
                {/* Mobile-only BIG profile image */}
                <img 
                    className='block md:hidden w-52 h-52 rounded-full mx-auto mt-5 border-4 border-white shadow-lg' 
                    src={RithishImg} 
                    alt="Rithish" 
                />
            </div>
            <img className='hidden md:block md:w-1/3' src={HeroImg} alt="Hero Illustration" />
        </section>
    );
}
