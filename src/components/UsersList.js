import React from 'react'
import { useSelector } from 'react-redux'

const UsersList = () => {
  const users = useSelector(state => state.users)
  // console.log('all users:', users)
  return (
    <div>
      <h2>users</h2>
      <div>
       test test test users view
      </div>
    </div>
  )

}

export default UsersList