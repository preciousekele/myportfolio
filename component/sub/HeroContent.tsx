"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 mt-20 sm:mt-32 lg:mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-3 sm:gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[6px] sm:py-[8px] px-[5px] sm:px-[7px] border border-[#7042f88b] opacity-[0.9] w-fit"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[8px] sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
                    <h1 className="Welcome-text text-[13px] sm:text-[15px]">
                        Hi, I am Precious Ekele
                    </h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-3 sm:gap-6 mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white max-w-[700px] w-auto h-auto leading-tight">
                    <span>
                        Providing
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "} 
                            the best {" "}
                        </span>
                        Project Experience
                    </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-base sm:text-lg lg:text-xl text-gray-400 my-3 sm:my-5 max-w-[650px] leading-relaxed">
                    I&apos;m a FullStack Developer with experience in Development of Websites with Frontend and Backend Functionalities. Check out my projects and skills
                </motion.p>
                {/* <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-3 sm:py-4 px-6 sm:px-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[180px] sm:max-w-[220px] text-base sm:text-lg font-medium mb-10">
                    Learn More!
                </motion.a> */}
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="hidden lg:flex w-full h-full justify-center items-center"
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                    className="w-[600px] h-[600px] xl:w-[650px] xl:h-[650px]"
                />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent