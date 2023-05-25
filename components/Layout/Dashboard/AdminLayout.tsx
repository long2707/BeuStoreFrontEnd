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
    <div className="h-screen">
      <AdminHeader />
      <AdminSidebar />
      <main className="bg-gray-default">{children}</main>
    </div>
  )
}

export default AdminLayout
