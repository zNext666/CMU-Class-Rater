import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class ListCourse extends Component{
    constructor() {
        super()
        this.state = {
            courses:{
                id:"261361",
                name:"Software Engineering",
                section:"11",
                teacher:"Lachana Ramingwong, PhD, Assistant Professor"
            }
        }
    }

    render(){
        return (
            <a href="/review">
                <Card>
                    <Card.Body>
                        <Card.Title>{this.state.courses.id} {this.state.courses.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.state.courses.teacher}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </a>
        )
    }
}

export default ListCourse