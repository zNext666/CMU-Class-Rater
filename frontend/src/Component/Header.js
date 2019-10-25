import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {Nav,Form,Navbar,FormControl,Button} from 'react-bootstrap';
import {Container,Row,Col,ListGroup}  from 'react-bootstrap';

class Header extends Component{

    constructor(){
        super()
        this.state = {
            query:'',
            data:[]
        }
        this.handleChange = this.handleChange.bind(this)
    }

    getData = async () => {       
        try {
            const response = await axios.get('http://localhost:8000/api/course/search?search=' + this.state.query)
            const data = await response.data
            this.setState({data:data})
            console.log(this.state.data)
            console.log(this.state.query)
        } catch (error){
            console.log(error)
        }
    }

    handleChange = event => {
        const query = event.target.value
        this.setState({query:query}, () =>{
            this.getData()
        })
    }

    filterUrl = (param) => {
        if(window.location.href.search('review') < 1){
            return "review/"+ param
        }else{
            return param
        }
    }

    render(){
        const style={
            position:'absolute',
            right:'50px'
        }
        const auth = 'Anonymous'
        if(sessionStorage.getItem('auth')){
            auth = sessionStorage.getItem('auth')
        }
        const search = this.state.data.map(item => (
            <ListGroup key={item.course_no}>
                <a href={this.filterUrl(item.course_no)}><ListGroup.Item>{item.course_no} {item.name}</ListGroup.Item></a>
            </ListGroup>
        ))
        return(
            <header>
                <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Col>
                <Nav className="mr-auto">
                    <Navbar.Brand href="/">CMU Class Rater</Navbar.Brand>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                </Col>
                <Col>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange}/>
                    {search}
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Col>
                <Col>
                <p style={style}>{auth}</p>
                </Col>
                </Navbar.Collapse>
                </Navbar>

            </header>
        )
    }
}
  
  export default Header