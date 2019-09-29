import React from 'react'
import Rating from 'react-rating'
import { Tab, Tabs } from 'react-bootstrap'


function Footer(){
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="Comment" title="Comment">
                Other comments...
            </Tab>
            <Tab eventKey="Review" title="Review">
            <Rating
  emptySymbol="fa fa-star-o fa-2x"
  fullSymbol="fa fa-star fa-2x"
  fractions={2}
/><br></br>
                Write a review...
            </Tab>
        </Tabs>
    )
}

export default Footer