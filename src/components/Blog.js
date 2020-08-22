import React from 'react'
import { useDispatch } from 'react-redux'
import Togglable from './Togglable'
import { likeBlog, deleteById } from '../reducers/blogsReducer'
import { deleteBlog, update } from '../services/blogs'

const Blog = ({ blog }) => {
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
    update(blog.id, dataObject)
    dispatch(likeBlog(dataObject))
  }
  const handleDelete = () => {
    deleteBlog(blog.id)
    dispatch(deleteById(blog.id))
  }

  return (
    <div style={blogStyle} className="blog">
      <p>{blog.title} by: {blog.author}</p>
      <button onClick={handleDelete}>
        delete
      </button>
      <Togglable buttonLabel="view details">
        <div className="details">
       url: {blog.url}
          <p> likes: {blog.likes + 1}
            <button type="button" onClick={handleLike}>like</button>
          </p>
        </div>
      </Togglable>
    </div>
  )
}

export default Blog
