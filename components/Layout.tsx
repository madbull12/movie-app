import { User } from '@supabase/supabase-js'
import { useRouter } from 'next/router'
import React, { MouseEventHandler, useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useRecoilState } from 'recoil'
import { rightSidebar } from '../atoms/rightSidebar'
import { supabase } from '../lib/supabase'
import Navbar from './Navbar'
import Right from './Right'
import Sidebar from './Sidebar'

interface IProps {
  children:any
}
const Layout = ({ children }:IProps) => {
  const router = useRouter()

  const [openSidebar] = useRecoilState(rightSidebar);

  if(router.pathname.includes("/login")) return children;
  if(router.pathname.includes("/signup")) return children;


  return (
    <>
         <Toaster
            
            position="top-center"
            reverseOrder={false}
          />
        <Sidebar  />
        <Navbar />
        {children}
        <div className={`hidden lg:block ${openSidebar ? 'md:block' : ""}`}>
          <Right />

        </div>
        
    </>
  )
}

export default Layout