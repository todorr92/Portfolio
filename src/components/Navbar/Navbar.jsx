import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Braces } from "react-bootstrap-icons";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home" className="p-0">
            {" "}
            <img
              src="src/assets/images/logo.svg"
              className=""
              alt="Logo"
              width="60"
              height="60"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Skills</Nav.Link>
              <Nav.Link href="#link">
                <Braces></Braces>Projects
              </Nav.Link>
              <Nav.Link href="#link">Contact me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
