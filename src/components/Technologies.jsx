import { motion } from 'framer-motion'
import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb, SiMysql, SiPython } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
const iconVarients = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})
const Technologies = () => {
  return (
    <div className='pb-24'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='flex justify-center ml-20 items-center flex-wrap gap-4 w-full'>
            <motion.div initial='initial' animate="animate" variants={iconVarients(2.5)}>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div initial='initial' animate="animate" variants={iconVarients(2.5)} className='p-4'>
                <TbBrandNextjs className='text-7xl ' />
            </motion.div>
            <motion.div className='p-4' initial='initial' animate="animate" variants={iconVarients(3)}>
                <SiMongodb className='text-7xl text-cyan-500' />
            </motion.div>
            <motion.div className='p-4' initial='initial' animate="animate" variants={iconVarients(5)}>
                <DiRedis className='text-7xl text-red-700' />
            </motion.div>
             <motion.div className='p-4' initial='initial' animate="animate" variants={iconVarients(2.5)}>
                <FaNodeJs className='text-7xl text-green-500' />
            </motion.div>
              <motion.div className='p-4' initial='initial' animate="animate" variants={iconVarients(2)}>
                <BiLogoPostgresql className='text-7xl text-sky-700' />
            </motion.div>
            <motion.div className='p-4' initial='initial' animate="animate" variants={iconVarients(26)}>
                  <SiMysql className="text-7xl text-blue-600" />

            </motion.div>
            <motion.div className='p-4' initial='initial' animate="animate" variants={iconVarients(4)}>
                  <SiPython className="text-7xl text-yellow-500" />

            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies