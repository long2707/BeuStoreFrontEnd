import AdminLayout from '@/components/Layout/Dashboard/AdminLayout'
import BreadCrumb from '@/components/common/Breadcrumbs/Breadcrumb'
import { useRouter } from 'next/router'
import React from 'react'

interface Idata {
  pathName: string
  title: string
}
const ListProductAdmin = () => {
  const router = useRouter()

  const routes = router.pathname.split('/').filter((item) => item != '')
  let currentPath = ''
  const arrRoutes = routes.map((route: string) => {
    currentPath += '/' + route
    return { pathName: currentPath, title: route }
  })

  return (
    <AdminLayout>
      <BreadCrumb data={arrRoutes} />
      <div>index</div>
    </AdminLayout>
  )
}

export default ListProductAdmin
