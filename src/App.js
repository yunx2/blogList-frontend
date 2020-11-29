import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BlogList from './components/BlogList'
import Notification from './components/Notification'
import AddForm from './components/AddForm'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'
import UsersList from './components/UsersList'
import User from './components/User'
import BlogView from './components/BlogView'
import NavigationMenu from './components/NavigationMenu'

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
      // console.log('parsed: ', userCredentials)
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

  return (
    <div className="container">
      <BrowserRouter>
        <Notification />
        <NavigationMenu handleLogout={handleLogout} user={user} />
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
                <h1>blogs</h1>
                {addForm()}
                <BlogList />
              </div>)
            }
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App