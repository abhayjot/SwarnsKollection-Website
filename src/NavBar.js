import React from "react";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="/">Swarns Kollection</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/"> Home </Nav.Link>

          <NavDropdown title="Women" id="basic-nav-dropdown">
            <NavDropdown.Item href="/product/suit">Suits</NavDropdown.Item>
            <NavDropdown.Item href="/product/shawls">Shawls</NavDropdown.Item>
            <NavDropdown.Item href="/product/clutches">
              Clutches
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Men" id="basic-nav-dropdown">
            <NavDropdown.Item href="/product/kurtapajamas">
              Kurta Pajamas
            </NavDropdown.Item>
            <NavDropdown.Item href="/product/juttis">Juttis</NavDropdown.Item>
            <NavDropdown.Item href="/product/chadras">Chadras</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Jewelery" id="basic-nav-dropdown">
            <NavDropdown.Item href="/product/necklaces">
              Necklaces
            </NavDropdown.Item>
            <NavDropdown.Item href="/product/jhangras">
              Jhangras
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
