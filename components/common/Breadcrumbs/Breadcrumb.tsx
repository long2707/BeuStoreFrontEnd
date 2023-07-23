import Link from 'next/link'
import React from 'react'
interface Idata {
  pathName: string
  title: string
}
const BreadCrumb = ({ data }: { data: Idata[] }) => {
  return (
    <ol className="flex items-center">
      {data.map((route: Idata) => (
        <React.Fragment key={route.pathName}>
          <li>
            <Link href={route.pathName} className="text-base">
              {route.title == 'admin' ? 'Dashboard' : route.title}
            </Link>
          </li>
          <li className="[&:not(:last-child)]:h-1 [&:not(:last-child)]:w-1 [&:not(:last-child)]:rounded-full [&:not(:last-child)]:mx-2  [&:not(:last-child)]:bg-gray-400"></li>
        </React.Fragment>
      ))}
    </ol>
  )
}

export default BreadCrumb
