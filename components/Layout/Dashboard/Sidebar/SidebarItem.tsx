import { IConfigRoutes } from '@/configs/configRoutes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const SidebarItem = (props: IConfigRoutes) => {
  const router = useRouter()
  return (
    <div>
      <Link
        href={props?.state?.replace('.', '/')}
        key={props?.state}
        onClick={() => {
          document.body.style.overflow = 'auto'
          console.log(router.pathname)
        }}
        className={`flex items-center text-[#637381] font-normal px-5 py-3 mb-1 transition-colors rounded-lg  hover:bg-[#00ab5514] ${
          router.pathname == '/' + props?.state.replace('.', '/')
            ? '!text-[#00AB55] !font-medium bg-[#00ab5514]'
            : ''
        }`}
      >
        <span className="text-[24px] mr-4">{props?.sidebarProps?.icon}</span>
        <span className="text-sm capitalize">
          {props?.sidebarProps?.disPlayText}
        </span>
      </Link>
    </div>
  )
}

export default SidebarItem
