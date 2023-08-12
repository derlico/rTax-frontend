import { Link } from 'react-router-dom';
import { ShoppingCart, WhatsappLogo, UserCircle, Notepad, SignOut } from "phosphor-react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

function TopNav() {
    return (
      <>
      {/* <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
        <div className="container-fluid">
          <a className='navbar-brand' href="#">
            <img src="logo.png" alt="logo" width={"45"}/>
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#collapsibleNavbar'>
            <span className='navbar-toggler-icon'></span>
          </button>
        </div>
          
          <div className='collapse navbar-collapse' id='collapsibleNavbar'>
            <ul className='navbar-nav navbar-expand-sm dropdown'>
              <li className='nav-item dropdown-item'>
                <div className='nav-link active'>
                  <Link to='/'>Home</Link></div>
              </li>
              <li className='nav-item'>
                <div className='nav-link'>
                <Link to='/pos'>
                  POS
                  <ShoppingCart size={32} />
                  </Link></div>
              </li>
              <li className='nav-item'>
                <div className='nav-link'>
                <Link to='/admin'>Accounts</Link></div>
              </li>
            </ul>
          </div>
      </nav> */}
      <div className="container-fluid">
          <div className='card mx-2'>
          <div className='card-body bg-dark'>
      <Navbar collapseOnSelect expand="lg" >
      
      <LinkContainer to="/">
        <Navbar.Brand><img src="logo1.png" alt="logo" width={"45"}/>{" "}</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className="me-auto">

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
        <NavDropdown title={<UserCircle color='yellow' size={32} />} id="basic-nav-dropdown">
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
       
        
      </Nav>
      </Navbar.Collapse>
      
        
        
      </Navbar>
      </div>
      </div>
      </div>
      </>
    );
  }
  
  export default TopNav;