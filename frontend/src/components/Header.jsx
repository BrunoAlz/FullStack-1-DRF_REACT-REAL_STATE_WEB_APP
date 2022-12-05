// REACT BOOTSTRAP
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

// ICONS
import { GiHouse } from "react-icons/gi";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

// REDUX
import { useDispatch, useSelector } from "react-redux";

// ROUTERS
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

// REDUCERS
import { logout, reset } from "../slices/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header>
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <GiHouse className="nav-icon" /> Moderna Houses
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/properties">
                <Nav.Link>Propriedades</Nav.Link>
              </LinkContainer>
              {user ? (
                <NavDropdown title={user.first_name} id="username">
                  <LinkContainer to="/profile/">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    <FaSignOutAlt /> Sair
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login/">
                  <Nav.Link>
                    <FaSignInAlt /> Entrar
                  </Nav.Link>
                </LinkContainer>
              )}
              ;
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
