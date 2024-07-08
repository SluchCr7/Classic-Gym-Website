'use client'
import React from 'react'
import { CiTimer } from "react-icons/ci";
import { FaPerson } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import CountUp from "react-countup"
import { delay, motion } from 'framer-motion'
import fadeIn from '@/lib/Varriants';
import { useInView } from 'framer-motion';
const statsAnimate = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerchildren: 0.4,
            ease : 'linear'
        }
    }
}
const stateEle = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5, 
            ease: [0.25, .6, .3, .8],
        }
    }
}
import fadein from '@/lib/Varriants';
const Stats = () => {
    const stats = [
        {
            name: 'Working Hours',
            value: 500,
            icon : <CiTimer/>
        },
        {
            name: 'Happy Customers',
            value: 150,
            icon : <GrStatusGood/>
        },
        {
            name: 'Members Now',
            value: 800,
            icon : <FaPerson/>
        },
        {
            name: 'Awards Won',
            value: 10,
            icon : <FaAward/>
        }
    ]
    const ref = React.useRef(null)
    const isInView = useInView(ref)
  return (
      <motion.div
        className='stats grid grid-cols-2 gap-4 lg:grid-cols-4 mt-4'
        variants={statsAnimate}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: false, amount: 0.3}}
    >
        {
            stats.map((stat, index) => (
                <motion.div
                    className="stat flex items-center flex-col gap-2"
                    variants={stateEle}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: false, amount: 0.3}}
                    key={index}
                >
                    <div ref={ref}  className="border-[1px] border-secondary p-7 rounded-full w-[100px] h-[100px] flex items-center justify-center">
                        {
                            isInView && <CountUp
                                end={stat.value}
                                duration={10}
                                className="text-3xl font-bold text_outline text-transparent"
                                delay={1}
                            />
                        }
                    </div>
                    <div className='flex flex-col items-center mt-2 gap-3'>
                        <div className='icon text-4xl text-secondary'>{stat.icon}</div>
                        <p className='text-secondary font-bold'>{stat.name}</p>
                    </div>
                </motion.div>
            ))
        }
    </motion.div>  
  )
}

export default Stats