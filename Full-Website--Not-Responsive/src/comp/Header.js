// import './App.css';
import React from 'react';
import { Navbar, Nav, Button,Image,Form} from 'react-bootstrap';
import logo from '../images/Appointy-Logo1.svg';

const Header=()=>{
  return (
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
          {/* <Image src={logo}
          style={{
            marginLeft:'180px',
            width:'150px',
          }}
          /> */}
          <a href="#"  style={{
            marginLeft:'180px',
            width:'150px',
            fontSize:'1.5rem'
          }}
          > Manchester 
          <span style={{
            color:'red'
          }}>
           United 
          </span></a>
            </Navbar.Brand>
          <Nav className="ml-auto" style = {{textTransform: 'none'}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Customer</Nav.Link>
            <Nav.Link href="#contact us">Contact Us</Nav.Link>
            <Nav.Link href="#enterprise">Enterprise</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#sign-up">
              <Button 
             style={{
                padding:'5px 20px',
                borderRadius:'124px',
                textTransform: 'none',
                backgroundImage:"linear-gradient( to right, purple, red)"
              }}>Sign Up</Button>
            </Nav.Link> 
          </Nav>
        </Navbar>
      </>
  )
}

export default Header;
