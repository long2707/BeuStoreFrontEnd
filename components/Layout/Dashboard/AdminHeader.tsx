import { AuthContext } from '@/context/AuthProvider'
import React from 'react'

const AdminHeader = () => {
  const { user } = React.useContext(AuthContext)
  const fullName: string = React.useMemo(() => {
    return user?.firstName + ' ' + user?.lastName
  }, [user])
  return (
    <div>
      <span>{user && fullName}</span>
    </div>
  )
}

export default AdminHeader
