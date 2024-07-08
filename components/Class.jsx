'use client'
import React from 'react'
import { motion } from 'framer-motion'
import fadein from '@/lib/Varriants'
const Class = () => {
    const classes = [
        {
            id: 1,
            name: "Body building",
            img: "/img/classes/bodybuilding.jpg",
        },
        {
            id: 2,
            name: "Cardio",
            img: "/img/classes/cardio.jpg",
        },
        {
            id: 3,
            name: "Crossfit",
            img: "/img/class/crossfit.jpg",
        },
        {
            id: 4,
            name: "Fitness",
            img: "/img/class/fitness.jpg",
        },
    ]
  return (
    <div className='w-full min-h-[90vh]' id='class'>
        <div className='grid grid-cols-1 xl:grid-cols-2 w-full h-[-1vh] xl:h-[100vh]'>
            {
                classes.map((item, index) => (
                    <div className={`flex items-center flex-col w-[100%] bg-cover justify-center bg-transparenter p-[30px] xl:p-[0] ${index === 0 ? 'bg-[url("/img/classes/bodybuilding.jpg")]' : index === 1 ? 'bg-[url("/img/classes/cardio.jpg")]' : index === 2 ? 'bg-[url("/img/classes/crossfit.jpg")]' : 'bg-[url("/img/classes/fitness.jpg")]'}`} key={index}>
                        <motion.div variants={fadein("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className='flex flex-col items-center gap-3'>
                            <h1 className='text-3xl font-bold text-accent'>{item.name}</h1>
                            <p className='text-white/60 w-[100%] xl:w-[70%] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo impedit possimus cupiditate quo iure, ab, voluptate cum sit asperiores maiores eum temporibus, reprehenderit magnam repudiandae minima aliquam consequatur adipisci.</p>
                            <button className='bg-accent text-white mx-auto xl:mx-0 p-5 font-bold rounded-lg mt-5 w-[200px]'>Get Started</button>
                        </motion.div>
                    </div>
                ))                
            }
        </div>
    </div>
  )
}

export default Class