import React, { Component } from 'react'
import axios from 'axios'
import { Card,CardColumns   } from 'react-bootstrap'

class ListCourse extends Component{
    constructor() {
        super()
        this.state = {
            courses:[],
            query:window.location.pathname.split('/')[2]
        }
    }

    async componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(nextProps.sort !=''){
            console.log('sort by ' + nextProps.sort)
            const response = await axios.get('http://localhost:8000/api/courses/test')
            const data = await response.data
            this.setState({courses:data.rows})
            console.log('sort data ', data)
        }else{
            const response = await axios.get('http://localhost:8000/api/course/search?search=' + this.state.query  + '&page=' + nextProps.page)
            console.log('next page ' + nextProps.page)
            const data = await response.data
            this.setState({courses:data.rows})
            console.log('new data ', data)
        }
    }

    async componentDidMount(){
        const response = await axios.get('http://localhost:8000/api/course/search?search=' + this.state.query)
        const data = await response.data
        this.setState({courses:data.rows})
        console.log(this.state.query, this.state.courses)
    }
    

    render(){
        const course = this.state.courses.map((item) => (
            <Card key={item.course_no} style={{ width: '18rem' , border: "3px solid lightgrey",height:'14rem',borderRadius: "10px" }}>
                <Card.Body>
                <a href={"../review/" + item.course_no} >
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