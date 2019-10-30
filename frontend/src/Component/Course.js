import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'
import Chart from "react-apexcharts";

class Course extends Component{
    constructor() {
        super()
        this.state = {
            course_no: window.location.pathname.split('/')[2],
            item:[],
            avg:[],
            sum:[],
            
            options: {
                chart: {
                  id: "basic-bar"
                },
                xaxis: {
                  categories: [5, 4, 3, 2, 1]
                }
            },
            series: [
                {
                  name: "series-1",
                  data: [50, 40, 45, 50, 49]
                }
            ]
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
                    Course: {this.state.avg.course_no} Average: {parseFloat(this.state.avg.average).toFixed(2)}
                    {sum}
                    </Card.Text>
<<<<<<< HEAD
                    <div className="app">
                        <div className="row">
                            <div className="mixed-chart">
                                <Chart
                                options={this.state.options}
                                series={this.state.series}
                                type="bar"
                                width="500"
                                />
                            </div>
                        </div>
                    </div>
=======
                    <Chart summary={this.state.sum} />
>>>>>>> f500ecfe50cef5855d7144f7775d6da2803df692
                </Card.Body>
            </Card>
        )
    }
}

export default Course