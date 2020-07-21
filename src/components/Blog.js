import React, { useState } from 'react'
import Togglable from './Togglable'

const Blog = ({ favorite, updateBlog }) => {
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
  }

  return (
    <div style={blogStyle} className="blog">
      <p>{favorite.title} by: {favorite.author}</p>
      <Togglable buttonLabel="view details">
        <div>
       url: {favorite.url}
          <p> likes: {likes}
            <button type="button" onClick={handleLike}>like</button>
          </p>
        </div>
      </Togglable>
    </div>
  )

}

export default Blog
