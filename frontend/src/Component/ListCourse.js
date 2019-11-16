import React, { Component } from 'react'
import axios from 'axios'
import { Card,CardColumns   } from 'react-bootstrap'
import {Container,Row,Col}  from 'react-bootstrap'

class ListCourse extends Component{
    constructor() {
        super()
        this.state = {
            courses:[]
        }
    }

    async componentDidMount(){
        const response = await axios.get('http://localhost:8000/api/courses')
        const data = await response.data
        this.setState({courses:data})
        console.log(data)
    }

    render(){
        const course = this.state.courses.map((item) => (
            <Card key={item.course_no} style={{ width: '18rem' }}>
                <Card.Body>
                <a href={"review/"+ item.course_no} >
                    <Card.Title>{item.course_no} {item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Section: {item.section}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{item.teacher}</Card.Subtitle>
                </a>
            </Card.Body>
            </Card>
        ))
        return (
            <>

                <CardColumns>
                {course}
                </CardColumns>
            </>
        )
    }
}

export default ListCourse