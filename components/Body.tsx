import React from 'react'

const Body = ({ children }:{ children:React.ReactNode }) => {
  return (
    <main className='pl-6 bg-[#0D0C0F]  text-gray-500 ml-[55px] md:ml-[190px] mx-auto max-w-4xl min-h-screen space-y-8 '>
        {children}
    </main>
  )
}

export default Body