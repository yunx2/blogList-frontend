import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Blog = ({ id }) => {
  const blog = useSelector( state  => {
    return state.blogs.find(blog => blog.id === id)
  })
  // console.log('blog:', blog)

  return (
    <tr key={id}>
      <td>
        <Link to={`/blogs/${blog.id}`}>
          {blog.title}
        </Link>
      </td>
      <td>
      by: {blog.author}
      </td>
    </tr>
  )
}

export default Blog
