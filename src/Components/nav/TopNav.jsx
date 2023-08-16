import { ShoppingCart, WhatsappLogo, UserCircle, Notepad, SignOut, House } from "phosphor-react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

function TopNav() {
    return (
      <>
      <div className="bg-dark">
      <Navbar collapseOnSelect expand="lg" >
      
      <LinkContainer to="/" className="nav-item mx-5" >
        <Navbar.Brand><img src="logo1.png" alt="logo" width={"55"}/>{" "}</Navbar.Brand>
      </LinkContainer>

      <NavDropdown title={<span style={{fontWeight: 'bolder', color:'white'}}>
            Ian {" "}<UserCircle color='yellow' size={32} /> </span>} id="basic-nav-dropdown" className="nav-item mx-5">
              <NavDropdown.Item href="#myaccount">My Account</NavDropdown.Item>
              <NavDropdown.Item> Status: <span style={{fontWeight: 'bolder', color:'green'}}>
                Active
              </span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#contacts">
                 Contact US{" "}<WhatsappLogo color='green' size={22} /></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">
              <span style={{fontWeight: 'bolder', color:'red'}}>
                Logout
              </span>{" "}<SignOut color='red' size={22} weight="bold" />
              </NavDropdown.Item>
          </NavDropdown>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className="me-auto">

      <LinkContainer to="/products" className="nav-item mx-5">
        <Nav.Link>
          {" "} 
          <span style={{fontWeight: 'bolder', color:'white'}}>
            Products {" "}
          <House color='white' size={32} weight="bold" />
          </span>
        </Nav.Link>
        </LinkContainer>

        <LinkContainer to="/pos" className="nav-item mx-5">
        <Nav.Link>
          {" "} 
          <span style={{fontWeight: 'bolder', color:'white'}}>
            POS {" "}
          <ShoppingCart color='white' size={32} weight="bold" />
          </span>
        </Nav.Link>
        </LinkContainer>

        
        <LinkContainer to="/reports" className="nav-item mx-5">
        <Nav.Link>
          {" "} 
          <span style={{fontWeight: 'bolder', color:'white'}}>
            Reports {" "}
          <Notepad color='white' size={32} weight="bold" />
          </span>
        </Nav.Link>
        </LinkContainer>
        
      </Nav>
      </Navbar.Collapse>
        
      </Navbar>
      </div>
      </>
    );
  }
  
  export default TopNav;