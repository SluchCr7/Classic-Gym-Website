'use client'
import React from 'react'
import Header from './Header'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import fadein from '@/lib/Varriants'
const Hero = () => {
  return (
    <div className='bg-[url("/img/hero/bg.png")] bg-cover bg-no-repeat bg-center bg-fixed'>
          {/* Header */}
          <Header />
          {/* Hero Section */}
          <motion.div
            className='w-full h-[95vh] flex flex-col justify-center items-center'
            id='Home'
            variants={fadein("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
              <div className='container mx-auto flex flex-col items-center'>
                    <div className='flex flex-col items-start text-center xl:text-left xl:absolute xl:right-0 xl:top-[25%] xl:w-[40%] gap-4'>
                        <h1 className='text-4xl xl:text-8xl font-bold text-primary'><span className='text-accent'>Work Hard</span> <br /> Get Fit and Helthy</h1>
                        <p className='text-white/60 text-sm italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <button className='bg-accent text-white mx-auto xl:mx-0 p-5 font-bold rounded-lg mt-5 w-[200px]'>Get Started</button>
                    </div>
              </div>
          </motion.div>
    </div>
  )
}

export default Hero