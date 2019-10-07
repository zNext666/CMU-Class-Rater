import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav,Form,Navbar} from 'react-bootstrap';

class Header extends Component{
    render(){
        return(
            <header>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">CMU Class Rater</Navbar.Brand>
                    <Nav.Link href="/">Home</Nav.Link>
                </Navbar>
                <Nav>
                    <Nav.Item as="li">
                        <Form.Control type="text" placeholder="Search" style={{position:"relative"}}/>
                    </Nav.Item>
                </Nav>
            </header>
        )
    }
}
  
  export default Header