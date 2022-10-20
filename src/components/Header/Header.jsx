// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Header(props) {
    return (
        <div id="home">
            <Navbar fixed="top" bg="light" expand="lg" variant="light">
                <Container>
                    <Navbar.Brand style={{ fontWeight: "bold" }} href="/">
                        {props.data.name.toUpperCase()}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="">
                            {[
                                "home",
                                "skills",
                                "projects",
                                "experience",
                                "achievements",
                                "contact",
                            ].map((item) => (
                                <Nav.Link key={`key-${item}`} href={`#${item}`}>
                                    {item.toUpperCase()}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
