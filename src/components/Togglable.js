import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Togglable = ({ buttonLabel, children}) => {
  const [toggleChild, setToggle] = useState(false)
  const hideChild = { display: toggleChild ? 'none' : '' } // if toggle = true, set attribute display="none" (element not displayed)
  const showChild = { display: toggleChild ? '' : 'none' } // if toggle = true, set attribute display="" (element displayed)
  const toggle = () => {
    setToggle(!toggleChild)
  }

  return (
    <div>
      <div style={hideChild} className="togglableContent">
        <button onClick={toggle}>{buttonLabel}</button>
      </div>
      <div style={showChild}>
        {children}
        <button onClick={toggle}>cancel</button>
      </div>
    </div>
  )
}


Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default Togglable