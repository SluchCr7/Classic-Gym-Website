import React from 'react'
import { Sheet, SheetTrigger, SheetContent, SheetFooter } from '@/components/ui/sheet'
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {Link as ScrollLink} from 'react-scroll'
const MobileNav = () => {
    const pathname = usePathname()
    console.log(pathname)
    const Links = [
        {name: "Home", link: "Home" , offset : -100},
        {name: "About", link: "about" , offset : -80},
        {name: "Class", link: "class" , offset : 0},
        {name: "Team", link: "team" , offset : 100},
        {name: "Contact", link: "contact" , offset : 80},
    ]
  return (
    <div>
        <Sheet>
            <SheetTrigger className="text-white">
                <CiMenuFries />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-secondary border-none flex items-center justify-center" >
                <nav className='flex flex-col gap-4 items-center justify-center w-full'>
                    {Links.map((link , index) => (
                        <ScrollLink
                        to={link.link}
                        key={index}
                        className={`cursor-pointer`}
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        offset={link.offset}
                        >
                        {link.name}
                    </ScrollLink>
                    ))}
                    <button className="bg-transparent border-[1px] border-accent w-full flex items-center justify-center text-center rounded-[5px] py-3 px-6 text-accent">Register</button>
                    <button className="bg-transparent border-[1px] border-accent w-full flex items-center justify-center text-center rounded-[5px] py-3 px-6 text-accent">Login</button>
                </nav>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNav