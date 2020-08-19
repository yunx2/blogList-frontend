import React, { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import Notification from './components/Notification'
import AddForm from './components/AddForm'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'

import { getAll, setToken, create } from './services/blogs'
import store from './store'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  console.log('state:', store.getState())

  useEffect(() => {
    getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      setToken(user.token)
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    window.localStorage.clear()
  }

  const addForm = () => (
    <Togglable buttonLabel="add blog" >
      <AddForm
        createBlog={create} />
    </Togglable>
  )

  return (
    <div>
      <h1>blogs</h1>
      <Notification />
      {user === null ? <LoginForm setUser={setUser} /> :
        <div id="content">
          <p>{user.name} logged in</p>
          {addForm()}
          <BlogList blogs={blogs} />
          <button type="button" onClick={handleLogOut}>log out</button>
        </div>
      }
    </div>
  )
}

export default App