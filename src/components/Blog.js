import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Togglable from './Togglable'
import { likeBlog, deleteById } from '../reducers/blogsReducer'
import { deleteBlog } from '../services/blogs'

const Blog = ({ blog, updateBlog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const dispatch = useDispatch()

  const [likes, setLikes] = useState(blog.likes)
  const handleLike = () => {
    setLikes(likes + 1)
    const dataObject = {
      user: blog.user,
      likes,
      author: blog.author,
      title: blog.title,
      url: blog.url
    }

    // console.log('id:', blog.id)
    const updated = updateBlog(blog.id, dataObject)
    // console.log('database updated', updated.data)
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
          <p> likes: {likes}
            <button type="button" onClick={handleLike}>like</button>
          </p>
        </div>
      </Togglable>
    </div>
  )
}

export default Blog
