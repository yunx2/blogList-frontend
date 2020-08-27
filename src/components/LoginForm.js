import React, { useState } from 'react'

import { setToken } from '../services/blogs'
import { login } from '../services/login'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import { useDispatch, useSelector } from 'react-redux'

const LoginForm = ({ setUser }) => {
  const dispatch = useDispatch()
  const  [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async e => { // needs to dispatch action to LoginReducer
    e.preventDefault()
    try {
      const user = await login({ username, password
      })
      window.localStorage.setItem(
        'loggedInUser', JSON.stringify(user)
      )
      setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.error('wrong credentials')
      dispatch(setNotification('wrong credentials'))
      setTimeout(() => {
        dispatch(clearNotification())
      }, 5000)
    }
  }

  return (
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
}

export default LoginForm