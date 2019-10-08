import React, { Component } from 'react'
import axios from 'axios'
import Rating from 'react-rating'
import { Tab, Tabs, Form, Card, Button } from 'react-bootstrap'

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
            course_no: this.state.course_no,
            user: auth,
            rate: this.state.rate,
            comment: this.state.review
        }
        //console.log(ncomment)
        await axios.post('http://localhost:8000/review/course', ncomment)
        console.log(this.state.comment)
        //alert('rate: '+  this.state.rate + ' comment: ' + this.state.review)
    }

    handleChange(e){
        this.state.rate = e
    }

    async componentDidMount(){
        try {
            const response = await axios.get('http://localhost:8000/reviews/' + this.state.course_no)
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
                <h5>{comm.user}</h5>
                <Rating initialRating={comm.rate} readonly />
                <p>{comm.comment}</p>
            </Card.Body>        
        ))
        return (
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="Comment" title="Comment">
                    <Card>
                        {comment}
                    </Card>               
                </Tab>
                <Tab eventKey="Review" title="Review">
                    <Form>
                        <Rating onChange={(rate) => this.handleChange(rate)} fractions={2} />
                        <Form.Control onChange={event => this.state.review = event.target.value} as="textarea" rows="3" placeholder="Write a review..."/>
                        <Button type="submit" variant="primary" onClick={this.onSubmit} >Review</Button>
                    </Form>
                </Tab>
            </Tabs>
        )
    }
}

export default Review