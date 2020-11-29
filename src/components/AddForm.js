import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap';

import { setNotification } from '../reducers/notificationReducer'
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
        // dispatch(clearNotification())
        dispatch(setNotification(''))
      } , 5000)
      setTitle('')
      setAuthor('')
      setUrl('')
    } catch (exception) {
      dispatch(setNotification(`could not add ${JSON.stringify(blogData)}`))
      setTimeout(() => {
        dispatch(setNotification(''))
      }, 5000)
    }
  }
  return (
    <div>
      <h2>add new favorite blog</h2>
      <Form onSubmit={handleAdd}>
        <Form.Group>
          <Form.Label>title</Form.Label>
          <Form.Control type="text" onChange={({ target }) => setTitle(target.value)} />
          <Form.Label>author</Form.Label>
          <Form.Control type="text" onChange={({ target }) => setAuthor(target.value)} />
          <Form.Label>url</Form.Label>
          <Form.Control id="url" type="text" onChange={({ target }) => setUrl(target.value)} />
          <Button variant="primary" type="submit">add this blog</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddForm