import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const  [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async e => {
    e.preventDefault()
    try {
      const user = await loginService.login({ username, password
      })
      window.localStorage.setItem(
        'loggedInUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.error('wrong credentials')
      setNotification('wrong credentials')
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
  }

  const handleLogOut = () => {
    setUser(null)
    window.localStorage.clear()
    console.log(window.localStorage)
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    // console.log(JSON.stringify(user))
    const blogData = {
      title,
      author,
      url
    }
    try {
      const newBlog = await blogService.create(blogData)
      console.log(newBlog)

      setNotification(`added ${title} to favorites`)
      setTimeout(() => {
        setNotification(null)
      }, 5000)

      setTitle('')
      setAuthor('')
      setUrl('')
    } catch (exception) {
      console.log(`could not add ${JSON.stringify(blogData)}`)

      setNotification(`could not add ${JSON.stringify(blogData)}`)
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input 
        type="text" 
        value={username} 
        name="Username"
        onChange={({ target }) => setUsername(target.value)} />
      </div>
      <div>
        password
        <input 
        type="password" 
        value={password} 
        name="Password" 
        onChange={({ target }) => setPassword(target.value)} />
      </div>
      <button type="submit">login</button>
    </form>
  )

  const blogList = () => (
    <div>
      <h2>favorites</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )

  const addBlogForm = () => (
    <form onSubmit={handleAdd}>
      <h2>add new favorite blog</h2>
      <div>
      title
      <input type="text" onChange={({ target }) => setTitle(target.value)}/>
      </div>
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
  )
  
  return (
    <div>
      <h1>blogs</h1>
      <Notification message={notification}/>
      {user === null ? loginForm() : 
      <div>
        <p>{user.name} logged in</p>
        {addBlogForm()}
        {blogList()}
        <button type="button" onClick={handleLogOut}>log out</button>
      </div>
      }
    </div>   
  )
}

export default App