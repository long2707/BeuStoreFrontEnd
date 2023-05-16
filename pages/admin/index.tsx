import { useRouter } from 'next/router'
import React from 'react'

const Admin = () => {
  const router = useRouter()
  React.useEffect(() => {
    router.push('/admin/dashboard')
  }, [router])
}

export default Admin
