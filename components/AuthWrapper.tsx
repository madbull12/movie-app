import { useAuth } from '../context/UserContext'
import { useRouter } from 'next/router'
import React from 'react'
import ProtectedRoute from './ProtectedRoute'
import { useSession } from 'next-auth/react'

const authRoutes = ['/']

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const session = useSession();

  if (session.status === "loading") return null

  return (
    <>
      {authRoutes.includes(router.pathname) ? (
        <ProtectedRoute>{children}</ProtectedRoute>
      ) : (
        children
      )}
    </>
  )
}

export default AuthWrapper