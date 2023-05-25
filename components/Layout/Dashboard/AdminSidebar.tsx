import { AuthContext } from '@/context/AuthProvider'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  AiFillDashboard,
  AiFillPicture,
  AiTwotoneShopping,
} from 'react-icons/ai'
import { FaBloggerB, FaFileInvoiceDollar } from 'react-icons/fa'

interface IMenuSidebar {
  title: string
  path: string
  icon?: React.ReactNode
}

const MenuSidebar: IMenuSidebar[] = [
  {
    title: 'bảng điều khiển',
    path: '/admin',
    icon: <AiFillDashboard />,
  },
  {
    title: 'sản phẩm',
    path: '/admin/product',
    icon: <AiTwotoneShopping />,
  },
  {
    title: 'đơn hàng',
    path: '/admin/invoice',
    icon: <FaFileInvoiceDollar />,
  },
  {
    title: 'blog',
    path: '/admin/blog',
    icon: <FaBloggerB />,
  },
  {
    title: 'banner, slider',
    path: '/admin/banner',
    icon: <AiFillPicture />,
  },
]

const WIDTH = '280px'

const AdminSidebar = () => {
  const { user } = React.useContext(AuthContext)
  return (
    <div
      className={`bg-gray-default py-[24px] px-[20px] h-full w-[${WIDTH}] border-r-[1px] border-dashed border-[#919eab3d]`}
    >
      <>
        <div className="flex items-center bg-[#919eab1f] rounded-md py-4 px-5">
          <div className="w-10 h-10 rounded-full">
            <Image
              src={require('@/assets/avatar_default.jpg')}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <span className="ml-2 text-constrantText font-medium">
            {user?.email}
          </span>
        </div>
      </>
      <div className="mt-12">
        {MenuSidebar.map((item) => (
          <Link
            href={item?.path}
            key={item?.title}
            className="flex items-center text-[#637381]"
          >
            <span className="text-[24px] text-[#637381]">{item?.icon}</span>
            <span className="text-sm capitalize font-normal">
              {item?.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AdminSidebar
