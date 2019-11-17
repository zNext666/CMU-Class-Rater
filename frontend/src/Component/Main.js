import React, { Component } from 'react'
import axios from 'axios'
import ListCourse from './ListCourse'
import SearchCourse from './SearchCourse'
import Footer from './Footer'
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {Row ,Col}  from 'react-bootstrap';
import {Pagination } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'


class Main extends Component{
    constructor() {
        super()
        this.state = {
            courses:[],
        }
    }

    async componentDidMount(){
        const response = await axios.get('http://localhost:8000/api/courses')
        const data = await response.data
        this.setState({courses:data})
        
        console.log(this.state.courses)
    }

    render(){
        const navstyle = {
            backgroundColor: "#ffffff" , 
            borderRadius: "5px" , 
            margin: "5px", 
            border: "1px solid lightgrey" 
          };
        /*const course = this.state.courses.map((item) => (
            <Card key={item.course_no} style={{ width: '18rem' }}>
                <Card.Body>
                <a href={"review/"+ item.course_no} >
                    <Card.Title>{item.course_no} {item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Section: {item.section}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{item.teacher}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Average: {item.Reviews[0].average}</Card.Subtitle>
                </a>
            </Card.Body>
            </Card>
        ))*/
        return (<>
            <br />
            <Row>
                <Col sm={8}>
                    <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item style={navstyle}>
                                <Nav.Link eventKey="link-1">ความนิยม</Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={navstyle}>
                                <Nav.Link eventKey="link-2">คะแนนมากที่สุด</Nav.Link>
                            </Nav.Item>
                            <NavDropdown title="หน่วยกิต" id="nav-dropdown" style={navstyle}>
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
        </>)
    }
}

export default Main