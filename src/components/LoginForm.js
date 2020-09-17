import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { setLoggedInUserInfo } from '../reducers/loggedInUserReducer'
import { setNotification } from '../reducers/notificationReducer'

const LoginForm = () => {
  const dispatch = useDispatch()
  const  [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async e => { // needs to dispatch action to LoginReducer
    e.preventDefault()
    try {
      const credentials = {
        username,
        password
      }
      dispatch(setLoggedInUserInfo(credentials))
    } catch (exception) {
      console.error('wrong credentials')
      dispatch(setNotification('wrong credentials'))
      setTimeout(() => {
        dispatch(setNotification(''))
      }, 5000)
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>blogs</h1>
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
}

export default LoginForm