import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class Course extends Component{
    constructor() {
        super()
        this.state = {
            courses:{
                id:"261361",
                name:"Software Engineering",
                section:"11",
                teacher:"Lachana Ramingwong, PhD, Assistant Professor",
                description:"This course teaches students software development life cycle. Students are required to work in a team while going through software engineering activities (including requirements engineering, architectural design, detailed design, construction, quality assurance and delivery) to develop a working software (at least a prototype). Deliverables include requirements, design, test plan, and system document. The course project gives students opportunity to experience an industry like software project. Students are expected to solve the problems occurred during the software development process whether they are technical, social or ethical ones"
            }
        }
    }

    render(){
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.state.courses.id} {this.state.courses.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Section: {this.state.courses.section}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{this.state.courses.teacher}</Card.Subtitle>
                    <Card.Text>
                        {this.state.courses.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Course