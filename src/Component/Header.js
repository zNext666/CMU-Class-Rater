import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Form, Navbar, Container } from 'react-bootstrap';

class Header extends Component{
    render(){
        const style={
            position:'absolute',
            right:'50px'
        }
        const auth = 'Anonymous'
        if(sessionStorage.getItem('auth')){
            auth = sessionStorage.getItem('auth')
        }
        return(
            <header>
                <Navbar bg="light" expand="lg" >
                    <Navbar.Brand href="/">CMU Class Rater</Navbar.Brand>
                    <Nav.Link href="/">Home</Nav.Link>
                    <p style={style}>{auth}</p>
                </Navbar>
                <Nav>
                    <Nav.Item as="li">
                        <Form.Control type="text" placeholder="Search" />
                    </Nav.Item>
                </Nav>             
            </header>
        )
    }
}
  
  export default Header