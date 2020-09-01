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
  const styling = { textAlign: 'center' }
  return (
    <div>
      <h2>users</h2>
      <table>
        <tr>
          <th></th>
          <th>blogs added</th>
        </tr>
        {users.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.blogs.length}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default UsersList