import React, { Component } from 'react'
import axios from 'axios'
import { Card,CardColumns,CardDeck,CardGroup     } from 'react-bootstrap'
import {Container,Row,Col}  from 'react-bootstrap'
import { isNull, isUndefined } from 'util'

class ListCourse extends Component{
    constructor() {
        super()
        this.state = {
            courses:[],
            sort: ''
        }
    }

    async componentDidMount(){
        const response = await axios.get('http://35.224.131.27:8000/api/courses')
        const data = await response.data
        this.setState({courses:data.rows})
        console.log('first ',this.state.courses)
    }

    async componentWillReceiveProps(nextProps){
        if(nextProps.sort == 'score' || nextProps.sort == 'view' || nextProps.sort == 'credit DESC' || nextProps.sort == 'credit ASC'){
            console.log('sort by ' + nextProps.sort)
            console.log('type',typeof nextProps.sort)
            this.setState({sort: nextProps.sort})
            console.log('sadads ' + this.state.sort)
            /*const response = await axios.get('http://35.224.131.27:8000/api/courses/raw')
            const data = await response.data
            this.setState({courses:data})
            console.log('sort data 655', this.state.courses)*/
        }else{
            console.log('failed')
        }
        if(this.state.sort != ''){
            if(this.state.sort == 'score'){
                const response = await axios.get('http://35.224.131.27:8000/api/courses/raw?page=' + nextProps.page)
                const data = await response.data
                this.setState({courses:data})
                console.log('sort data ', this.state.courses)
            }
            if(this.state.sort == 'view'){
                const response = await axios.get('http://35.224.131.27:8000/api/courses/raw?sort=view&&page=' + nextProps.page)
                const data = await response.data
                this.setState({courses:data.rows})
                console.log('sort data ', this.state.courses)
            }
            if(this.state.sort == 'credit DESC' || this.state.sort == 'credit ASC'){
                let order = this.state.sort.split(' ')[1]
                const response = await axios.get('http://35.224.131.27:8000/api/courses/raw?sort=credit&&order='+ order +'&&page=' + nextProps.page)
                const data = await response.data
                this.setState({courses:data.rows})
                console.log('sort data ', this.state.courses)
            }
        }else{
            const response = await axios.get('http://35.224.131.27:8000/api/courses?page=' + nextProps.page)
            console.log('next page ' + nextProps.page)
            const data = await response.data
            this.setState({courses:data.rows})
            console.log('new data ', this.state.courses)
        }
    }

    render(){
        const course = this.state.courses.map((item) => (
            <a href={"review/"+ item.course_no} ><Card key={item.course_no} style={{ width: '17rem' , border: "3px solid lightgrey",borderRadius: "10px" ,margin: "5px",}}>
                <Card.Body>
                    <Card.Title>{item.course_no} {item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">credit: {item.credit}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Section: {item.section}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{item.teacher}</Card.Subtitle>
                    <footer className="blockquote-footer" style={{fontSize: '15px',position:'absolute', right:'30px', bottom:'10px'}} >view: {item.view}</footer>
            </Card.Body>
            </Card></a>
        ))
        return (
            <>
                <CardDeck>
                    {course}
                </CardDeck>
            </>
        )
    }
}

export default ListCourse