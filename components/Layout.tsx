import React from 'react'
import Navbar from './Navbar'
import Right from './Right'
import Sidebar from './Sidebar'

const Layout = ({ children }:any) => {
  return (
    <>
        <Sidebar />
        <Navbar />
        {children}
        <Right />
        
    </>
  )
}

export default Layout