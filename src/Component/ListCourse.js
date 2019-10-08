import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

class ListCourse extends Component{
    constructor() {
        super()
        this.state = {
            courses:[]
        }
    }

    async componentDidMount(){
        const response = await axios.get('localhost/courses')
        const data = await response.data
        this.setState({courses:data})
    }

    render(){
        const course = this.state.courses.map((item) => (
            <Card.Title>{item.course_no} {item.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Section: {item.section}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{item.teacher}</Card.Subtitle>
        ))
        return (
            <a href="/review">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        {course}
                    </Card.Body>
                </Card>
            </a>
        )
    }
}

export default ListCourse