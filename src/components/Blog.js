import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Blog = ({ id }) => {
  const blog = useSelector( state  => {
    return state.blogs.find(blog => blog.id === id)
  })
  // console.log('blog:', blog)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div style={blogStyle} className="blog">
      <p><Link to={`/blogs/${blog.id}`}>
        {blog.title} by: {blog.author}
      </Link></p>
    </div>
  )
}

export default Blog
