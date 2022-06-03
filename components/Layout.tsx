import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }:any) => {
  return (
    <>
        <Sidebar />
        <Navbar />
        {children}
    
        
    </>
  )
}

export default Layout