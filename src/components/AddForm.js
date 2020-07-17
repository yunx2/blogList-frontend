import React, { useState } from 'react'

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
          <input type="text" onChange={({ target }) => setTitle(target.value)} />
          <div>
          author
          <input type="text" onChange={({ target }) => setAuthor(target.value)} />
          </div>
          <div>
          url
          <input type="text" onChange={({ target }) => setUrl(target.value)} />
          </div>
          <button type="submit">add this blog</button>
        </form>
      </div>
  )
}

export default AddForm