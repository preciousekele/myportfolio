"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-2 sm:top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[24px] sm:text-[30px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-20px] sm:translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[35px] sm:w-[50px] translate-y-3 sm:translate-y-5 transition-all duration-200 group-hover:translate-y-7 sm:group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="w-[50px] sm:w-[70px] z-10"
          />
        </div>

        <div className="Welcome-box px-[10px] sm:px-[15px] py-[3px] sm:py-[4px] z-[20] brder my-[10px] sm:my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[10px] sm:text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[5px] sm:bottom-[10px] px-[3px] sm:px-[5px]">
        <div className="cursive text-[14px] sm:text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;