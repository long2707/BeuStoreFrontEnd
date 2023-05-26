import { AuthContext } from '@/context/AuthProvider'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineDashboard } from 'react-icons/ai'
import { FaBlogger } from 'react-icons/fa'
import { FiShoppingBag } from 'react-icons/fi'
import { BiCreditCard, BiSlideshow } from 'react-icons/bi'

interface IMenuSidebar {
  title: string
  path: string
  icon?: React.ReactNode
}

const MenuSidebar: IMenuSidebar[] = [
  {
    title: 'bảng điều khiển',
    path: '/admin/dashboard',
    icon: <AiOutlineDashboard />,
  },
  {
    title: 'sản phẩm',
    path: '/admin/product',
    icon: <FiShoppingBag />,
  },
  {
    title: 'đơn hàng',
    path: '/admin/invoice',
    icon: <BiCreditCard />,
  },
  {
    title: 'blog',
    path: '/admin/blog',
    icon: <FaBlogger />,
  },
  {
    title: 'banner, slider',
    path: '/admin/banner',
    icon: <BiSlideshow />,
  },
]

const WIDTH = '280px'

const AdminSidebar = () => {
  const { user } = React.useContext(AuthContext)
  const router = useRouter()

  return (
    <div
      className={`bg-[#f9fafbcc] py-3 px-5 min-h-full overflow-y-auto w-[280px] border-r-[1px] border-dashed border-[#919eab3d]`}
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
            {user?.email}
          </span>
        </div>
      </>
      <div className="mt-10">
        {MenuSidebar.map((item) => (
          <Link
            href={item?.path}
            key={item?.title}
            className={`flex items-center text-[#637381] font-normal px-5 py-3 mb-1 transition-colors rounded-lg  hover:bg-[#00ab5514] ${
              router.pathname.includes(item.path)
                ? '!text-[#00AB55] !font-medium bg-[#00ab5514]'
                : ''
            }`}
          >
            <span className="text-[24px] mr-4">{item?.icon}</span>
            <span className="text-sm capitalize">{item?.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AdminSidebar
