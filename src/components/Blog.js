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
  const handleLike = () => {
    favorite.likes++
    console.log(favorite.likes)
  }

  return (
    <div style={blogStyle} className="blog">
      <p>{favorite.title} by: {favorite.author}</p>
      <Togglable buttonLabel="view details">
        <div>
       url: {favorite.url}
          <p> likes: {favorite.likes}
            <button type="button" onClick={handleLike}>like</button>
          </p>
        </div>
      </Togglable>
    </div>
  )

}

export default Blog
