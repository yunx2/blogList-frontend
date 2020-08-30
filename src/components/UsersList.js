import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAllUsers } from '../reducers/usersReducer'

const UsersList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
  const users = useSelector(state => state.users)
  // console.log('all users:', users)
  return (
    <div>
      <h2>users</h2>
      {users.map(user => {
        return <p key={user.id}>{user.username}     {user.blogs.length}</p>
      })}
    </div>
  )
}

export default UsersList