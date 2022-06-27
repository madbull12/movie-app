import React, { FC } from 'react'
import { IoMdNotifications } from 'react-icons/io'
import { BiPodcast } from 'react-icons/bi'
import { BsGridFill } from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Search from './Search'
import { IoMenuOutline } from 'react-icons/io5'
import { rightSidebar } from '../atoms/rightSidebar'
import { useRecoilState } from 'recoil'

const Navbar:FC = () => {
  const router = useRouter();
  const [openSidebar,setOpenSidebar] = useRecoilState(rightSidebar)
  return (
    <nav className="sticky ml-[55px] md:ml-[190px]  pl-6 text-gray-500 h-16 flex justify-between items-center  top-0 bg-[#0D0C0F] max-w-[894px] z-10">
       
        <ul className='flex gap-x-8 whitespace-nowrap'>
            <li className={`${router.pathname === "/" ? "text-white font-bold" : ""}`}>
              <Link href="/" >Movies</Link>
            </li>
            <li className={`${router.pathname === "/tv-series" ? "text-white font-bold" : ""}`}>
              <Link href="/tv-series" >TV Series</Link>
            </li>
           
      
        </ul>
        <ul className='text-gray-500 md:flex gap-x-8 pr-6 text-xl hidden'>
            <BiPodcast />

            <IoMdNotifications />
            <BsGridFill />
            <div className="hidden md:block lg:hidden cursor-pointer" onClick={()=>setOpenSidebar(true)}>
              <IoMenuOutline />
            </div>
        </ul>
    </nav>
  )
}

export default Navbar