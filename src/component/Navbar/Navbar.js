import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar className="navbarColor">
        <Container>
          <Navbar.Brand className="text-light fw-bold">
            TO DO LIST APP
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
