
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import { AiFillHome,AiFillClockCircle, AiFillStar, AiOutlineDownload, AiFillInfoCircle, AiOutlineLogout, AiFillHeart } from 'react-icons/ai'
import { BsFillAlarmFill, BsFillBookmarkCheckFill } from 'react-icons/bs'
import { RiCompassDiscoverFill, RiDoubleQuotesR } from 'react-icons/ri'
import { MdOutlineGroups } from 'react-icons/md'
import { IoMdSettings } from 'react-icons/io'
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

interface ISidebar {
    handleLogout:()=>Promise<void>
}

const Sidebar = ({ handleLogout }:any) => {
    const router = useRouter();
  const { data:session } = useSession();

    // logout using supabse
    const logout = async() => {
        await signOut({
            callbackUrl: 'http://localhost:3000/',
          })
    }


  return (
    <aside  className='flex flex-col  bg-[#1A161F] pl-2 md:pl-4 z-50 w-14 md:w-48 pt-16 pb-4 fixed top-0 min-h-screen left-0  space-y-4 divide-y-0 md:divide-y divide-gray-500 '>
        <div className='text-gray-500 space-y-3 '>
            <p className="text-xs  tracking-tighter font-bold hidden md:block">MENU</p>
            <ul className='space-y-3 flex flex-col pl-[6px] '>
                <Link href="/" >
                    <span className={`flex gap-1.5 items-center cursor-pointer   ${router.pathname === "/" ? "font-bold text-white md:border-r-4 border-[#ec1c24]" : ""}`}>
                        <AiFillHome className='text-2xl md:text-base' color={`${router.pathname === "/" ? "#EC1C24" : ""}`} /> <p className='hidden md:block'>Home</p>
                    </span>
                </Link>
                <Link href="/discovery" >
                    <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/discovery" ? "font-bold text-white md:border-r-4 border-[#ec1c24]" : ""}`}>
                        <RiCompassDiscoverFill className='text-2xl md:text-base' color={`${router.pathname === "/discovery" ? "#EC1C24" : ""}`} /> <p className='hidden md:block'>Discovery</p>
                    </span>
                </Link>
                <Link href="/coming-soon" >
                    <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/coming-soon" ? "font-bold text-white md:border-r-4 border-[#ec1c24]" : ""}`}>
                        <BsFillAlarmFill className='text-2xl md:text-base' color={`${router.pathname === "/coming-soon" ? "#EC1C24" : ""}`} /> <p className='hidden md:block'>Coming Soon</p>
                    </span>
                </Link>
                <Link href="" >
                    <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/community" ? "font-bold text-white md:border-r-4 border-[#ec1c24]" : ""}`}>
                        <MdOutlineGroups className='text-2xl md:text-base' color={`${router.pathname === "/community" ? "#EC1C24" : ""}`} /> <p className='hidden md:block'>Community</p>
                    </span>
                </Link>
            </ul>
        </div>
        <div className='text-gray-500 space-y-3 pt-4 '>
            <p className="text-xs  tracking-tighter font-bold text-gray-500 hidden md:block">LIBRARY</p>
            <ul className='space-y-3 flex flex-col pl-[6px]'>
                <Link href="" >
                    <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/recent" ? "font-bold text-white md:border-r-4 border-[#ec1c24]" : ""}`}>
                        <AiFillClockCircle className='text-2xl md:text-base' color={`${router.pathname === "recent" ? "#EC1C24" : ""}`} /> 
                        <p className='hidden md:block'>Recent</p>
                    </span>
                </Link>
                <Link href="/bookmarks" >
                    <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/bookmarks" ? "font-bold text-white md:border-r-4 border-[#ec1c24]" : ""}`}>
                        <BsFillBookmarkCheckFill className='text-2xl md:text-base' color={`${router.pathname === "/bookmarks" ? "#EC1C24" : ""}`} /> <p className='hidden md:block'>Bookmarked</p>
                    </span>
                </Link>
                <Link href="" >
                    <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/top-rated" ? "font-bold text-white md:border-r-4 border-[#ec1c24]" : ""}`}>
                        <AiFillStar className='text-2xl md:text-base' color={`${router.pathname === "/top-rated" ? "#EC1C24" : ""}`} />
                        <p className='hidden md:block'>Top rated</p>
                    </span>
                </Link>
                <Link href="" >
                    <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/downloaded" ? "font-bold text-white md:border-r-4 border-[#ec1c24]" : ""}`}>
                        <AiOutlineDownload className='text-2xl md:text-base' color={`${router.pathname === "/downloaded" ? "#EC1C24" : ""}`} /> <p className='hidden md:block'>Downloaded</p>
                    </span>
                </Link>
                <Link href="/favourites" >
                    <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/favourites" ? "font-bold text-white md:border-r-4 border-[#ec1c24]" : ""}`}>
                        <AiFillHeart className='text-2xl md:text-base' color={`${router.pathname === "/favourites" ? "#EC1C24" : ""}`} /> <p className='hidden md:block'>Favourites</p>
                    </span>
                </Link>
            </ul>
        </div>
        <div className="space-y-3 text-gray-500 pt-4 pl-[6px]">
            <Link href="" >
                <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/help" ? "font-bold text-white md:border-r-4 border-[#ec1c24]" : ""}`}>
                    <AiFillInfoCircle className='text-2xl md:text-base' color={`${router.pathname === "/help" ? "#EC1C24" : ""}`} />
                    <p className='hidden md:block'>Help</p>
                </span>
                    </Link>
            <Link href="" >
                <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/settings" ? "font-bold text-white md:border-r-4 border-[#ec1c24]" : ""}`}>
                        <IoMdSettings className='text-2xl md:text-base' color={`${router.pathname === "/settings" ? "#EC1C24" : ""}`} /> <p className='hidden md:block'>Settings</p>
                </span>
            </Link>
        </div>
        <div className='pt-4 space-y-2 pl-[6px]'>
            <button className='flex items-center gap-2 text-gray-500 font-bold' onClick={logout}>
                <AiOutlineLogout className='text-2xl md:text-base' />
                <p className='hidden md:block'>Logout</p>
            </button>
            {session && (
                <div className="md:hidden">
                    <Image alt="profile" src={session?.user?.image || "https://i.pinimg.com/564x/bc/ed/64/bced64b767d4a7f6f0fd14e66b64ed35.jpg"} width={30} height={30} objectFit="cover" className='rounded-full'  />

            </div>
            )}
       
        </div>
    
    </aside>
  )
}

export default Sidebar