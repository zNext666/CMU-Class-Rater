import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactNotification,{ store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import axios from 'axios'
import {Nav,Form,Navbar,FormControl,Button,Dropdown} from 'react-bootstrap';
import {ListGroup}  from 'react-bootstrap';
import {Col}  from 'react-bootstrap';
import {NavDropdown }  from 'react-bootstrap';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import {connect} from 'react-redux'

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
            return "../review/"+ param
        }else{
            return param
        }
    }
   
    checkLogin = () =>{
        if(sessionStorage.getItem('auth')){
            return sessionStorage.getItem('auth')
        }else{
            return 'Login'
        }
    }

    checkLogout = () =>{
        console.log(sessionStorage.getItem('auth'))
            if(sessionStorage.getItem('auth')){
                return (
                <>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={this.Logout} >Logout</NavDropdown.Item>
                </>
                )
            }
    }

    navigateProfile = () =>{
        if(sessionStorage.getItem('auth')){
            return '/profile'
        }else{
            return '/login'
        }
    }

    /*componentDidUpdate(){
        if(window.para)
    }*/

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

    render(){
        const style={
            position:'absolute',
            right:'50px'
        }

        const search = this.state.data.map(item => (
                <a href={this.filterUrl(item.course_no)}><ListGroup.Item>{item.course_no} {item.name}</ListGroup.Item></a> 
        ))
        //console.log(this.props.auth)
        return(  
            <><header>
                <ReactNotification  />
                <Navbar expand="lg" style={{backgroundColor: "#BC77FF"}}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Col>
                <Nav className="mr-auto">
                    <Navbar.Brand href="/">CMU Class Rater</Navbar.Brand>
                    <Nav.Link href="/" ><HomeOutlinedIcon style={{fontSize: "30", float: "both"}} /></Nav.Link>
                </Nav>
                </Col>
                <Col>
                <Nav className="justify-content-center">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange}/>
                    
                    <Button variant="primary" onClick={this.handleClickSearch}><SearchSharpIcon/></Button>
                </Form>
                </Nav>
                <Dropdown style={{position: 'absolute', background:'white', zIndex: 1}} >{search}</Dropdown>
                </Col>
                <Col>
                <Nav className="justify-content-end">
                <NavDropdown title={this.checkLogin('Login')} id="collasible-nav-dropdown">
                    <NavDropdown.Item href={this.navigateProfile()}>{this.checkLogin()}</NavDropdown.Item>
                    <NavDropdown.Divider />               
                    <NavDropdown.Item href="/register">Register</NavDropdown.Item>  
                    {this.checkLogout()}
                </NavDropdown>               
                </Nav>
                </Col>
                </Navbar.Collapse>      
                </Navbar>
            </header></>    
        )
    }
}
const mapStateToProps = state =>({
    auth: state.auth.user,
    notify: state.auth.notify
})
  
  //export default connect(mapState)(Header)
  export default connect(mapStateToProps)(Header)