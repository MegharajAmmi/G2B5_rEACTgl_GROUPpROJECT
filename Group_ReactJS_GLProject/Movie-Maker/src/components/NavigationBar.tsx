import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const NavigationMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="md">
      <Container>
        <Navbar.Brand href="/">Movies On The Tip</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/#moviesInTheatre">
                <Button variant="dark" size="sm">
                  Movies In Theatre
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/#commingSoon">
                <Button variant="dark" size="sm">
                  Comming Soon
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/#topRatedIndian">
                <Button variant="dark" size="sm">
                  Top Rated Indian
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/#topRatedMovies">
                <Button variant="dark" size="sm">
                  Top Rated Movies
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/#favourites">
                <Button variant="dark" size="sm">
                  Favourites
                </Button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
