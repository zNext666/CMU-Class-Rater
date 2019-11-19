import React, { Component } from 'react'
import axios from 'axios'
import { Card,CardColumns   } from 'react-bootstrap'
import {Container,Row,Col}  from 'react-bootstrap'

class ListCourse extends Component{
    constructor() {
        super()
        this.state = {
            courses:[],
        }
    }

    async componentDidMount(){
        const response = await axios.get('http://localhost:8000/api/courses')
        const data = await response.data
        this.setState({courses:data.rows})
        console.log(data)
    }

    async componentWillReceiveProps(nextProps){
        if(nextProps.sort !=''){
            console.log('sort by ' + nextProps.sort)
            const response = await axios.get('http://localhost:8000/api/courses/test')
            const data = await response.data
            this.setState({courses:data})
            console.log('sort data ', data)
        }else{
            const response = await axios.get('http://localhost:8000/api/courses?page=' + nextProps.page)
            console.log('next page ' + nextProps.page)
            const data = await response.data
            this.setState({courses:data.rows})
            console.log('new data ', data)
        }
    }

    render(){
        const course = this.state.courses.map((item) => (
            <Card key={item.course_no} style={{ width: '18rem' , border: "3px solid lightgrey",height:'14rem',borderRadius: "10px" }}>
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