import React from 'react'
import AdminLayout from '@/components/Layout/Dashboard/AdminLayout'
import { GetServerSideProps } from 'next'
import axiosClient from '@/libs/axiosClient'
import Meta from '@/components/common/Meta/Meta'
import { AuthContext } from '@/context/AuthProvider'

const Dashboard = () => {
  const { user } = React.useContext(AuthContext)

  const [data, setData] = React.useState([])
  const fetch = async () => {
    let res = await axiosClient.get('categories', { withCredentials: true })
    setData(res?.data?.data?.data)
  }
  React.useEffect(() => {
    fetch()
  }, [])
  return (
    <AdminLayout>
      <Meta title="Quản trị | BeuStore" description="Admin" />
      <div>Dashboard</div>

      {data &&
        data?.map((item: any) => (
          <span key={item.categoryId}>{item?.category_Name}</span>
        ))}
    </AdminLayout>
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  let token = req.cookies['accessToken']
  let userInfo = JSON.parse(req.cookies['user'] ?? '')
  if (!token) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
      props: {},
    }
  }
  if (token && userInfo?.role !== 'admin') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
      props: {},
    }
  }
  return {
    props: {},
  }
}
