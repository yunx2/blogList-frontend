import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

const Togglable = ({ buttonLabel, children }) => {
  const [toggleChild, setToggle] = useState(false)
  const hideChild = { display: toggleChild ? 'none' : '' } // if toggle = true, set attribute display="none" (element not displayed)
  const showChild = { display: toggleChild ? '' : 'none' } // if toggle = true, set attribute display="" (element displayed)
  const toggle = () => {
    setToggle(!toggleChild)
  }
  return (
    <div>
      <div style={hideChild} className="togglableContent">
        <Button className="buttonLabel" onClick={toggle}>{buttonLabel}</Button>
      </div>
      <div style={showChild} className="hidden">
        {children}
        <Button onClick={toggle}>cancel</Button>
      </div>
    </div>
  )
}

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default Togglable