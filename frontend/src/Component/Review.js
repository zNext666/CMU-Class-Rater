import React, { Component } from 'react'
import axios from 'axios'
import Rating from '@material-ui/lab/Rating'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Form, Card, Button } from 'react-bootstrap'
import {ListItemSecondaryAction} from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import {ThumbUpAlt} from '@material-ui/icons';
import {List} from '@material-ui/core';
import 'react-notifications-component/dist/theme.css'
import ReactNotification,{ store } from 'react-notifications-component'
import {Navbar} from 'react-bootstrap'
import 'typeface-roboto';
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
        const auth = 'Anonymous'
        if(sessionStorage.getItem('auth')){
            auth = sessionStorage.getItem('auth')
        }

        const ncomment = await {
            user: auth,
            rate: this.state.rate,
            course_no: this.state.course_no,
            comment: this.state.review
        }
        await axios.post('http://localhost:8000/api/review/course', ncomment)
        store.addNotification({
            title: "Success!",
            message: auth + ' comment success!',
            type: "success",
            insert: "top",
            container: "top-left",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 4000,
              onScreen: true
            }
          });
          this.getComment()
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
            console.log(this.state.course_no)
        } catch (error){
            console.log(error)
        }
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
                    
                        <Form.Control onChange={event => this.state.review = event.target.value} as="textarea" rows="3" placeholder="Write a review..."/>
                        <Button type="submit" variant="primary" onClick={this.onSubmit} >Submit</Button>
                    </Box>
                </Form>
            </Card>)
        }else{
            return (<a href='/login'><h2>Please login to write a review</h2></a>)
        }
    }

    render(){  
        const comment = this.state.comment.map(comm => (
            <Card.Body key={comm.id}>
                <Box>
                    <h5>{comm.user}</h5>
                    <Navbar>
                        <Rating value={comm.rate} readOnly />
                        <ListItemSecondaryAction>
                            <IconButton edge="end">
                                <ThumbUpAlt />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </Navbar>
                    <p>{comm.comment}</p>
                </Box>
            </Card.Body>
        ))
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

export default Review