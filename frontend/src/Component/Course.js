import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'

class Course extends Component{
    constructor() {
        super()
        this.state = {
            course_no: window.location.pathname.split('/')[2],
            item:[]
        }
    }

    async componentDidMount(){
        try {
            const response = await axios.get('http://localhost:8000/api/course/' + this.state.course_no)
            const data = await response.data
            this.setState({item:data})
            console.log(this.state.item)
        } catch (error){
            console.log(error)
        }
    }

    render(){
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.state.item.course_no} {this.state.item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Section: {this.state.item.section}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{this.state.item.teacher}</Card.Subtitle>
                    <Card.Text>
                        {this.state.item.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Course