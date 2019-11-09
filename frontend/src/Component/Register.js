import React, { Component } from 'react'
import {Container,Row,Col,Card,Form,Button,ButtonToolbar}  from 'react-bootstrap'


class Register extends Component{
    render(){
        return(
            <Container>
                <Row>
                <Col>
                </Col>
                <Col>
                <Card style={{ width: '28rem' }} className="text-center">
                <Card.Header as="h5">Register</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formGroupUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter E-mail" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                        <Form.Group controlId="formGroupConfirmPassword">
                            <Form.Label>Confirm-Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password Again" />
                        </Form.Group>
                        <Button variant="primary">Register</Button>
                        <Button variant="secondary">Reset</Button>
                    </Form>
                </Card.Body>
                <Card.Footer className="text-muted"><a href="/login">Already Have a account?</a></Card.Footer>
                </Card>
                </Col>
                <Col>
                </Col>
                </Row>
            </Container>
        )
    }
}
export default Register