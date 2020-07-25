import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import AddForm from './components/AddForm'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const  [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
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

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
        id="username"
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)} />
      </div>
      <div>
        password
        <input
        id="password"
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)} />
      </div>
      <button className="login-button" type="submit">login</button>
    </form>
  )

  const blogList = () => (
    <div>
      <h2>favorites</h2>
      {blogs.map(blog => <Blog key={blog.id} favorite={blog} updateBlog={blogService.update} />)}
    </div>
  )

  const addForm = () => (
    <Togglable buttonLabel="add blog" >
      <AddForm
        createBlog={blogService.create}
        notify={setNotification}        />
    </Togglable>
  )

  return (
    <div>
      <h1>blogs</h1>
      <Notification message={notification}/>
      {user === null ? loginForm() :
        <div id="content">
          <p>{user.name} logged in</p>
          {addForm()}
          {blogList()}
          <button type="button" onClick={handleLogOut}>log out</button>
        </div>
      }
    </div>
  )
}

export default App