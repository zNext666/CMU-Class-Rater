import React, { Component } from 'react'
import {Container,Row,Col,Card,Form,Button}  from 'react-bootstrap'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            uid:[]
        }
    }

    render(){
        return(
            <Container>
                <Card style={{ width: '28rem' }} className="text-center">
                <Card.Header as="h5">Login</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formGroupUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                    </Form>
                    <Button variant="primary">Login</Button>
                </Card.Body>
                <Card.Footer className="text-muted"><a href="#">Forgot Password?</a></Card.Footer>
                </Card>
            </Container>
        )
    }
}

export default Login