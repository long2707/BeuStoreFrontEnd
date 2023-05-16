import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </>
  )
}

export default AdminLayout
