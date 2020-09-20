import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">Personal Finance Visualizer</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/new">New Entry</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
        </Nav>
        <NavDropdown.Divider />
        <Nav className="flex-col">
          <Nav.Item className="mr-md-2">
            <Button variant="outline-success" size="lg" block>
              Login
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button variant="outline-success" size="lg" block>
              Signup
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
