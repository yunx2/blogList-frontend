import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddForm = ({ createBlog, notify }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleAdd = async (e) => {
    e.preventDefault()
    const blogData = {
      title,
      author,
      url
    }
    try {
      await createBlog(blogData)
      notify(`added ${title} to favorites`)
      setTimeout(() => {
        notify(null)
      }, 5000)
      setTitle('')
      setAuthor('')
      setUrl('')
    } catch (exception) {
      notify(`could not add ${JSON.stringify(blogData)}`)
      setTimeout(() => {
        notify(null)
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

AddForm.propTypes = {
  createBlog: PropTypes.func.isRequired,
  notify: PropTypes.func.isRequired
}

export default AddForm