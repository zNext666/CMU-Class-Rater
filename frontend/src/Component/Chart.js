import React, { Component } from "react";
import Chart from "react-apexcharts";
import { ThemeProvider } from "react-bootstrap";
import { array } from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [ 1, 2, 3, 4,5]
        }
      },
      series: null
    };
  }

  render() {
    var tempcount=[0,0,0,0,0,0]
    var tempArr = this.props.summary
    var tempObj
    for(var i = 0; i < tempArr.length; i++){
        tempObj = tempArr[i]
        //console.log(this.props.summary[i])
        tempcount[Math.floor(tempObj.rate)] += tempObj.count
    }
    tempcount.shift()
    tempObj = [{
      name:"summary",
      data:tempcount
    }]   
    this.state.series = tempObj
    console.log(this.state.series)

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              //series={this.props.summary}
              
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;