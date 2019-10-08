import React, { Component } from 'react'
import Rating from 'react-rating'
import { Tab, Tabs, Form, Card, Button } from 'react-bootstrap'

class Review extends Component{
    constructor(){
        super()
        this.state = {
            rate:[],
            review:[],
            comment:[{
                    user: "Prathompong",
                    rating: 5,
                    comment:"Good course!!"
                },
                {
                    user: "Pengine",
                    rating: 4.5,
                    comment:"Good teacher!!"
                }
            ]
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
            rating: this.state.rate,
            comment: this.state.review
        }
        //console.log(ncomment)
        this.state.comment.push(ncomment)
        console.log(this.state.comment)
        //alert('rate: '+  this.state.rate + ' comment: ' + this.state.review)
    }

    handleChange(e){
        this.state.rate = e
    }

    render(){
        const comment = this.state.comment.map(comm => (
            <Card.Body key={comm.user}>
                <h5>{comm.user}</h5>
                <Rating initialRating={comm.rating} readonly />
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