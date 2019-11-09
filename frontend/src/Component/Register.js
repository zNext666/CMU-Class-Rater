import React, { Component } from 'react'
import {Container,Row,Col,Card,Form,Button,ButtonToolbar}  from 'react-bootstrap'
import {connect} from 'react-redux'
import {createRegister} from '../store/actions/registerAction'

class Register extends Component{
    state = {
        username:'',
        password:'',
        confirmpassword:'',
        email:''
    }

    handleSubmit = (e) =>{
        this.props.createRegister(this.state)
    }

    email = (e) =>{
        this.setState({email:e.target.value})
    }

    username = (e) =>{
        this.setState({username:e.target.value})
    }

    pwd = (e) =>{
        this.setState({password:e.target.value})
    }

    confirmpwd = (e) =>{
        this.setState({confirmpassword:e.target.value})
    }

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
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formGroupUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" onChange={this.username}/>
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter E-mail" onChange={this.email}/>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" onChange={this.pwd}/>
                        </Form.Group>
                        <Form.Group controlId="formGroupConfirmPassword">
                            <Form.Label>Confirm-Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password Again" onChange={this.confirmpwd}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Register</Button>
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
const mapDispatchToProps = (dispatch) => {
    return {
        createRegister: (register) => dispatch(createRegister(register))
    }
}

export default connect(null, mapDispatchToProps)(Register)