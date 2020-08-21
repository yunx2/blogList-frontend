import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { setNotification, clearNotification } from '../reducers/notificationReducer'
import { createNewBlog } from '../reducers/blogsReducer'

const AddForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const dispatch = useDispatch()

  const handleAdd = e => {
    e.preventDefault()
    const blogData = {
      title,
      author,
      url
    }
    try {
      dispatch(createNewBlog(blogData))
      dispatch(setNotification(`added ${title} to favorites`))
      setTimeout(() => {
        dispatch(clearNotification())
      } , 5000)
      setTitle('')
      setAuthor('')
      setUrl('')
    } catch (exception) {
      dispatch(setNotification(`could not add ${JSON.stringify(blogData)}`))
      setTimeout(() => {
        dispatch(clearNotification())
      }, 5000)
    }
  }
  return (
    <div>
      <h2>add new favorite blog</h2>
        title
      <form onSubmit={handleAdd}>
        <input id="title" type="text" onChange={({ target }) => setTitle(target.value)} />
        <div>
          author
          <input id="author" type="text" onChange={({ target }) => setAuthor(target.value)} />
        </div>
        <div>
          url
          <input id="url" type="text" onChange={({ target }) => setUrl(target.value)} />
        </div>
        <button id="add" type="submit">add this blog</button>
      </form>
    </div>
  )
}

export default AddForm