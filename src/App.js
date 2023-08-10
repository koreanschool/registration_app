import React from 'react';
import { Router } from "@reach/router";

import './App.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Register from './pages/Register';
import Reregister from './pages/Reregister';
import Confirmation from './pages/Confirmation';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">St. Andrew Kim Korean School</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Router>
        <Home path="/"/>
        <Register path="/register" />
        <Confirmation path="confirmation"/>
        <Reregister path="/reregister"/>
      </Router>
      <Container style={{marginTop: '50px'}}>
        <hr/>
        <footer style={{color: 'gray'}}>
          <p style={{fontSize:'13px'}}>© 2023 - St. Andrew Kim Korean School </p>
        </footer>
      </Container>
    </div>
  )
}

export default App;
