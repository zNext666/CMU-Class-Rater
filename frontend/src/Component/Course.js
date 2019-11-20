import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'
import Chart from './Chart'
import Rating from '@material-ui/lab/Rating';
import {Row ,Col}  from 'react-bootstrap';
import { isNull } from 'util';

class Course extends Component{
    constructor() {
        super()
        this.state = {
            course_no: window.location.pathname.split('/')[2],
            item:[],
            avg:[],
            sum:[],
        }
    }

    getCourse = async() =>{
        try {
            const increaseView = await axios.post('http://35.224.131.27:8000/api/course/' + this.state.course_no + '/view', {course_no:this.state.course_no})
            const response = await axios.get('http://35.224.131.27:8000/api/course/' + this.state.course_no)
            const data = await response.data
            this.setState({item:data})
            console.log(this.state.item)
        } catch (error){
            console.log(error)
        }
    }

    getAvg = async() =>{
        try {
            const response = await axios.get('http://35.224.131.27:8000/api/reviews/' + this.state.course_no + '/summary/average')
            const data = await response.data
            this.setState({avg:data})
            console.log(this.state.avg)
        } catch (error) {
            console.log(error)
        }
    }

    getSum = async() =>{
        try {
            const response = await axios.get('http://35.224.131.27:8000/api/reviews/' + this.state.course_no + '/summary')
            const data = await response.data
            this.setState({sum:data})
            console.log(this.state.sum)
        } catch (error) {
            console.log(error)
        }
    }

    test = () =>{
        let series = []
        this.state.sum.map((item) => {
            series.push(item.count)
        })
        console.log(series)
        return series
    }

    async componentDidMount(){
        this.getCourse()
        this.getAvg()
        this.getSum()
        this.test()
    }

    render(){
        const sum = this.state.sum.map((item) => (
            <>
            </>
        ))
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.state.item.course_no} {this.state.item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Section: {this.state.item.section}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{this.state.item.teacher}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">view: {this.state.item.view}</Card.Subtitle>
                    <Card.Text>
                        {this.state.item.description}
                    </Card.Text>
                    <Card.Text>
                    <Col>
                    <Row>
                        Average: {!isNull(this.state.avg.average) ? parseFloat(this.state.avg.average).toFixed(2) : 'No average'}
                    </Row>
                    <Row>
                        <Rating name="half-rating" value={this.state.avg.average} precision={0.1} readOnly />
                    </Row>
                    </Col>
                    
                    </Card.Text>

                    <div className="app">
                        <div className="row">
                            <div className="mixed-chart">
                                <Chart summary={this.state.sum}/>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default Course