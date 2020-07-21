import React from 'react'
import Togglable from './Togglable'

const Blog = ({ blog }) => (
  <div className="blog">
    <p>{blog.title} by: {blog.author}</p>
    <Togglable buttonLabel="view details">
      <p>   url: {blog.url}
        <div> likes: {blog.likes}</div>
      </p>
    </Togglable>
  </div>

)

export default Blog
