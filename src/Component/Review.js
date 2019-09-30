import React, { Component } from 'react'
import Rating from 'react-rating'
import { Tab, Tabs, Form, Card, Button } from 'react-bootstrap'

class Review extends Component{
    constructor(){
        super()
        this.state = {
            rate:[]
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.state.rate = e
    }

    handleClick(){
        alert(this.state.rate)
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
                    <Rating onChange={(rate) => this.handleChange(rate)} fractions={2} />
                    <Form.Control as="textarea" rows="3" placeholder="Write a review..."/>
                    <Button variant="primary" onClick={this.handleClick}>Review</Button>
                </Tab>
            </Tabs>
        )
    }
}

export default Review