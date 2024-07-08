'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import Link from 'next/link'
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import fadein from '@/lib/Varriants';
import {motion} from 'framer-motion'
const Trainers = () => {
    const trainers = [
        {
            id: 1,
            "num" : "01",
            name: 'david Doe',
            img: "/img/trainers/david.jpg",
            text: "We build websites that are fast, easy to use, and built with best practices. we build websites that are fast, easy to use, and built with best practices.",
            jop: " Body Building Trainer",
            "website": "davidDoe.com",
            "phone": "011 222 333 444",
            "email": "davidDoe@gmail.com",
        },
        {
            id: 2,
            "num" : "02",
            name: 'matt Rahimy',
            img: "/img/trainers/matt.jpg",
            text: "We build websites that are fast, easy to use, and built with best practices. we build websites that are fast, easy to use, and built with best practices.",
            jop: " Crossfit Trainer",
            "website": "mattRahimy.com",
            "phone": "011 222 333 444",
            "email": "mattRahimy12@example.com",
        },
        {
            id: 3,
            "num" : "03",
            name: 'rosy Khan',
            img: "/img/trainers/rosy.jpg",
            text: "We build websites that are fast, easy to use, and built with best practices. we build websites that are fast, easy to use, and built with best practices.",
            jop: "Yoga Trainer",
            "website": "rosyKhan.com",
            "phone": "011 222 333 444",
            "email": "rosyKhanpro@example.com",
        },
        {
            id: 4,
            "num" : "04",
            name: 'Sofia jones',
            img: "/img/trainers/sofia.jpg",
            text: "We build websites that are fast, easy to use, and built with best practices. we build websites that are fast, easy to use, and built with best practices.",
            jop: "Cardio Trainer",
            "website": "sofiaJones.com",
            "phone": "011 222 333 444",
            "email": "sofiaJo.12@example.com",
        },
    ]
    const [index, setIndex] = useState(trainers[0])
  const handleprev = () => {
    if (index.id === 1) {
      setIndex(trainers[trainers.length - 1])
    } else {
      setIndex(trainers[index.id - 2])
    }
  }

  const handleNext = () => {  

    if (index.id === trainers.length) {
      setIndex(trainers[0])  
    }
    else {
      setIndex(trainers[index.id])
    }
  }
  return (
    <div className='w-full min-h-[90vh] flex items-center justify-center' id='team'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center justify-center w-full'>
                <motion.div variants={fadein("up", 0)} initial={"hidden"} whileInView={"show"} viewport={{ once: false, amount: 0.3 }}   key={index.id} className='flex flex-col xl:flex-row items-center justify-between w-full mt-[10%]'>
                    <div className='image w-[100%] xl:w-[60%] relative'>
                        <Image className='img w-[100%] xl:w-[70%] rounded-md' src={index.img} alt="img_trainer" width={500} height={500} priority quality={100} />
                        <div className=" icons">
                            <Link href={"https://github.com/"} className='text-3xl text-accent'><FaGithub /></Link>
                            <Link href={"https://youtube.com/"} className='text-3xl text-accent'><FaYoutube /></Link>
                            <Link href={"https://twitter.com/"} className='text-3xl text-accent'><FaXTwitter /></Link>
                            <Link href={"https://instagram.com/"} className='text-3xl text-accent'><FaInstagram /></Link>
                        </div>
                    </div>
                    <div className='flex flex-row items-center w-[100%] xl:w-[40%] my-4 xl:my-0'>
                      <div className='text flex flex-col items-center xl:items-start text-center xl:text-left gap-3 w-[100%]'>
                          <span className='text-5xl text-accent text_outline'>{index.num}</span>
                          <h1 className='text-2xl xl:text-7xl font-bold text-accent uppercase'>{index.name}</h1>
                          <span className='text-2xl text-secondary'>{index.jop}</span>
                          <p className='text w-[100%] text-100'>{index.text}</p>
                          <div className='arrows flex items-center justify-center gap-3'>
                              <span className='arrow text-3xl flex items-center justify-center w-[50px] h-[50px] bg-secondary text-white' onClick={handleprev}><IoMdArrowDropleft /></span>
                              <span className='arrow text-3xl flex items-center justify-center w-[50px] h-[50px] bg-secondary text-white' onClick={handleNext}><IoMdArrowDropright /></span>
                          </div>
                      </div>
                    </div>
                </motion.div>
                <motion.div variants={fadein("down", 0)} initial={"hidden"} whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className='contact grid grid-cols-1 xl:grid-cols-3 my-9 gap-14'>
                  <div className='way flex flex-col items-center gap-3'>
                    <span className='icon text-2xl text-primary bg-secondary w-[60px] h-[60px] p-4 rounded-full flex items-center justify-center'><CiPhone/></span>
                    <span className='value text-accent font-extrabold text-lg'>{index.phone}</span>
                  </div>
                  <div className='way flex flex-col items-center gap-3'>
                    <span className='icon text-2xl text-primary bg-secondary w-[60px] h-[60px] p-4 rounded-full flex items-center justify-center'><MdOutlineEmail/></span>
                    <span className='value text-accent font-extrabold text-lg'>{index.email}</span>
                  </div>
                  <div className='way flex flex-col items-center gap-3'>
                    <span className='icon text-2xl text-primary bg-secondary w-[60px] h-[60px] p-4 rounded-full flex items-center justify-center'><FaGoogle/></span>
                    <span className='value text-accent font-extrabold text-lg'>{index.website}</span>
                  </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Trainers