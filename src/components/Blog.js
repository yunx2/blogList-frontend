import React from 'react'
import { useDispatch } from 'react-redux'
import Togglable from './Togglable'
import { likeBlog } from '../reducers/blogsReducer'

const Blog = ({ blog }) => {
  // console.log('blog from Blog', blog)

const Blog = ({ blog, updateBlog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const [likes, setLikes] = useState(favorite.likes)
  const handleLike = async () => {
    setLikes(likes + 1)
    const dataObject = {
      user: favorite.user,
      likes,
      author: favorite.author,
      title: favorite.title,
      url: favorite.url
    }
    console.log(likes)
    const updated = await updateBlog(favorite.id, dataObject )
    console.log('database updated', updated)
  const [likes, setLikes] = useState(blog.likes)
  const handleLike = async () => {
    setLikes(likes + 1)
    const dataObject = {
      user: blog.user,
      likes,
      author: blog.author,
      title: blog.title,
      url: blog.url
    }
    console.log(likes)
    const updated = await updateBlog(blog.id, dataObject )
    console.log('database updated', updated)
  }

  return (
    <div style={blogStyle} className="blog">
      <p>{blog.title} by: {blog.author}</p>
      <button>delete</button>
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
