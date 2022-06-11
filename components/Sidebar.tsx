
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import { AiFillHome,AiFillClockCircle, AiFillStar, AiOutlineDownload, AiFillInfoCircle, AiOutlineLogout } from 'react-icons/ai'
import { BsFillAlarmFill, BsFillBookmarkCheckFill } from 'react-icons/bs'
import { RiCompassDiscoverFill, RiDoubleQuotesR } from 'react-icons/ri'
import { MdOutlineGroups } from 'react-icons/md'
import { IoMdSettings } from 'react-icons/io'
import { supabase } from '../lib/supabase';

interface ISidebar {
    handleLogout:()=>Promise<void>
}

const Sidebar = ({ handleLogout }:any) => {
    const router = useRouter();
    // logout using supabse
    const logout = async() => {
        await supabase.auth.signOut()
        router.push("/login")
    }

  return (
    <section className='flex flex-col bg-[#1A161F] pl-4 w-48 pt-16 pb-4 fixed top-0 min-h-screen left-0 divide-y space-y-4 divide-gray-500 z-10'>
        <div className='text-gray-500 space-y-3 '>
            <p className="text-xs  tracking-tighter font-bold">MENU</p>
            <ul className='space-y-3 flex flex-col'>
                <Link href="/" >
                    <span className={`flex gap-1.5 items-center cursor-pointer   ${router.pathname === "/" ? "font-bold text-white border-r-4 border-[#ec1c24]" : ""}`}>
                        <AiFillHome color={`${router.pathname === "/" ? "#EC1C24" : ""}`} /> Home
                    </span>
                </Link>
                <Link href="/discovery" >
                    <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/discovery" ? "font-bold text-white border-r-4 border-[#ec1c24]" : ""}`}>
                        <RiCompassDiscoverFill color={`${router.pathname === "/discovery" ? "#EC1C24" : ""}`} /> Discovery
                    </span>
                </Link>
                <Link href="/coming-soon" >
                    <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/coming-soon" ? "font-bold text-white" : ""}`}>
                        <BsFillAlarmFill color={`${router.pathname === "/coming-soon" ? "#EC1C24" : ""}`} /> Coming Soon
                    </span>
                </Link>
                <Link href="/community" >
                    <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/community" ? "font-bold text-white" : ""}`}>
                        <MdOutlineGroups color={`${router.pathname === "/community" ? "#EC1C24" : ""}`} /> Community
                    </span>
                </Link>
            </ul>
        </div>
        <div className='text-gray-500 space-y-3 pt-4'>
            <p className="text-xs  tracking-tighter font-bold text-gray-500">LIBRARY</p>
            <ul className='space-y-3 flex flex-col'>
                <Link href="/recent" >
                    <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/recent" ? "font-bold text-white" : ""}`}>
                        <AiFillClockCircle color={`${router.pathname === "recent" ? "#EC1C24" : ""}`} /> Recent
                    </span>
                </Link>
                <Link href="/bookmarks" >
                    <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/bookmarks" ? "font-bold text-white" : ""}`}>
                        <BsFillBookmarkCheckFill color={`${router.pathname === "/bookmarks" ? "#EC1C24" : ""}`} /> Bookmarked
                    </span>
                </Link>
                <Link href="/top-rated" >
                    <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/top-rated" ? "font-bold text-white" : ""}`}>
                        <AiFillStar color={`${router.pathname === "/top-rated" ? "#EC1C24" : ""}`} />Top Rated
                    </span>
                </Link>
                <Link href="/downloaded" >
                    <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/downloaded" ? "font-bold text-white" : ""}`}>
                        <AiOutlineDownload color={`${router.pathname === "/downloaded" ? "#EC1C24" : ""}`} /> Downloaded
                    </span>
                </Link>
            </ul>
        </div>
        <div className="space-y-3 text-gray-500 pt-4">
            <Link href="/help" >
                <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/help" ? "font-bold text-white" : ""}`}>
                    <AiFillInfoCircle color={`${router.pathname === "/help" ? "#EC1C24" : ""}`} />Help
                </span>
                    </Link>
            <Link href="/info" >
                <span className={`flex gap-1.5 items-center cursor-pointer ${router.pathname === "/settings" ? "font-bold text-white" : ""}`}>
                        <IoMdSettings color={`${router.pathname === "/settings" ? "#EC1C24" : ""}`} /> Settings
                </span>
            </Link>
        </div>
        <div className='pt-4'>
            <button className='flex items-center gap-2 text-gray-500 font-bold' onClick={logout}>
                <AiOutlineLogout />
                Logout
            </button>
        </div>
    
    </section>
  )
}

export default Sidebar