import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap';

const Notification = () => {
  const message = useSelector(state => state.notification)
  // console.log(message)
  if (message) {
    if (message.includes('welcome')) {
      return (
        <Alert variant="success">
          {message}
        </Alert>
      )
    }
    if (message.includes('wrong')) {
      return(
        <Alert variant="danger">
          {message}
        </Alert>
      )
    }
  }
  return null
}

export default Notification