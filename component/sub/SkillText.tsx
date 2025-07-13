"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    
    <div className='w-full h-auto flex flex-col items-center justify-center px-4'>
        <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[6px] px-[5px] sm:py-[8px] sm:px-[7px] border border-[#7042f88b] opacity-[0.9]  mb-5"
        >
            <SparklesIcon className="text-[#b49bff] mr-[8px] sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
            <h1 className="Welcome-text text-[11px] sm:text-[13px]">
                Explore my skills and projects.
            </h1>
        </motion.div>
        
        <motion.div
            variants={slideInFromLeft(0.5)}
            className='text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] text-white font-medium mt-[8px] sm:mt-[10px] text-center mb-[10px] sm:mb-[15px] leading-tight'
        >
            Developing Web Apps with modern technologies
        </motion.div>
        
        <motion.div
            variants={slideInFromRight(0.5)}
            className='cursive text-[16px] sm:text-[18px] md:text-[20px] text-gray-200 mb-6 sm:mb-10 mt-[8px] sm:mt-[10px] text-center px-2'
        >
            Never miss a task, deadline or idea
        </motion.div>
    </div>
  )
}

export default SkillText