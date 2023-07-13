import React from 'react'
import AdminLayout from '@/components/Layout/Dashboard/AdminLayout'
import { GetServerSideProps } from 'next'
import axiosClient from '@/libs/axiosClient'
import Meta from '@/components/common/Meta/Meta'
import { useQuery } from '@tanstack/react-query'

const Dashboard = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['getCategories'],
    queryFn: async () => {
      const { data } = await axiosClient.get('categories')
      if (data) {
        return data
      }
    },
  })

  return (
    <AdminLayout>
      <Meta title="Quản trị | BeuStore" description="Admin" />
      {/* {true ? (
        <h2>Hello loading...</h2>
      ) : ( */}
      <>
        {data?.data.map((item: any) => (
          <h1 key={item.category_Name}>{item.category_Name}</h1>
        ))}
      </>
    </AdminLayout>
  )
}

export default Dashboard

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   let token = req.cookies['accessToken']
//   let role = req.cookies['role']
//   if (!token) {
//     return {
//       redirect: {
//         destination: '/auth/login',
//         permanent: false,
//       },
//       props: {},
//     }
//   }
//   if (token && role !== 'admin') {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//       props: {},
//     }
//   }
//   return {
//     props: {},
//   }
// }
