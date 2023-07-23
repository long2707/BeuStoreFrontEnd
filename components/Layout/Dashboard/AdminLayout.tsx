import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'

import axiosClient from '@/libs/axiosClient'
import { useQuery } from '@tanstack/react-query'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  // const { isLoading } = useQuery({
  //   queryKey: ['getUser'],
  //   queryFn: async () => {
  //     const { data } = await axiosClient.post('auth/get-auth')
  //     if (data?.success) {
  //       return data?.data
  //     }
  //   },
  // })

  // if (isLoading) {
  //   return <h1> loading...</h1>
  // }
  return (
    <div className="min-h-full h-screen">
      <AdminHeader />
      <div className="h-full flex">
        <AdminSidebar />
        <main className="bg-[#f9fafbcc] md:w-[calc(100%_-_280px)] md:pt-[80px] px-4">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
