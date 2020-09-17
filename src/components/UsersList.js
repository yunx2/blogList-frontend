import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllUsers } from '../reducers/usersReducer'

const UsersList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  const users = useSelector(state => state.users)
  // console.log('all users:', users)
  return (
    <div>
      <h2>users</h2>
      <table>
        <tbody>
          <tr>
            <td></td>
            <th>blogs added</th>
          </tr>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td><Link to={`/users/${user.id}`}>{user.username}</Link></td>
                <td>{user.blogs.length}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UsersList