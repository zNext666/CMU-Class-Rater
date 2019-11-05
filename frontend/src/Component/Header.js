import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {Nav,Form,Navbar,FormControl,Button,Dropdown} from 'react-bootstrap';
import {ListGroup}  from 'react-bootstrap';
import {Col}  from 'react-bootstrap';
import {NavDropdown }  from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Switch } from '@material-ui/core';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';

class Header extends Component{

    constructor(){
        super()
        this.state = {
            query:'',
            data:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClickSearch = this.handleClickSearch.bind(this)
    }

    handleClickSearch = () =>{
        window.location = '/search/'+this.state.query   
        console.log(this.state.query)
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
        if(query.toString().trim().length != 0){
            this.setState({query:query}, () =>{
                this.getData()
            })
        }else{
            this.setState({data:[]})
        }
    }

    filterUrl = (param) => {
        if(window.location.href.search('review') < 1){
            return "review/"+ param
        }else{
            return param
        }
    }
   
    checkLogin = () =>{
        if(sessionStorage.getItem('auth')){
            return sessionStorage.getItem('auth')
        }else{
            return 'Please login'
        }
    }

    navigateProfile = () =>{
        if(sessionStorage.getItem('auth')){
            return '/profile'
        }else{
            return '/login'
        }
    }

    render(){
        const style={
            position:'absolute',
            right:'50px'
        }
        /*const auth = 'Anonymous'
        if(sessionStorage.getItem('auth')){
            auth = sessionStorage.getItem('auth')
        }*/
        const search = this.state.data.map(item => (
                <a href={this.filterUrl(item.course_no)}><ListGroup.Item>{item.course_no} {item.name}</ListGroup.Item></a> 
        ))
        return(
            <header>
                <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Col>
                <Nav className="mr-auto">
                    <Navbar.Brand href="/">CMU Class Rater</Navbar.Brand>
                    <Nav.Link href="/"><HomeSharpIcon/></Nav.Link>
                </Nav>
                </Col>
                <Col>
                <Nav className="justify-content-center">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange}/>
                    <Dropdown>{search}</Dropdown>
                    <Button variant="outline-success" onClick={this.handleClickSearch}><SearchSharpIcon/></Button>
                </Form>
                </Nav>
                </Col>
                <Col>
                <Nav className="justify-content-end">
                <NavDropdown title={this.checkLogin()} id="collasible-nav-dropdown">
                    <NavDropdown.Item href={this.navigateProfile()}>{this.checkLogin()}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">logout</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                </Col>
                </Navbar.Collapse>
                </Navbar>

            </header>
        )
    }
}
  
  export default Header