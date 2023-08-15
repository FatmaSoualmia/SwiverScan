import { NavLink } from 'react-router-dom'
import { Navbar,Nav } from 'react-bootstrap'

function Header() {
  return (
    <div>
      <Navbar className="px-4" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">SwiverScan</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="login">
              LogIn
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
