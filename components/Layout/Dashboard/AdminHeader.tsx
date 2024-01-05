import { useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'

import React, { MutableRefObject } from 'react'
import { IoIosNotifications } from 'react-icons/io'
import { BiMenuAltRight } from 'react-icons/bi'
interface IUser {
  firstName: string
  lastName: string
  email: string
}

const AdminHeader = ({ onSidebarOpen }: { onSidebarOpen: () => void }) => {
  const user: IUser | undefined = useQueryClient().getQueryData(['getUser'])

  const scrollRef = React.useRef() as MutableRefObject<HTMLDivElement>

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        scrollRef.current.classList.add(
          'bg-opacity-80',
          '!h-16',
          'transition-all',
          'backdrop-blur-sm'
        )
      } else {
        scrollRef.current.classList.remove(
          'bg-opacity-80',
          '!h-16',
          'transition-all',
          'backdrop-blur-sm'
        )
      }
    })
    return () => {
      window.removeEventListener('scroll', () => {}, true)
    }
  }, [])

  return (
    <header
      ref={scrollRef}
      className="bg-[#f4f6f8] w-full backdrop:blur-sm xl:w-[calc(100%_-_280px)] fixed left-auto top-0 right-0 px-4 xl:px-9 h- h-20 header z-10 flex justify-between items-center xl:block"
    >
      <button
        className="block xl:hidden p-1 rounded-full hover:bg-gray-200"
        onClick={onSidebarOpen}
      >
        <BiMenuAltRight className="text-gray-600 text-3xl" />
      </button>
      <div className="flex justify-end h-full items-center">
        <div className="group relative">
          <button className=" inline-block p-2 group-hover:bg-gray-200 group-hover:rounded-full group-hover:scale-105 transition-transform">
            <div className="relative">
              <IoIosNotifications className="text-[#637381] group-hover:text-green-600 text-2xl" />
              <span className="flex items-center justify-center bg-red-600 text-white absolute -top-2 -right-2 scale-100  rounded-full text-[0.75rem] leading-4 h-5 w-5 px-[6px]">
                2
              </span>
            </div>
          </button>

          <div className="bg-white  w-[300px] absolute z-10 right-0 shadow-md  rounded-lg animate-[grow_.3s_ease-in-out] origin-[95%_top] before:contents-[''] before:absolute before:-top-6 before:right-[0.675rem]  before:border-x-[10px] before:border-y-[12px] before:border-solid before:border-t-transparent before:border-l-transparent before:border-r-transparent before:border-b-white hidden group-hover:!block">
            <div className="m-2 p-2  flex items-center justify-start hover:bg-[#919eab14] hover:rounded-md text-sm">
              <span className="p-2 bg-[#f9fafbcc] rounded-full">
                <Image src={require('@/assets/ic_package.svg')} alt="" />
              </span>
              <span className="ml-2">Bạn có 2 đơn hàng mới</span>
            </div>
            <div className="m-2 p-2  flex items-center justify-start hover:bg-[#919eab14] hover:rounded-md text-sm">
              <span className="p-2 bg-[#f9fafbcc] rounded-full">
                <Image src={require('@/assets/ic_package.svg')} alt="" />
              </span>
              <span className="ml-2">Bạn có 2 đơn hàng mới</span>
            </div>
          </div>
        </div>

        <div className="relative ml-5 group">
          <button className="group-hover:scale-105 group-hover:before:bg-[#161c24cc] group-hover:before:absolute group-hover:before:right-0 group-hover:before:rounded-full group-hover:before:w-full group-hover:before:h-full group-hover:before:z-30 group-hover:before:content-[''] group transition-transform">
            <Image
              width={40}
              height={40}
              className="rounded-full"
              src={require('@/assets/avatar_default.jpg')}
              alt="avatar"
            />
          </button>
          <div className="bg-white w-52 absolute right-0 shadow-md  rounded-lg animate-[grow_.3s_ease-in-out] origin-[95%_top] before:contents-[''] before:absolute before:-top-6 before:right-[0.675rem]  before:border-x-[10px] before:border-y-[12px] before:border-solid before:border-t-transparent before:border-l-transparent before:border-r-transparent before:border-b-white hidden group-hover:!block z-[999] hover:body:">
            <ul className=" z-20">
              <li className=" py-2 border-b border-b-gray-100">
                <p className="px-4">
                  {user?.firstName} {user?.lastName}
                </p>
              </li>
              <li className=" cursor-pointer m-2 p-2 hover:bg-[#919eab14] hover:rounded-md text-sm">
                <Link href={'/admin/profile'}>Thông tin</Link>
              </li>
              <li className="cursor-pointer m-2 p-2 hover:bg-[#919eab14] hover:rounded-md text-sm">
                <Link href={'/logout'}> Đăng xuất</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader
