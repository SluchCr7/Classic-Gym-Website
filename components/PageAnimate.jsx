'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
const PageAnimate = ({ children }) => {
    const pathname = usePathname()
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={pathname}
                transition={{ duration: 0.5 }}
                className='h-screen w-[100%] bg-primary z-40 absolute top-0 bottom-0'
            >
                {children}
            </motion.div>
        </AnimatePresence>
   )
}

export default PageAnimate