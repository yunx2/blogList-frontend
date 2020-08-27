import React, { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import Notification from './components/Notification'
import AddForm from './components/AddForm'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'

import { setToken } from './services/blogs'
import { getAllBlogs } from './reducers/blogsReducer'
import { logout } from './reducers/loggedInUserReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const [user, setUser] = useState(null)
  // console.log('user', user)

  const dispatch = useDispatch() // useDispatch is a React hook from react-redux library

  useEffect(() => {
    dispatch(getAllBlogs()) // App component dispatches async action creator function, api call to server made in action creator, after which action is dispatched using redux dispatch function
  }, [dispatch])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedUserJSON) {
      const userInfo = JSON.parse(loggedUserJSON)
      setUser(userInfo)
      setToken(userInfo.token)
    }
  }, [])

  const addForm = () => (
    <Togglable buttonLabel="add blog" >
      <AddForm />
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
          <BlogList />
          <button type="button" onClick={() => dispatch(logout())}>log out</button>
        </div>
      }
    </div>
  )
}

export default App