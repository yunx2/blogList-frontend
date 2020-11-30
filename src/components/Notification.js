import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap';

const Notification = () => {
  const message = useSelector(state => state.notification)
  // console.log(message)
  if (message) {
    return (
      <Alert variant="success" className="error">
        {message}
      </Alert>
    )
  }
  return null
}

export default Notification