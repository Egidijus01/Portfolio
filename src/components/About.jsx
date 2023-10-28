import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)} className='w-full green-pink-gradient
          p-[1px] rounded-[20px] shadow-card'>
          <div options={{max:45, scale:1, speed:450}} className='bg-tertiary rounded-[20px]
                py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>

              <img src={icon} alt="icon" className='w-16 h-16 object-contain' />
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>

  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("","", 0.1, 1)}
       className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I am a versatile freelance web developer with a strong foundation in web technologies and
       a passion for crafting digital solutions. My expertise spans across Python frameworks
        such as Django and Flask, as well as JavaScript, with a focus on React for building
         interactive user interfaces. I also bring the power of Rust and the Warp framework
          to the table when performance and security are paramount. My proficiency in Lua
           adds versatility to my skill set, allowing me to excel in various contexts. I'm committed to
            creating web applications that not only meet but exceed expectations, ensuring a seamless user experience. Let's collaborate to bring your web development projects to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")