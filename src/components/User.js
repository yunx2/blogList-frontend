import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const User = () => {
  const userId = useParams().id
  // const user = users.find(user => user.id === userId)
  console.log('userId:', userId)
  return (
    <div> testtesttest
      {/* <h2>{user.name}</h2>
      <h3>favorite blogs</h3>
      <ul>
        {user.blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul> */}

    </div>
  )

}

export default User