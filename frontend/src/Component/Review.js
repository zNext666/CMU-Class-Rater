import React, { Component } from 'react'
import axios from 'axios'
import Rating from 'react-rating'
import { Form, Card, Button } from 'react-bootstrap'
import {ListItemSecondaryAction} from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import {ThumbUpAlt} from '@material-ui/icons';
import {List} from '@material-ui/core';
import {Nav,Navbar} from 'react-bootstrap';

class Review extends Component{
    constructor(){
        super()
        this.state = {
            course_no: window.location.pathname.split('/')[2],
            rate:[],
            review:[],
            comment:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    async onSubmit(){
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
        //console.log(ncomment)
        await axios.post('http://localhost:8000/api/review/course', ncomment)
        console.log(this.state.comment)
        //alert('rate: '+  this.state.rate + ' comment: ' + this.state.review)
    }

    handleChange(e){
        this.state.rate = e
    }

    async componentDidMount(){
        try {
            const response = await axios.get('http://localhost:8000/api/reviews/' + this.state.course_no)
            const data = await response.data
            this.setState({comment:data})
            console.log(this.state.course_no)
        } catch (error){
            console.log(error)
        }
    }

    render(){
        const comment = this.state.comment.map(comm => (
            <Card.Body key={comm.id}>
                <List>
                <h5>{comm.user}</h5>
                <Navbar>
                <Rating initialRating={comm.rate} readonly />
                <ListItemSecondaryAction>
                    <IconButton edge="end">
                      <ThumbUpAlt />
                    </IconButton>
                </ListItemSecondaryAction>
                </Navbar>
                <p>{comm.comment}</p>
                </List>
            </Card.Body>        
        ))
        return (
            <div>
            <Form>
                <Rating onChange={(rate) => this.handleChange(rate)} />
                <Form.Control onChange={event => this.state.review = event.target.value} as="textarea" rows="3" placeholder="Write a review..."/>
                <Button type="submit" variant="primary" onClick={this.onSubmit} >Submit</Button>
            </Form>
            <Card>
                {comment}
            </Card>        
            </div>
        )
    }
}

export default Review