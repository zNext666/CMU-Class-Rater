import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Course from './Course'
import Review from './Review'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap'
export default function Page(){
    return(
        <Router>
            <>
            <Header />
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={10}>            
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/review" component={Reviewpage}></Route>
                    </Col>
                    <Col></Col>
                </Row>

            </Container>

            </>
        </Router> 
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