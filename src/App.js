import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="sm">
          <Navbar.Brand href="#home">Swarns Kollection</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>

              <NavDropdown title="Women" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Suits</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Shawls</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Clutches</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Men" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3.1">
                  Kurta Pajamas
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Juttis</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Chadras</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Jewelery" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Necklaces
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Jhangras</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
