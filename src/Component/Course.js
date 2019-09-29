import React from 'react'
import {Card} from 'react-bootstrap'

function Course(){
    return (
        <Card>
            <Card.Body>
                <Card.Title>Course Name, section, and ID</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Teacher name</Card.Subtitle>
                    <Card.Text>
                        Course descrpition...
                    </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Course