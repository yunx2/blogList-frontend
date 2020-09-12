import React from 'react'
import { Link } from 'react-router-dom'

const NavigationMenu = ({ handleLogout, user }) => {
  const padding = { padding: 5 }
  const listStyle = { listStyle: 'none', margin: 0, padding: 0 }
  const itemStyle = { display: 'inline' }
  if (!user) {
    return null
  }
  return (
    <nav>
      <ul style={listStyle}>
        <li style={itemStyle}><Link style={padding} to="/">home</Link></li>
        <li style={itemStyle}><Link style={padding} to="/users">users</Link></li>
        <li style={itemStyle}>
          <span>{user.name} logged in</span>
          <p>
            <button type="button" onClick={handleLogout}>log out</button>
          </p>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationMenu