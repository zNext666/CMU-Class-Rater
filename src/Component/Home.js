import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Course from './Course'
import Review from './Review'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default function Page(){
    return(
        <Router>
            <>
            <Header />
            <Route exact path="/" component={Home}></Route>
            <Route path="/review" component={Reviewpage}></Route>
            </>
        </Router>
    )
}

function Home(){
    return(
        <> 
            <Main />
            <Footer />
        </>
    )
}

function Reviewpage(){
    return(
        <>
            <Course />
            <Review />
        </>
    )
}