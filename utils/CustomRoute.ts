import React from 'react'
import { usePathname } from 'next/navigation'

export const customRoutes = (pathName: string) => {
  let currentPath = ''
  const asPathOutQuery = pathName.split('?')[0]
  const routes = asPathOutQuery.split('/').filter((item) => item != '')
  const arrRoutes = routes.map((route: string, index: number) => {
    currentPath += '/' + route
    return { pathName: currentPath, title: route }
  })
  return arrRoutes
}
