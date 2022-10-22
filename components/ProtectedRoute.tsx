import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React,{useEffect } from 'react'
import { useAuth } from '../context/UserContext'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    const { status } = useSession();
  
    useEffect(() => {
      if (status === "unauthenticated") {
        router.push('/login')
      }
    }, [router, status])
  
    if (status === "unauthenticated") return null
  
    return <>{children}</>
}

export default ProtectedRoute