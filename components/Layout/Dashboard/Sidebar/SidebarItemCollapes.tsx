import { IConfigRoutes } from '@/configs/configRoutes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import SidebarItem from './SidebarItem'
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'

const SidebarItemCollapes = (props: IConfigRoutes) => {
  const router = useRouter()
  return (
    <>
      <li
        key={props?.state}
        className={`flex items-center justify-start  text-[#637381] font-normal px-5 py-3 mb-1 transition-colors rounded-lg  hover:bg-[#00ab5514] ${
          router.pathname == props?.state.replace('.', '/')
            ? '!text-[#00AB55] !font-medium bg-[#00ab5514]'
            : ''
        }`}
      >
        <span className="text-[24px] mr-4 flex-shrink-0">
          {props?.sidebarProps?.icon}
        </span>
        <span className="text-sm capitalize flex-1">
          {props?.sidebarProps?.disPlayText}
        </span>

        <BiChevronRight className="flex-shrink-0 text-xl" />
      </li>
      <ul className="">
        {props?.Child?.map((itemRoute) =>
          itemRoute?.Child ? (
            <SidebarItemCollapes key={itemRoute.state} {...itemRoute} />
          ) : (
            <div key={itemRoute.state} className="ml-4">
              <SidebarItem {...itemRoute} />
            </div>
          )
        )}
      </ul>
    </>
  )
}

export default SidebarItemCollapes
