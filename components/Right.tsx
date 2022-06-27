import { imageOptimizer } from 'next/dist/server/image-optimizer'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/UserContext'
import { supabase } from '../lib/supabase'
import Search from './Search'
import { IoClose } from 'react-icons/io5'
import { rightSidebar } from '../atoms/rightSidebar'
import { useRecoilState } from 'recoil'

const Right = () => {
  // const [user,setUser] = useState<any>(null)
  const { user } = useAuth();
  const [openSidebar,setOpenSidebar] = useRecoilState(rightSidebar);


  return (
    <div className="bg-[#1A161F] min-h-screen top-0 fixed right-0  p-4 text-gray-500  space-y-4 z-50">
        <div className='flex gap-2 items-center'>
            <Image alt="profile" src={user?.user_metadata?.avatar_url || "https://i.pinimg.com/564x/bc/ed/64/bced64b767d4a7f6f0fd14e66b64ed35.jpg"} width={40} height={40} objectFit="cover" className='rounded-full'  />
            <div className=' md:block'>
                <p className='text-white'>{user?.user_metadata?.full_name}</p>
                <p className='text-sm'>{user?.user_metadata?.email}</p>
            </div>
        </div>
        <div className='absolute right-2 -top-2 cursor-pointer hidden md:block lg:hidden' onClick={()=>setOpenSidebar(false)}>
          <IoClose className='text-lg' />
        </div>
      
        <Search />

  

    </div>
  )
}

export default Right