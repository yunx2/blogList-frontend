import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Togglable from './Togglable'
import { likeBlog, deleteById } from '../reducers/blogsReducer'

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
  const dispatch = useDispatch()

  const handleLike = () => {
    const dataObject = {
      ...blog,
      likes: blog.likes + 1
    }
    // update(blog.id, dataObject)
    dispatch(likeBlog(dataObject))
  }

  return (
    <div style={blogStyle} className="blog">
      <p>{blog.title} by: {blog.author}</p>
      <button onClick={() => dispatch(deleteById(blog.id))}>
        delete
      </button>
      <Togglable buttonLabel="view details">
        <div className="details">
       url: {blog.url}
          <p> likes: {blog.likes}
            <button type="button" onClick={handleLike}>like</button>
          </p>
        </div>
      </Togglable>
    </div>
  )
}

export default Blog
