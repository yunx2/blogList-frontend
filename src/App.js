import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'

import BlogList from './components/BlogList'
import Notification from './components/Notification'
import AddForm from './components/AddForm'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'
import UsersList from './components/UsersList'
import User from './components/User'
import BlogView from './components/BlogView'

import { setToken } from './services/blogs'
import { getAllBlogs } from './reducers/blogsReducer'
import { logout, setFromLocalStorage } from './reducers/loggedInUserReducer'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const user = useSelector(state => state.loggedInUser)

  const dispatch = useDispatch() // useDispatch is a React hook from react-redux library

  useEffect(() => {
    dispatch(getAllBlogs()) // App component dispatches async action creator function, api call to server made in action creator, after which action is dispatched using redux dispatch function
  }, [dispatch])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    // console.log('loggedUserJSON:', loggedUserJSON )
    if (loggedUserJSON) {
      const userCredentials = JSON.parse(loggedUserJSON)
      console.log('parsed: ', userCredentials)
      dispatch(setFromLocalStorage(userCredentials))
      setToken(userCredentials.token)
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
  const listStyle = { listStyle: 'none', margin: 0, padding: 0 }
  const itemStyle = { display: 'inline' }
  return (
    <BrowserRouter>
      <Notification />
      <Switch>
        <Route path="/blogs/:id">
          <BlogView />
        </Route>
        <Route path="/users/:id">
          <User />
        </Route>
        <Route path="/users">
          <h1>blogs</h1>
          <UsersList />
        </Route>
        <Route path="/">
          {user === null ? <LoginForm /> :
            (<div id="content">
              <nav>
                <ul style={listStyle}>
                  <li style={itemStyle}><Link style={padding} to="/">home</Link></li>
                  <li style={itemStyle}><Link style={padding} to="/users">users</Link></li>
                  <li style={itemStyle}>
                    <span>{user.name} logged in</span>
                    <button type="button" onClick={handleLogout}>log out</button>
                  </li>
                </ul>
              </nav>
              <h1>blogs</h1>
              {addForm()}
              <BlogList />
            </div>)
          }
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App