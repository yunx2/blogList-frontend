import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './Blog'

const BlogList = () => {
  const blogs = useSelector(state => state.blogs)
  return (
    <div>
      <h2>favorites</h2>
      {blogs.map((blog) => <Blog key={blog.id} id={blog.id}  />)}
    </div>
  )
}

export default BlogList