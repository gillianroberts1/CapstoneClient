import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/members">Members</Nav.Link>
            <Nav.Link href="/walkies">Walkies</Nav.Link>

            <Nav.Link href="/groups">Group Walks</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/walkietalkie">Walkie Talkie</Nav.Link>

            

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
