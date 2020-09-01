import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

 const navbar = props => {
        return (
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Navbar.Brand href="#home">Aram Alhaddad</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
}

export default navbar;