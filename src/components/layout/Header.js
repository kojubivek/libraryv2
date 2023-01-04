import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <Navbar bg="info" expand="md">
      <Container>
        <Navbar.Brand href="#home">Library Mgmt.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">
              <i className="fa-solid fa-user"></i> Login
            </Nav.Link>
            <Nav.Link href="/register">
              <i className="fa-solid fa-pen-to-square"></i> Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
