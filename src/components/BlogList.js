import React, { useState, useEffect } from 'react'
import Blog from './Blog'
import { update } from '../services/blogs'

const BlogList = ({ blogs }) => (
  <div>
    <h2>favorites</h2>
    {blogs.map(blog => <Blog key={blog.id} favorite={blog} updateBlog={update} />)}
  </div>
)

export default BlogList