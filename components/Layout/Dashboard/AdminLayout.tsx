import React, { Suspense } from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'

import axiosClient from '@/libs/axiosClient'
import { useQuery } from '@tanstack/react-query'
import { BackDrop } from '@/components/common/BackDrop'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [IsOpenSidebar, setIsOpenSidebar] = React.useState<boolean>(false)

  const { isLoading } = useQuery({
    queryKey: ['getUser'],
    queryFn: async () => {
      const data = await axiosClient.post('auth/get-auth')
      if (data.status === 200) {
        return data?.data?.data
      }
    },
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })
  // const { data, isError, isLoading } = useQuery({
  //   queryKey: ['getCategories'],
  //   queryFn: async () => {
  //     const { data } = await axiosClient.get('categories')
  //     if (data) {
  //       return data
  //     }
  //   },
  // })
  if (isLoading) return <h1>Loading</h1>
  return (
    <>
      <div className="min-h-0 h-full">
        <AdminHeader
          onSidebarOpen={() => {
            setIsOpenSidebar(true)
            document.body.style.overflow = 'hidden'
          }}
        />
        <div className="h-full flex">
          <AdminSidebar
            openSidebar={IsOpenSidebar}
            onCloseSidebar={() => {
              setIsOpenSidebar(false)
              document.body.style.overflow = 'auto'
            }}
          />

          <main className="bg-[#f4f6f8] w-full xl:w-[calc(100%_-_280px)]  xl:relative xl:left-[280px] pt-[80px] px-4 xl:px-9">
            {children}
          </main>
        </div>
        <BackDrop
          openBackDrop={IsOpenSidebar}
          onCloseSidebar={() => {
            setIsOpenSidebar(false)
            document.body.style.overflow = 'auto'
          }}
        />
      </div>
    </>
  )
}

export default AdminLayout
