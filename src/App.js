import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const  [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

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
    }
  }

  const handleLogOut = () => {
    setUser(null)
    window.localStorage.clear()
    console.log(window.localStorage)
  }

  const handleAdd = e => {
    e.preventDefault()
    console.log('add new favorite blog')
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
      <h2>blogs</h2>
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
      <input type="text" name="title" />
      </div>
      <div>
      author
      <input type="text" name="author" />
      </div>
      <div>
      url
      <input type="text" name="url" />
      </div>
      <button type="submit">add this blog</button>
    </form>
  )
  
  return (
    <div>
      {user === null ? loginForm() : 
      <div>
        <p>{user.name} logged in</p>
        {blogList()}
        {addBlogForm()}
        <button type="button" onClick={handleLogOut}>log out</button>
      </div>
      }
    </div>   
  )
}

export default App