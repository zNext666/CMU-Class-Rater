import React, { Component } from 'react'
import {Container,Row,Col,Card,Form,Button}  from 'react-bootstrap'
import FacebookProvider, {LoginButton } from 'react-facebook-sdk'
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'
import {connect} from 'react-redux'
import {Login} from '../store/actions/authAction'


class LoginComponent extends Component{
    constructor(){
        super()
        this.state = {
            username:'',
            password:''
        }
    }
    handleResponse = (data) => {
        console.log(data)
    }
     
      handleError = (error) => {
        this.setState({ error })
    }

    submitHandler = (e) =>{
        e.preventDefault()
        //const response = axios.post('http://localhost:8000/api/users/login')
        this.props.Login(this.state)
        console.log(this.state)
    }

    username = (event) =>{
        this.setState({
            username:event.target.value
        })
    }

    password = (event) =>{
        this.setState({
            password:event.target.value
        })
    }

    render(){
        return(
            <Container>
                <Row>
                <Col>
                </Col>
                <Col>
                <Card style={{ width: '28rem' }} className="text-center">
                <Card.Header as="h5">Login</Card.Header>
                <Card.Body>
{/*                 <FacebookProvider appId="511320256372565">
                    <LoginButton
                        scope="email"
                        onCompleted={this.handleResponse}
                        onError={this.handleError}
                        >
                            <span>Login via Facebook</span>
                    </LoginButton>
                </FacebookProvider> */}
                <FacebookLogin
                    appId="511320256372565"
                    fields="name,email,picture"
                    callback={this.handleResponse}
                    autoLoad={true}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook"
                />
                    <Form onSubmit={this.submitHandler}>
                        <Form.Group controlId="formGroupUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" onChange={this.username} />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" onChange={this.password} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Login</Button>
                    </Form>      
                </Card.Body>
                <Card.Footer className="text-muted">
                <Row>
                <Col md={4}>{<a href="/register">Register</a>}</Col>
                <Col md={{ span: 5, offset: 3 }}>{<a href="#">Forgot Password?</a>}</Col>
                </Row>
                </Card.Footer>
                </Card>
                </Col>
                <Col>
                </Col>
                </Row>
            </Container>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        Login: (auth) => dispatch(Login(auth))
    }
}

export default connect(null, mapDispatchToProps)(LoginComponent)