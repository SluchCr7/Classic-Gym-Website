'use client'
import React from 'react'
import Image from 'next/image'
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from 'framer-motion'
import  fadeIn  from '@/lib/Varriants'
const Footer = () => {
    const contact = [
        {
            icon : <CiLocationOn />,
            title : 'Address',
            desc : '123 Street, New York, USA'
        },
        {
            icon : <CiPhone />,
            title : 'Phone',
            desc: '+012 345 67890'
        },
        {
            icon : <MdOutlineEmail />,
            title : 'Email',
            desc: 'YQpN6@example.com'
        }
    ]
    const articles = [
        {
            title : 'Bodybuilding for womans',
            time : '24/06/2022',
        },
        {
            title : 'Cardio and its benefits for your health',
            time : '12/09/2022',
        },
        {
            title : 'How i can exercise good and i focus on my body',
            time : '18/05/2022',
        },
        {
            title : 'Bodybuilding and How to get a more Power lift',
            time : '1/03/2022',
        }
    ]
    return (
    <div className='footer w-full bg-secondary px-5 py-[6rem]'>
        <div className="container mx-auto">
            <div className='flex flex-col items-center'>
                <div className='grid grid-cols-1 xl:grid-cols-4 gap-7'>
                    <motion.div variants={fadeIn("up", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className='logo flex flex-col items-center xl:items-start text-center xl:text-left gap-3'>
                        <Image src="/img/logo.png" alt="logo" width={100} height={100} className='' />
                        <p className='w-[90%]'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt</p>
                        <div className='contact flex flex-col items-start gap-2'>
                            {
                                contact.map((item, index) => (
                                    <div key={index} className='flex items-center gap-2'>
                                        {item.icon}
                                        <p>{item.desc}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </motion.div>
                    <motion.div variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className='Blogs flex flex-col  items-center xl:items-start text-center xl:text-left gap-4'>
                        <span className='font-bold text-2xl mb-4'>Blogs</span>
                        {
                            articles.map((item, index) => (
                                <div key={index} className='flex flex-col items-start gap-1 pb-2'>
                                    <p className='w-[90%] text-center mx-auto xl:text-left xl:mx-0'>{item.title}</p>
                                    <p className='text-sm text-accent text-center mx-auto xl:text-left xl:mx-0'>{item.time}</p>
                                </div>
                            ))
                        }
                    </motion.div>
                    <motion.div variants={fadeIn("up", 0.6)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="links flex flex-col  items-center xl:items-start text-center xl:text-left">
                        <span className='font-bold text-2xl mb-4 text-accent'>About</span>
                        <ul className='flex flex-col items-center xl:items-start gap-4 '>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>FAQ</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </motion.div>
                    <motion.div variants={fadeIn("up", 0.7)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className='subscribe flex flex-col items-center xl:items-start text-center xl:text-left'>
                        <span className='font-bold text-2xl mb-4 text-accent'>Subscribe</span>
                        <p className='w-[90%]'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt</p>
                        <div className='flex items-center gap-2 mt-4'>
                            <input type="text" placeholder='Enter your email address' className='w-full border-none rounded-lg py-2 px-4 outline-none' />
                            <button className='bg-accent text-white rounded-lg py-2 px-4'>Subscribe</button>
                        </div>
                    </motion.div>
                </div>
                <motion.div variants={fadeIn("up", 0.8)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className='flex items-center justify-center mt-5'>
                    <p className='text-sm text-accent'>Copyright © 2024 Gym. All rights reserved.</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Footer