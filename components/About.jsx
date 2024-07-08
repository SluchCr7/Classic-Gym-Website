'use client'
import React from 'react'
import { MdGroups } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";
import Stats from "./Stats";    
import { motion } from 'framer-motion'
import fadein from '@/lib/Varriants';
const About = () => {
    const info = [
        {
            icon: <MdGroups className='text-4xl text-primary'/>,
            title: 'Award-Winning Trainers',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae, molestias neque quos est eaque quibusdam consequatur libero consequuntur mollitia possimus atque fugit animi a sint debitis. Asperiores, a ipsam? ',
            "to" : 'down'
        },
        {
            icon: <FaDumbbell className='text-4xl text-primary' />,
            title: 'Dedicated To Your Health',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae, molestias neque quos est eaque quibusdam consequatur libero consequuntur mollitia possimus atque fugit animi a sint debitis. Asperiores, a ipsam?",
            "to" : 'up'
        },
        {
            icon: <IoBookmarksSharp className='text-4xl text-primary' />,
            title: 'Personalized Plans',    
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae, molestias neque quos est eaque quibusdam consequatur libero consequuntur mollitia possimus atque fugit animi a sint debitis. Asperiores, a ipsam?"
            ,"to" : 'down'
        }
    ]
  return (
    <div className='w-full bg-primary min-h-[90vh] flex items-center justify-center p-[20px]' id='about'>
        <div className='container mx-auto'>
            <motion.div variants={fadein("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className='intro flex flex-col items-center text-center xl:text-left gap-3'>
                <h1 className='text-3xl font-extrabold text-secondary uppercase'>About Us</h1>
                <p className='text-secondary text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </motion.div>
            <div className='info grid grid-cols-1 xl:grid-cols-3 gap-12 my-10'>
                {
                    info.map((item, index) => (
                    <motion.div variants={fadein(item.to, 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} key={index} className='flex flex-col items-center justify-center gap-3 border-[1px] border-[#232329] p-5 rounded-lg'>
                            <div className='icon flex items-center justify-center bg-secondary p-5 rounded-full'>{item.icon}</div>
                            <h1 className='text-2xl font-black text-accent'>{item.title}</h1>
                            <p className='text-secondary text-sm text-center'>{item.description}</p>
                    </motion.div>
                    ))
                }
            </div>
            <Stats/>
        </div>
    </div>
  )
}

export default About