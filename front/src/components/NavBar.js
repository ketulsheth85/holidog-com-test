import React from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "./NavBar.css";


const NavBar = () => {
  return (
    <>
      <div className="container">
        <Navbar bg="dark" variant="dark" className="mb-2">
          <Navbar.Brand>Holidog</Navbar.Brand>
          <Nav className="mr-auto">
            <LinkContainer to="/Book">
              <NavItem>Book</NavItem>
            </LinkContainer>
            <LinkContainer to="/Author" activeClassName="active">
              <NavItem>Author</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
