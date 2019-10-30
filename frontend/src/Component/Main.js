import React from 'react'
import ListCourse from './ListCourse'
import SearchCourse from './SearchCourse'
import Footer from './Footer'
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {Row ,Col}  from 'react-bootstrap';
import {Pagination } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'

function Main(){
    return (
        <main>
            <br />
            <Row>
                <Col sm={8}>
                    <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">ความนิยม</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">คะแนนมากที่สุด</Nav.Link>
                            </Nav.Item>
                            <NavDropdown title="หน่วยกิต" id="nav-dropdown">
                                <NavDropdown.Item eventKey="1">มากไปน้อย</NavDropdown.Item>
                                <NavDropdown.Item eventKey="2">น้อยไปมาก</NavDropdown.Item>
                            </NavDropdown>
                    </Nav>
                </Col>
                <Col sm={4}>
                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item >{2}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </Col>
            </Row>
            <Router>
                <Switch>
                    <Route path="/search" component={SearchCourse}></Route>
                    <Route path="/" component={ListCourse}></Route>
                </Switch>
            </Router>
        </main>
    )
}

export default Main