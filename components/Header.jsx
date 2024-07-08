'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import NavLinks from './NavLinks'
import MobileNav from './MobileNav'
const Header = () => {
    const pathname = usePathname()
    console.log(pathname)
    const [header, setheader] = React.useState(false)
    window.addEventListener('scroll', () => {
        if(window.scrollY > 100) {
            setheader(true)
        } else {
            setheader(false)
        }
    })
  return (
      <div className={`bg-[#000] w-full flex flex-row items-center justify-between p-5 fixed top-0 z-[999]`}>
          <div className='flex flex-row items-center justify-between mx-auto container'>
            {/* Logo */}
                <div className='logo'>
                    <Image src="/img/logo.png" alt="logo" width={100} height={100} />
                </div>
            {/*Navigation */}
                <div className='hidden xl:flex flex-'>
                    <NavLinks />
                </div>
                {/*Hamburger Menu*/}
                <div className='xl:hidden'>
                    <MobileNav />
                </div>
                {/*Get Started Button*/}
                <div className='hidden xl:flex xl:flex-row xl:items-center gap-3'>
                    <button className="bg-transparent border-[1px] border-accent w-[100px] flex items-center justify-center text-center rounded-[5px] py-3 px-6 text-accent">Register</button>
                    <button className="bg-transparent border-[1px] border-accent w-[100px] flex items-center justify-center text-center rounded-[5px] py-3 px-6 text-accent">Login</button>
                </div>
            </div>
    </div>
  )
}

export default Header