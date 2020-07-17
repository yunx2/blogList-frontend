import React, { useState } from 'react'

const Togglable = props => {
  const [toggleChild, setToggle] = useState(false)
  const hideChild = { display: toggleChild ? 'none' : '' } // if toggle = true, set attribute display="none" (element not displayed)
  const showChild = { display: toggleChild ? '' : 'none' } // if toggle = true, set attribute display="" (element displayed)
  const  toggle = () => {
    setToggle(!toggleChild)
  }

  return (
    <div>
      <div style={hideChild}>
        <button onClick={toggle}>{props.buttonLabel}</button>
      </div>
      <div style={showChild}>
        {props.children} 
        <button onClick={toggle}>cancel</button>
      </div>
    </div>
  )
}

export default Togglable