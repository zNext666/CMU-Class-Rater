import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'
import Chart from './Chart'

class Course extends Component{
    constructor() {
        super()
        this.state = {
            course_no: window.location.pathname.split('/')[2],
            item:[],
            avg:[],
            sum:[]
        }
    }

    getCourse = async() =>{
        try {
            const response = await axios.get('http://localhost:8000/api/course/' + this.state.course_no)
            const data = await response.data
            this.setState({item:data})
            console.log(this.state.item)
        } catch (error){
            console.log(error)
        }
    }

    getAvg = async() =>{
        try {
            const response = await axios.get('http://localhost:8000/api/reviews/' + this.state.course_no + '/summary/average')
            const data = await response.data
            this.setState({avg:data})
            console.log(this.state.avg)
        } catch (error) {
            console.log(error)
        }
    }

    getSum = async() =>{
        try {
            const response = await axios.get('http://localhost:8000/api/reviews/' + this.state.course_no + '/summary')
            const data = await response.data
            this.setState({sum:data})
            console.log(this.state.sum)
        } catch (error) {
            console.log(error)
        }
    }

    async componentDidMount(){
        this.getCourse()
        this.getAvg()
        this.getSum()
    }

    render(){
        const sum = this.state.sum.map((item) => (
            <>
                <p>Rate: {item.rate}</p>
                <p>Count: {item.count}</p>
            </>
        ))
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.state.item.course_no} {this.state.item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Section: {this.state.item.section}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{this.state.item.teacher}</Card.Subtitle>
                    <Card.Text>
                        {this.state.item.description}
                    </Card.Text>
                    <Card.Text>
                    Course: {this.state.avg.course_no} Average: {this.state.avg.average}
                    {sum}
                    </Card.Text>
                    <Chart />
                </Card.Body>
            </Card>
        )
    }
}

export default Course