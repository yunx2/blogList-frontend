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
  // <Navbar expand="lg" bg="light">
  //   <Navbar.Collapse>
  //   <Navbar.Brand>Favorite Blogs App</Navbar.Brand>
  //   <Nav.Item as="li">
  //     <Nav.Link as="span">
  //       
  //     </Nav.Link>
  //   </Nav.Item>
  //   <Nav.Item as="li">
  //     <Nav.Link as="span">
  //       
  //     </Nav.Link>
  //   </Nav.Item>
  //   <Nav.Item as="li">
  //     <span>{user.name} logged in</span>
  //   </Nav.Item>
  //   <Nav.Item>
  //     <Button variant="primary" onClick={handleLogout}>log out</Button>
  //   </Nav.Item>
  // </Nav
  //   </Navbar.Collapse>
  //   <Nav>
  // >

    // </Navbar>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Favorite Blogs</Navbar.Brand>
      <Navbar.Collapse>
        <Nav>
          <Nav.Link><Link to="/">home</Link></Nav.Link>
          <Nav.Link><Link to="/users">users</Link></Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="primary" onClick={handleLogout}>logout</Button>
        </Form>

      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationMenu