import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'

import BlogList from './components/BlogList'
import Notification from './components/Notification'
import AddForm from './components/AddForm'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'
import UsersList from './components/UsersList'

import { setToken } from './services/blogs'
import { getAllBlogs } from './reducers/blogsReducer'
import { logout, setLoggedInUserInfo } from './reducers/loggedInUserReducer'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const user = useSelector(state => state.loggedInUser)

  // console.log('user', user)

  const dispatch = useDispatch() // useDispatch is a React hook from react-redux library

  useEffect(() => {
    dispatch(getAllBlogs()) // App component dispatches async action creator function, api call to server made in action creator, after which action is dispatched using redux dispatch function
  }, [dispatch])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedUserJSON) {
      const userInfo = JSON.parse(loggedUserJSON)
      setToken(userInfo.token)
      dispatch(setLoggedInUserInfo(userInfo))
    }
  }, [dispatch])

  const addForm = () => (
    <Togglable buttonLabel="add blog" >
      <AddForm />
    </Togglable>
  )

  const handleLogout = () => {
    window.localStorage.clear()
    dispatch(logout())
  }

  const padding = { padding: 5 }
  return (
    <BrowserRouter>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/users">users</Link>
      </div>
      <h1>blogs</h1>
      <Notification />
      <button type="button" onClick={handleLogout}>log out</button>
      <Switch>
        <Route path="/users">
          <UsersList />
        </Route>
        <Route path="/">
          {user === null ? <LoginForm /> :
            <div id="content">
              <p>{user.name} logged in</p>
              {addForm()}
              <BlogList />
            </div>
          }
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App