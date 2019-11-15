import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {Nav,Form,Navbar,FormControl,Button,Dropdown} from 'react-bootstrap';
import {ListGroup}  from 'react-bootstrap';
import {Col}  from 'react-bootstrap';
import {NavDropdown }  from 'react-bootstrap';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

class Header extends Component{

    constructor(){
        super()
        this.state = {
            query:'',
            data:[],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClickSearch = this.handleClickSearch.bind(this)
    }


    handleClickSearch = () =>{
        window.location = '/search/'+this.state.query   
        console.log(this.state.query)
    }

    getData = async () => {     
        //if(this.state.query!='') {
        try {
            const response = await axios.get('http://localhost:8000/api/course/search?search=' + this.state.query)
            const data = await response.data
            this.setState({data:data})
            console.log(this.state.data)
            console.log(this.state.query)
        } catch (error){
            console.log(error)
        }
    //}
    }


    componentDidMount(){
        this.getData()
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
            return "../review/"+ param
        }else{
            return param
        }
    }
   
    checkLogin = () =>{
        if(this.props.auth.username){
            return this.props.auth.username
        }else
        if(sessionStorage.getItem('auth')){
            return sessionStorage.getItem('auth')
        }else{
            return 'Login'
        }
    }

    navigateProfile = () =>{
        if(sessionStorage.getItem('auth')){
            return '/profile'
        }else{
            return '/login'
        }
    }

    Logout = () =>{
        sessionStorage.clear()
        if(window.location.href.search('login') < 1){
            window.location.href = '/'
        }else{
            window.location.href = window.location.href 
        }
    }

    setQuery = (param) =>{
        console.log(param)
        //this.setState({query:param})
    }

    render(){
        const style={
            position:'absolute',
            right:'50px'
        }

        //const auth = 'Anonymous'
        if(sessionStorage.getItem('auth')){
            //auth = sessionStorage.getItem('auth')
        }
        const search = this.state.data.map(item => (
                <a href={this.filterUrl(item.course_no)}><ListGroup.Item>{item.course_no} {item.name}</ListGroup.Item></a> 
        ))

        const useStyles = makeStyles({
            option: {
              fontSize: 15,
              '& > span': {
                marginRight: 10,
                fontSize: 18,
              },
            },
          });
          const classes = useStyles;
          const course = 
            <Autocomplete
            //onChange = {this.state.query}
                id="country-select-demo"
                style={{ width: 300 }}
                options={this.state.data}
                classes={{
                    option: classes.option,
                }}
                autoHighlight
                getOptionLabel={option => option.name}
                renderOption={option => (
                    <React.Fragment>                       
                     {option.course_no} {option.name}
                    </React.Fragment>
                )}
                renderInput={params => {
                    onchange =this.setQuery({query:params.inputProps.value})
                    return (
                <TextField
                    {...params}
                    label="Choose a course"
                    variant="outlined"
                    fullWidth
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'disabled', // disable autocomplete and autofill
                    }}
                    />
                    )}}
                />
  

        //console.log(this.props.auth)
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
                {course}
                <Button variant="outline-success" onClick={this.handleClickSearch}><SearchSharpIcon/></Button>
                </Nav>
                </Col>
                <Col>
                <Nav className="justify-content-end">
                <NavDropdown title={this.checkLogin()} id="collasible-nav-dropdown">
                    <NavDropdown.Item href={this.navigateProfile()}>{this.checkLogin()}</NavDropdown.Item>
                    <NavDropdown.Divider />               
                    <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={this.Logout} >logout</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                </Col>
                </Navbar.Collapse>
                </Navbar>

            </header>
        )
    }
}
const mapStateToProps = state =>({
    auth: state.auth.user,
    loggingIn: state.auth.loggingIn
})
  
  //export default connect(mapState)(Header)
  export default connect(mapStateToProps)(Header)