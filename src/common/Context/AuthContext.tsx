import { createContext, ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { verifyLogged, verifyNotLogged } from '../utils/verify-logged'

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({})

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const location = useLocation()

  const { pathname } = location

  const freeRoutes = ['/login', '/signup', '/resetpassword']

  const isFreeRoute = freeRoutes?.includes(pathname)

  useEffect(() => {
    if (!isFreeRoute) {
      verifyNotLogged()
    }

    if (isFreeRoute) {
      verifyLogged()
    }
  }, [pathname, isFreeRoute])

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}
