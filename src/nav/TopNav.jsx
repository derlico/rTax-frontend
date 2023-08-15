import { ShoppingCart, WhatsappLogo, UserCircle, Notepad, SignOut, House } from "phosphor-react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

function TopNav() {
    return (
      <>
      <div className="container-fluid">
          <div className='card mx-auto'>
          <div className='card-body bg-dark'>
      <Navbar collapseOnSelect expand="lg" >
      
      <LinkContainer to="/">
        <Navbar.Brand><img src="logo1.png" alt="logo" width={"45"}/>{" "}</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className="me-auto">

      <LinkContainer to="/products">
        <Nav.Link>
          {" "} 
          <span style={{fontWeight: 'bolder', color:'white'}}>
            Products {" "}
          <House color='white' size={32} weight="bold" />
          </span>
        </Nav.Link>
        </LinkContainer>

        <LinkContainer to="/pos">
        <Nav.Link>
          {" "} 
          <span style={{fontWeight: 'bolder', color:'white'}}>
            POS {" "}
          <ShoppingCart color='white' size={32} weight="bold" />
          </span>
        </Nav.Link>
        </LinkContainer>

        
        <LinkContainer to="/reports">
        <Nav.Link>
          {" "} 
          <span style={{fontWeight: 'bolder', color:'white'}}>
            Reports {" "}
          <Notepad color='white' size={32} weight="bold" />
          </span>
        </Nav.Link>
        </LinkContainer>

        {" "}
        
       
        
      </Nav>
      </Navbar.Collapse>
          
      <NavDropdown title={<UserCircle color='yellow' size={32} />} id="basic-nav-dropdown" className="nav-item mx-5">
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
        
      </Navbar>
      </div>
      </div>
      </div>
      </>
    );
  }
  
  export default TopNav;