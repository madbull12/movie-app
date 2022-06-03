import React, { FC } from 'react'
import { IoMdNotifications } from 'react-icons/io'
import { BiPodcast } from 'react-icons/bi'
import { BsGridFill } from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar:FC = () => {
  const router = useRouter();
  return (
    <nav className="sticky ml-[190px] pl-6 text-gray-500 h-16 flex justify-between items-center  top-0 bg-[#0D0C0F] max-w-4xl z-10">
        <ul className='flex gap-x-8'>
            <li className={`${router.pathname === "/" ? "text-white font-bold" : ""}`}>
              <Link href="/" >Movies</Link>
            </li>
            <li className={`${router.pathname === "/tv-series" ? "text-white font-bold" : ""}`}>
              <Link href="/tv-series" >TV Series</Link>
            </li>
           
      
        </ul>
        <ul className='text-gray-500 flex gap-x-8 pr-6 text-xl'>
            <BiPodcast />

            <IoMdNotifications />
            <BsGridFill />
        </ul>
    </nav>
  )
}

export default Navbar