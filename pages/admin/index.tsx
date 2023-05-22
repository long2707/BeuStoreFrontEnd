import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const Admin = () => {}

export default Admin

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  let token = req.cookies['accessToken']
  let role = req.cookies['role']
  if (token) {
    return {
      props: {},
      redirect: {
        destination: '/admin/dashboard',
      },
    }
  }
  return {
    redirect: {
      destination: '/admin/login',
      permanent: false,
    },
    props: {},
  }
}
