import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav,Form,Navbar,FormControl,Button} from 'react-bootstrap';

class Header extends Component{
    render(){
        return(
            <header>
                <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Navbar.Brand href="/">CMU Class Rater</Navbar.Brand>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}
  
  export default Header