import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './Blog'

const BlogList = () => {
  const blogs = useSelector(state => state.blogs)
  return (
    <div>
      <h2>favorites</h2>
      {blogs.map((blog, i) => <Blog key={i} blog={blog}  />)}
    </div>
  )
}

export default BlogList