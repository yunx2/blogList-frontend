import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './Blog'
import { update } from '../services/blogs'

const BlogList = () => {
  const blogs = useSelector(state => state.blogs)
  return (
    <div>
      <h2>favorites</h2>
      {blogs.map(blog => <Blog key={blog.id} favorite={blog} updateBlog={update} />)}
    </div>
  )
}

export default BlogList