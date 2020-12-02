import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import { authenticateUser } from '../reducers/loggedInUserReducer'
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
      dispatch(authenticateUser(credentials))
      dispatch(setNotification('welcome ' + username))
      setTimeout(() => {
        dispatch(setNotification(''))
      }, 3000)
    } catch (exception) {
      console.error('wrong credentials')
      dispatch(setNotification('wrong credentials'))
      setTimeout(() => {
        dispatch(setNotification(''))
      }, 5000)
    }
  }

  return (
    <div>
      <Form onSubmit={handleLogin}>
        <h1>blogs</h1>
        <Form.Label>username</Form.Label>
        <Form.Group>
          <Form.Control
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)} />
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)} />
          <Button variant="primary" type="submit">login</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default LoginForm