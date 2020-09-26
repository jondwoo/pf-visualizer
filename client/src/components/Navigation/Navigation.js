import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container fluid style={{ maxWidth: '1560px' }}>
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
            <Nav.Item className="mr-md-3">
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
      </Container>
    </Navbar>
  );
};

export default Navigation;
