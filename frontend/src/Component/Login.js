import React, { Component } from 'react'
import {Container,Row,Col,Card,Form,Button}  from 'react-bootstrap'
import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux'
import {Login,LoginFacebook} from '../store/actions/authAction'
import ReactNotification,{ store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { isNull } from 'util';

class LoginComponent extends Component{
    constructor(){
        super()
        this.state = {
            username:'',
            password:''
        }
    }
    handleResponse = (data) => {
        let fbData = {
            id:data.id,
            username:data.name,
            email:data.email
        }
        this.props.LoginFacebook(fbData) 
        console.log(data, fbData)
    }
     
      handleError = (error) => {
        this.setState({ error })
    }

    submitHandler = (e) =>{
        e.preventDefault() 
        //const response = axios.post('http://35.224.131.27:8000/api/users/login')
        this.props.Login(this.state)  
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

    Logout = () =>{
        sessionStorage.clear()
        window.location.href = '../'
        /*if(window.location.href.search('login') < 1){
            store.addNotification({
                title: "Logout!",
                message:"You're already logout, Click here to proceed",
                type: "warning",
                click: true,
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                onRemoval: (id, removedBy) => {
                    window.location.href = ''
                  },
                dismiss: {
                    duration: 2000,
                    onScreen: true
                },
                click: true
            });
        }else{
            store.addNotification({
                title: "Logout!",
                message:"You're already logout, Click here to proceed",
                type: "warning",
                click: true,
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                onRemoval: (id, removedBy) => {
                    window.location.href = window.location.href
                  },
                dismiss: {
                    duration: 2000,
                    onScreen: true
                },
                click: true
            });
        }*/
    }

    componentWillReceiveProps (nextprops) {
            const notify = nextprops.notify;
            if (notify == 200) {
                window.location.href = '../'
                /*store.addNotification({
                    title: "Login success!",
                    message: 'Click here to proceed...',
                    type: "success",
                    click: true,
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    onRemoval: (id, removedBy) => {
                        window.location.href = '/'
                      },
                    dismiss: {
                        duration: 2000,
                        onScreen: true
                    }
                });*/
            }else{
                store.addNotification({
                    title: "Error!",
                    message: '  Login failed!   ',
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    click: true,
                    dismiss: {
                        duration: 2000,
                        onScreen: true
                    }
            });
        }
}

    render(){
        return(
            <Container>
                {isNull(sessionStorage.getItem('auth'))  ? (<>
                <ReactNotification  />
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
                    autoLoad={false}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook"
                />
                    <Form onSubmit={this.submitHandler} >
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
                </Row></>
                ) : (
                    <>
                        <p><h1>You're already logging in</h1></p>
                        <p><h2>Please, <Button variant="light" onClick={this.Logout} >Log out</Button></h2></p>
                    </>
                )}
            </Container>
        )
    }
}
const mapStateToProps = state =>({
        auth: state.auth.user,
        notify: state.auth.notify
})

const mapDispatchToProps = (dispatch) =>{
    return{
        Login: (a) => dispatch(Login(a)),
        LoginFacebook: (a) => dispatch(LoginFacebook(a))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)