import React, { Component } from 'react'
import {Container,Row,Col,Card,Form,Button}  from 'react-bootstrap'
import FacebookProvider, {LoginButton } from 'react-facebook-sdk'
import FacebookLogin from 'react-facebook-login';
class LoginComponent extends Component{
    constructor(){
        super()
        this.state = {
            uid:[],
            error:[]
        }
    }
    handleResponse = (data) => {
        console.log(data)
    }
     
      handleError = (error) => {
        this.setState({ error })
    }

    render(){
        return(
            <Container>
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

export default LoginComponent