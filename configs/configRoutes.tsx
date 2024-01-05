import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { AiOutlineDashboard } from 'react-icons/ai'
import { FaBlogger } from 'react-icons/fa'
import { FiShoppingBag } from 'react-icons/fi'
import { BiCreditCard, BiSlideshow } from 'react-icons/bi'

export interface IConfigRoutes {
  state: string
  Child?: IConfigRoutes[]
  sidebarProps?: {
    disPlayText: string
    icon?: React.ReactNode
  }
}

export const appRoutes: IConfigRoutes[] = [
  {
    state: 'dashboard',
    sidebarProps: {
      disPlayText: 'Bảng điều khiển',
      icon: <AiOutlineDashboard />,
    },
  },
  {
    state: 'product',
    sidebarProps: {
      disPlayText: 'Quản lý sản phẩm',
      icon: <FiShoppingBag />,
    },
    Child: [
      {
        state: 'product.add',
        sidebarProps: {
          disPlayText: 'Thêm sản phẩm',
        },
      },
      {
        state: 'product.list',
        sidebarProps: {
          disPlayText: 'Danh sách sản phẩm',
        },
      },
    ],
  },
  {
    state: 'order',
    sidebarProps: {
      disPlayText: 'Đơn hàng',
      icon: <BiCreditCard />,
    },
    Child: [
      {
        state: 'order.list',
        sidebarProps: {
          disPlayText: 'Danh sách đơn hàng',
        },
      },
      //   {
      //     state: 'order.add',
      //     sidebarProps: {
      //       disPlayText: 'Tạo đơn hàng',
      //     },
      //   },
    ],
  },
  {
    state: 'blog',
    sidebarProps: {
      disPlayText: 'Blog',
      icon: <FaBlogger />,
    },
    Child: [
      {
        state: 'blog.add',
        sidebarProps: {
          disPlayText: 'Tạo bài viết',
        },
      },
      {
        state: 'blog.list',
        sidebarProps: {
          disPlayText: 'Danh sách bài viết',
        },
      },
    ],
  },
  {
    state: 'banner',
    sidebarProps: {
      disPlayText: 'Banner, Popup',
      icon: <BiSlideshow />,
    },
  },
]

export default appRoutes
