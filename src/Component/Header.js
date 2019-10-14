import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav,Form,Navbar,FormControl,Button} from 'react-bootstrap';
import {Container,Row,Col}  from 'react-bootstrap';



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
                <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Col>
                <Nav className="mr-auto">
                    <Navbar.Brand href="/">CMU Class Rater</Navbar.Brand>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                </Col>
                <Col>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Col>
                <Col>
                <p style={style}>{auth}</p>
                </Col>
                </Navbar.Collapse>
                </Navbar>

            </header>
        )
    }
}
  
  export default Header