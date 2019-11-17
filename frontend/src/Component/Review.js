import React, { Component } from 'react'
import axios from 'axios'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box';
import { Form, Card, Button } from 'react-bootstrap'
import {ListItemSecondaryAction} from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import {ThumbUpAlt} from '@material-ui/icons';
import 'react-notifications-component/dist/theme.css'
import ReactNotification,{ store } from 'react-notifications-component'
import {Navbar} from 'react-bootstrap'
import 'typeface-roboto';
import {connect} from 'react-redux'

class Review extends Component{
    
    constructor(){
        super()
        this.state = {
            course_no: window.location.pathname.split('/')[2],
            rate:0,
            review:[],
            comment:[]
        }
        //this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    async onSubmit(e){
        const auth = sessionStorage.getItem('uid')

        const ncomment = await {
            user_id: Number(auth),
            rate: this.state.rate,
            course_no: this.state.course_no,
            comment: this.state.review
        }
        const res = await axios.post('http://localhost:8000/api/review/course', ncomment)
        const data = await res.data
        store.addNotification({
            title: "Success!",
            message: sessionStorage.getItem('auth') + ' comment success!',
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 4000,
              onScreen: true
            }
          });
          this.setState({review:'',rate:0})
          this.getComment()
          console.log(data)
    }

    handleChange(e,newValue){
        this.setState({rate:newValue})
    }


    // func for loading commend
    getComment = async() =>{
        try {
            const response = await axios.get('http://localhost:8000/api/reviews/' + this.state.course_no)
            const data = await response.data
            this.setState({comment:data})
            console.log(this.state.comment)
        } catch (error){
            console.log(error)
        }
    }

    handleReviewChange = (e) =>{
        this.setState({review:e.target.value})
    }

    async componentDidMount(){
        this.getComment()
    }

    checkLoginReview = () =>{
        if(sessionStorage.getItem('auth')){
            return (<Card>
                <Form onSubmit={e => {e.preventDefault()}}>
                    {/* <Rating onChange={(rate) => this.handleChange(rate)} /> */}
                    
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        {/* <Typography component="legend">Rating</Typography> */}
                        <Rating
                            value={this.state.rate}
                            onChange={(event, newValue) => this.handleChange(event,newValue)}
                        />
                    
                        <Form.Control value={this.state.review} onChange={this.handleReviewChange} as="textarea" rows="3" placeholder="Write a review..."/>
                        <Button type="submit" variant="primary" onClick={this.onSubmit} >Submit</Button>
                    </Box>
                </Form>
            </Card>)
        }else{
            return (<a href='/login'><h2>Please login to write a review</h2></a>)
        }
    }

    render(){     
        const comment = this.state.comment.map(comm => {
            let color = 'action'
            return (<Card.Body key={comm.id}>
                <Box>
                    <h5>{comm.User.username}</h5>
                    <Navbar>
                        <Rating value={comm.rate} readOnly />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" color={color} >
                                <ThumbUpAlt />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </Navbar>
                    <p>{comm.comment}</p>
                </Box>
            </Card.Body>
    )} )
        return (
            <>
            <ReactNotification />
            {this.checkLoginReview()}
            {/* Show commends */}
            <Box><Card>{comment}</Card></Box>
            </>
        )
    }
}
const mapStateToProps = state =>({
    auth: state.auth.user,
    loggingIn: state.auth.loggingIn
})  

  export default connect(mapStateToProps)(Review)