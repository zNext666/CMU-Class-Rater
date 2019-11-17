import React, { Component } from 'react'
import axios from 'axios'
import ListCourse from './ListCourse'
import SearchCourse from './SearchCourse'
import Footer from './Footer'
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {Row ,Col}  from 'react-bootstrap';
import {Pagination } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {changePage} from '../store/actions/pageAction'
import zIndex from '@material-ui/core/styles/zIndex'


class Main extends Component{
    constructor() {
        super()
        this.state = {
            courses:[],
            pages:'',
            currentPage: 1
        }
    }

    handlClick = (e) =>{
        this.props.changePage(e.target.id)
    }

    async componentDidMount(){
        const response = await axios.get('http://localhost:8000/api/courses')
        const data = await response.data
        const pages = Math.round((data.count)/9)
        this.setState({courses:data.rows, pages: pages})     
        console.log('page: ' + this.state.pages)
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
let items = [];
for (let number = 1; number <= this.state.pages; number++) {
  items.push(number);
}
let bestkub = items.map(i =>{
    return (
        <Pagination.Item style={{zIndex:0}} id={i} key={i} active={i == this.props.page} onClick={this.handlClick}>{i}</Pagination.Item>
    )
})

const pages = (
  <>
    <Pagination>{items}</Pagination>
  </>
);
        return (<>
            <br />
        {console.log('page: '+this.props.page)}
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
                    <Pagination >
                        {bestkub}
                    </Pagination>
                </Col>
            </Row>
            <Router>
                <Switch>
                    <Route path="/search" component={SearchCourse}></Route>
                    <Route path="/" render={(props) => <ListCourse {...props} page={this.props.page} />}></Route>
                </Switch>
            </Router>
        </>)
    }
}

const mapStateToProps = (state) =>{
    return {
        page: state.page.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePage: (page) => dispatch(changePage(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)