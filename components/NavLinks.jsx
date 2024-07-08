import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {Link as ScrollLink} from 'react-scroll'
const NavLinks = () => {
    const pathname = usePathname()
    console.log(pathname)
    const Links = [
        {name: "Home", link: "Home" , offset : -100},
        {name: "About", link: "about" , offset : -80},
        {name: "Class", link: "class" , offset : 0},
        {name: "Team", link: "team" , offset : 80},
        {name: "Contact", link: "contact" , offset : 100},
    ]
  return (
    <div className='flex flex-row items-center gap-4'>
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
    </div>
  )
}
export default NavLinks