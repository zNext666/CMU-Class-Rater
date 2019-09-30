import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav,Form,Navbar} from 'react-bootstrap';

function Header(){
    return(
        <header>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">CMU Class Rater</Navbar.Brand>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="Review">Review</Nav.Link>
            </Navbar>
            <Nav>
                <Nav.Item as="li">
                    <Form.Control type="text" placeholder="Search" style={{position:"relative"}}/>
                </Nav.Item>
            </Nav>
        </header>
    )
}
  
  export default Header