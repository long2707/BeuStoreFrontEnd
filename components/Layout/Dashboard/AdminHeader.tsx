import { useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { IoIosNotifications } from 'react-icons/io'

interface IUser {
  firstName: string
  lastName: string
  email: string
}

const AdminHeader = () => {
  const user: IUser | undefined = useQueryClient().getQueryData(['getUser'])

  return (
    <header className="bg-[#f9fafbcc] md:w-[calc(100%_-_280px)] fixed left-auto top-0 right-0 px-10 h-20 header">
      <div className="flex justify-end h-full items-center">
        <div className="group relative">
          <button className="relative inline-block p-2 group-hover:bg-gray-200 group-hover:rounded-full group-hover:scale-105 transition-transform">
            <span className="relative">
              <IoIosNotifications className="text-[#637381] group-hover:text-green-600 text-2xl" />
              <span className="flex items-center justify-center absolute bg-red-600 text-white top-0 right-0 scale-100 translate-x-[40%] translate-y-[-47%] rounded-full text-[0.75rem] leading-4 h-5 w-5 px-[6px]">
                2
              </span>
            </span>
          </button>
          <div className="bg-white  w-[300px] absolute right-0 shadow-md  rounded-lg animate-[grow_.3s_ease-in-out] origin-[95%_top] before:contents-[''] before:absolute before:-top-6 before:right-[0.675rem]  before:border-x-[10px] before:border-y-[12px] before:border-solid before:border-t-transparent before:border-l-transparent before:border-r-transparent before:border-b-white hidden group-hover:!block">
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
          <div className="bg-white w-52 absolute right-0 shadow-md  rounded-lg animate-[grow_.3s_ease-in-out] origin-[95%_top] before:contents-[''] before:absolute before:-top-6 before:right-[0.675rem]  before:border-x-[10px] before:border-y-[12px] before:border-solid before:border-t-transparent before:border-l-transparent before:border-r-transparent before:border-b-white hidden group-hover:!block">
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
