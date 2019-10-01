import React, { Component } from 'react'
import Rating from 'react-rating'
import { Tab, Tabs, Form, Card, Button } from 'react-bootstrap'

class Review extends Component{
    constructor(){
        super()
        this.state = {
            rate:[],
            review:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(){
        alert(this.state.rate + this.state.review)
    }

    handleChange(e){
        this.state.rate = e
    }

    render(){
        return (
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="Comment" title="Comment">
                    <Card>
                        <Card.Body>Other comment...</Card.Body>
                    </Card>               
                </Tab>
                <Tab eventKey="Review" title="Review">
                    <Form>
                        <Rating onChange={(rate) => this.handleChange(rate)} fractions={2} />
                        <Form.Control onChange={event => this.setState({review: event.target.value})} as="textarea" rows="3" placeholder="Write a review..."/>
                        <Button variant="primary" onClick={this.onSubmit} >Review</Button>
                    </Form>
                </Tab>
            </Tabs>
        )
    }
}

export default Review