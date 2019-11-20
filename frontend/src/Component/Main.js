import React, { Component } from 'react'
import axios from 'axios'
import ListCourse from './ListCourse'
import SearchCourse from './SearchCourse'
import Footer from './Footer'
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {Row ,Col}  from 'react-bootstrap';
import {Pagination } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link,Switch, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {changePage, Sort} from '../store/actions/pageAction'
import zIndex from '@material-ui/core/styles/zIndex'


class Main extends Component{
    constructor() {
        super()
        this.state = {
            courses:[],
            pages:'',
            currentPage: 1,
            sort:''
        }
    }

    handlClick = (e) =>{
        this.props.changePage(e.target.id)
    }

    async componentDidMount(){
        if(window.location.pathname.search('search') > 0){
            let searchCourses = axios.get('http://localhost:8000/api/course/search?search=' + window.location.pathname.split('/')[2])
            .then(res => {
                const pages = Math.round((res.data.count)/9)
                this.setState({pages: pages})     
                console.log('page: ' + this.state.pages)
            })
            console.log("search")
        }else{
            const response = await axios.get('http://localhost:8000/api/courses')
            const data = await response.data
            const pages = Math.round((data.count)/9)
            this.setState({courses:data.rows, pages: pages})     
            console.log('page: ' + this.state.pages)
            console.log("normal")
        }
    }

    handleSort = (param) =>{
        this.props.Sort(param)
    }

    async componentWillReceiveProps(nextProps){
        if(nextProps.sort == 'score'){
            const response = await axios.get('http://localhost:8000/api/courses/raw')
            const data = await response.data
            const pages = Math.round((data[0].COUNT_ROWS)/9)
            this.setState({pages:pages})
        }
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
    console.log(window.location.pathname)
    return (
            <Pagination.Item style={{zIndex:0}} id={i} key={i} active={i == this.props.page} onClick={this.handlClick}>{i}</Pagination.Item>
        )      
})

const pages = (
  <>
    <Pagination>{items}</Pagination>
  </>
);
const nav = () =>{
    if(window.location.href.search('search') < 1){
        return (
            <Nav variant="pills" defaultActiveKey="/home" onSelect={selectedKey => this.handleSort(selectedKey)}>
                            <Nav.Item style={navstyle}>
                                <Nav.Link eventKey="popular" >ความนิยมมากที่สุด</Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={navstyle}>
                                <Nav.Link eventKey="score" >คะแนนเฉลี่ยมากที่สุด</Nav.Link>
                            </Nav.Item>
                            <NavDropdown title="หน่วยกิต" id="nav-dropdown" style={navstyle}>
                                <NavDropdown.Item eventKey="credit dsc">มากไปน้อย</NavDropdown.Item>
                                <NavDropdown.Item eventKey="credit asc">น้อยไปมาก</NavDropdown.Item>
                            </NavDropdown>
                    </Nav>
        )
    }else{
        return 
    }
}
        return (<>
            <br />
        {console.log('page: '+this.props.page, window.location.pathname)}
            <Row>
                <Col sm={8}>
                    {nav()}
                </Col>
                <Col sm={4}>
                    <Pagination >
                        {bestkub}
                    </Pagination>
                </Col>
            </Row>
            <Router>
                <Switch>
                    <Route path="/search" render={(props) => <SearchCourse {...props} page={this.props.page} sort={this.props.sort} />}></Route>
                    <Route path="/" render={(props) => <ListCourse {...props} page={this.props.page} sort={this.props.sort} />}></Route>
                </Switch>
            </Router>
        </>)
    }
}

const mapStateToProps = (state) =>{
    return {
        page: state.page.page,
        sort: state.page.sort
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePage: (page) => dispatch(changePage(page)),
        Sort: (sort) => dispatch(Sort(sort))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)