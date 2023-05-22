import React from 'react'
import AdminLayout from '@/components/Layout/AdminLayout'
import { GetServerSideProps } from 'next'

const Dashboard = () => {
  return (
    <AdminLayout>
      <div>Dashboard</div>
    </AdminLayout>
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  let token = req.cookies['accessToken']
  let role = req.cookies['role']
  if (!token) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
      props: {},
    }
  }
  if (token && role !== 'admin') {
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
