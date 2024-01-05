import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineDashboard } from 'react-icons/ai'
import { FaBlogger } from 'react-icons/fa'
import { FiShoppingBag } from 'react-icons/fi'
import { BiCreditCard, BiSlideshow } from 'react-icons/bi'
import { useQueryClient } from '@tanstack/react-query'
import appRoutes from '@/configs/configRoutes'
import SidebarItemCollapes from './SidebarItemCollapes'
import SidebarItem from './SidebarItem'

interface IMenuSidebar {
  title: string
  path: string
  icon?: React.ReactNode
}

const MenuSidebar: IMenuSidebar[] = [
  {
    title: 'bảng điều khiển',
    path: '/dashboard',
    icon: <AiOutlineDashboard />,
  },
  {
    title: 'sản phẩm',
    path: '/dashboard/product',
    icon: <FiShoppingBag />,
  },
  {
    title: 'đơn hàng',
    path: '/dashboard/invoice',
    icon: <BiCreditCard />,
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: <FaBlogger />,
  },
  {
    title: 'banner, slider',
    path: '/admin/banner',
    icon: <BiSlideshow />,
  },
]

const WIDTH = '280px'

interface IUser {
  firstName: string
  lastName: string
  email: string
}

const AdminSidebar = ({
  openSidebar,
  onCloseSidebar,
}: {
  openSidebar: boolean
  onCloseSidebar: () => void
}) => {
  const user: IUser | undefined = useQueryClient().getQueryData(['getUser'])
  const router = useRouter()

  return (
    <div
      className={`bg-[#f4f6f8] py-3 px-5  h-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 overflow-y-auto w-[280px] border-r-[1px] border-dashed border-[#919eab3d]  transition-all duration-300 xl:transition-none fixed top-0 xl:left-0 z-30 ${
        openSidebar == true ? 'left-0' : '-left-[280px]'
      } `}
    >
      <Image
        src={require('@/assets/BeuStore_logo.png')}
        alt="logo"
        className="mb-5 mx-auto"
      />
      <>
        <div className="flex items-center bg-[#919eab1f] rounded-md py-4 px-5">
          <div className="w-10 h-10 rounded-full">
            <Image
              src={require('@/assets/avatar_default.jpg')}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <span className="ml-2 text-constrantText font-semibold">
            {user?.firstName} {user?.lastName}
          </span>
        </div>
      </>
      <div className="mt-10">
        {appRoutes?.map((route) =>
          route?.Child ? (
            <React.Fragment key={route.state}>
              <SidebarItemCollapes {...route} />
            </React.Fragment>
          ) : (
            <React.Fragment key={route.state}>
              <SidebarItem {...route} />
            </React.Fragment>
          )
        )}
      </div>
    </div>
  )
}

export default AdminSidebar
