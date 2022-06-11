import { imageOptimizer } from 'next/dist/server/image-optimizer'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import Search from './Search'

const Right = () => {
  const [user,setUser] = useState<any>(null)
  useEffect(()=>{
    const user = supabase.auth.user()
    setUser(user)
  },[user])

  return (
    <div className="bg-[#1A161F] min-h-screen top-0 fixed right-0 max-w-[265px] p-4 text-gray-500 w-full space-y-4 z-50">
        <div className='flex gap-2 items-center'>
            <Image alt="profile" src={user?.user_metadata?.avatar_url || "https://i.pinimg.com/564x/bc/ed/64/bced64b767d4a7f6f0fd14e66b64ed35.jpg"} width={40} height={40} objectFit="cover" className='rounded-full'  />
            <div>
                <p className='text-white'>{user?.user_metadata?.full_name}</p>
                <p className='text-sm'>{user?.user_metadata?.email}</p>
            </div>
        </div>
        <Search />

    </div>
  )
}

export default Right