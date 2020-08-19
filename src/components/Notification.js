import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const message = useSelector(state => state.notification)
  console.log(message)
  if (message) {
    return (
      <div className="error">
        {message}
      </div>
    )
  }
  return null
}

export default Notification