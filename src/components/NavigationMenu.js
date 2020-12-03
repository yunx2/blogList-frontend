import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';

const NavigationMenu = ({ handleLogout, user }) => {
  // const padding = { padding: 5 }
  // const listStyle = { listStyle: 'none', margin: 0, padding: 0 }
  // const itemStyle = { display: 'inline' }
  if (!user) {
    return null
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Favorite Blogs</Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">home</Link></Nav.Link>
          <Nav.Link><Link to="/users">users</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Form inline>
        <Button variant="primary" onClick={handleLogout}>logout</Button>
      </Form>
    </Navbar>
  )
}

export default NavigationMenu