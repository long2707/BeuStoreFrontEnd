import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { AuthContext } from '@/context/AuthProvider'
import { getCookie } from 'cookies-next'
import axiosClient from '@/libs/axiosClient'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, setUser } = React.useContext(AuthContext)

  React.useEffect(() => {
    const getInfoUser = async () => {
      try {
        const res = await axiosClient.post('auth/get-auth')
        setUser(res?.data?.data)
      } catch {}
    }
    getInfoUser()
  }, [setUser])

  return (
    <div className="min-h-full h-screen">
      <AdminHeader />
      <div className="h-full flex">
        <AdminSidebar />
        <main className="bg-[#f9fafbcc] md:w-[calc(100%_-_280px)] md:pt-[100px] px-4">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
