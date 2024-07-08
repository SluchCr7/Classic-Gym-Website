'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import fadeIn from '@/lib/Varriants'
import { useEffect } from 'react'
const Blog = () => {
    const [length , setLength] = React.useState(4)
    const news = [
        {
            id: 1,
            img : "/img/blog/post1.jpg",
            title: "Bodybuilding for womans",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque."
        },
        {
            id: 2,
            img : "/img/blog/post2.jpg",
            title: "Cardio and its benefits for your health",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque."
        },
        {
            id: 3,
            img: "/img/blog/post3.jpg",
            title: "How i can exercise good and i focus on my body",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque."
        },
        {
            id: 4,
            img: "/img/blog/post4.jpg",
            title: "Bodybuilding and How to get a more Power lift",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque."
        },
        // {
        //     id: 5,
        //     img: "/img/blog/post4.jpg",
        //     title: "Fitness and how to get healthy",
        //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque."
        // },
        // {
        //     id: 6,
        //     img: "/img/blog/post3.jpg",
        //     title: "Fitness and how to get healthy",
        //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque."
        // },
        // {
        //     id: 7,
        //     img: "/img/blog/post2.jpg",
        //     title: "Fitness and how to get healthy",
        //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque."
        // },
        // {
        //     id: 8,
        //     img: "/img/blog/post1.jpg",
        //     title: "Fitness and how to get healthy",
        //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque."
        // }
    ]
  return (
    <div className='w-full min-h-[80vh] flex items-center justify-center'>
        <div className='container mx-auto'>
            <div className="flex flex-col items-center gap-8">
                <motion.div variants={fadeIn("up", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className='intro flex flex-col items-center gap-2'>
                    <h1 className='text-3xl font-bold text-secondary'>Blog</h1>
                    <p className='text-xl text-accent text-center'>View our latest news and updates here.</p>
                </motion.div>
                <motion.div variants={fadeIn("down", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="blogs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        news.map((item, index) => (
                            <Link href="#" className="news flex flex-col gap-3" key={index}>
                                <div className="image">
                                    <Image src={item.img} alt="blog" width={500} height={500} className='w-[100%] h-[100%]' />
                                </div>  
                                <div className="content">
                                    <h1 className='text-xl font-bold text-secondary overflow-x-hidden whitespace-nowrap text-ellipsis'>{item.title}</h1>
                                    <p className='text-lg text-accent'>{item.text}</p>
                                </div>
                            </Link>
                        ))
                    }
                </motion.div>
                <button className='btn bg-transparent border-[1px] border-accent p-3 w-[200px] text-secondary'>View All</button>
            </div>
        </div>
    </div>
  )
}

export default Blog