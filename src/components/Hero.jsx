import { motion } from "framer-motion";

import { styles } from "../styles";
import myGif from '../assets/bg-gif.gif';
import profile from '../assets/me.png';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <img className="relative w-full h-screen mx-auto" 
      src={myGif} 
      alt="../assets/bg-gif.gif"/>
      
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        <div className="card p-10 rounded-3xl xs:w-[900px] w-full  mx-auto relative">
          <h1 className={`${styles.heroHeadText} relative mx-auto text-[#c2c2c2]`}>
            Hi, I'm <p><span className='text-[#dedede]'>Adriansyah Malik</span>
          </p>
          </h1>
          <div className="pic">
              <img src={profile}
              alt="../assets/me.png"/>
          </div>
          <p className={`${styles.heroSubText} relative mx-auto text-[#f0f0f0]`}>
            I develop user interfaces <br className='sm:block hidden' />
            and web applications
          </p>
          
          <button className="relative mx-auto mt-10">
            <a className="button" href="../assets/resume/Adriansyah Malik Fajar-resume.pdf" download = "Adriansyah Malik Fajar-resume.pdf">
            Download My CV
            </a>
          </button>
          
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center mx-auto mt-auto'>
        <a href='#about'>
          <div className='bg-[#3c3c3c] w-[35px] h-[64px] rounded-3xl border-4 border-[#000000] flex justify-center items-start p-2 mx-auto mt-auto shadow-card shadow-black'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-5 h-5 rounded-full bg-[#000000] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;