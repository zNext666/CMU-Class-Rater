import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Course from './Course'
import Review from './Review'
import Login from './Login'
import Register from './Register'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap'

export default function Page(){
    return(
            <>
            <Header />
            <Container style={{ width: '650rem',backgroundColor:"#F7F7F7",borderRadius: "10px"}} >
                <Row>
                    <Col></Col>
                    <Col xs={10}>  
                    <Router>
                        <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/review" component={Reviewpage}></Route>
                        <Route path="/search" component={Home}></Route>          
                        <Route exact path="/" component={Home}></Route>
                        </Switch>
                    </Router> 
                    </Col>
                    <Col></Col>
                </Row>

            </Container>

            </>
    )
}



function Home(){
    return(
        <> 
            <Main />
            <Footer />
        </>
    )
}

function Reviewpage(){
    return(
        <>
            <Course />
            <Review />
        </>
    )
}