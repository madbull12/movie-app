import { User } from '@supabase/supabase-js'
import { useRouter } from 'next/router'
import React, { MouseEventHandler, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import Navbar from './Navbar'
import Right from './Right'
import Sidebar from './Sidebar'

const Layout = ({ children }:any) => {
  const router = useRouter()

  if(router.pathname.includes("/login")) return children;
  if(router.pathname.includes("/signup")) return children;

  


  return (
    <>
        <Sidebar  />
        <Navbar />
        {children}
        <Right />
        
    </>
  )
}

export default Layout