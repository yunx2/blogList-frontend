import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';

const NavigationMenu = ({ handleLogout, user }) => {
  // const padding = { padding: 5 }
  // const listStyle = { listStyle: 'none', margin: 0, padding: 0 }
  // const itemStyle = { display: 'inline' }
  if (!user) {
    return null
  }
  return (
    <Nav as="ul">
      <Nav.Item as="li">
        <Nav.Link as="span">
          <Link to="/">home</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as="span">
          <Link to="/users">users</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <span>{user.name} logged in</span>
      </Nav.Item>
      <Nav.Item>
        <Button variant="primary" onClick={handleLogout}>log out</Button>
      </Nav.Item>
    </Nav>
  )
}

export default NavigationMenu