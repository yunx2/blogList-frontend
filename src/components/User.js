import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const User = () => {
  const userId = useParams().id
  const user = useSelector(state => state.users.find(user => user.id === userId))
  // console.log('user:', user)

  if (user) {
    return (
      <div>
        <h2>{user.name}</h2>
        <h3>favorite blogs</h3>
        <ul>
          {user.blogs.map(blog => (
            <li key={blog.id}>{blog.title}</li>
          ))}
        </ul>
      </div>
    )
  }
  return null
}

export default User