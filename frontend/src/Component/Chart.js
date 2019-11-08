import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1,1.5,2,2.5,3,3.5,4,4.5,5]
        }
      },
      series: null
    };
  }

  render() {
    var tempcount=[0,0,0,0,0,0,0,0,0,0]
    var tempArr = this.props.summary
    var tempObj
    for(var i = 0; i < tempArr.length; i++){
        tempObj = tempArr[i]
        //console.log(this.props.summary[i])
        //tempcount[Math.floor(tempObj.rate)] += tempObj.count
        if(tempObj.rate == 1){
          tempcount[1] = tempObj.count
        }
        if(tempObj.rate == 1.5){
          tempcount[2] = tempObj.count
        }
        if(tempObj.rate == 2){
          tempcount[3] = tempObj.count
        }
        if(tempObj.rate == 2.5){
          tempcount[4] = tempObj.count
        }
        if(tempObj.rate == 3){
          tempcount[5] = tempObj.count
        }
        if(tempObj.rate == 3.5){
          tempcount[6] = tempObj.count
        }
        if(tempObj.rate == 4){
          tempcount[7] = tempObj.count
        }
        if(tempObj.rate == 4.5){
          tempcount[8] = tempObj.count
        }
        if(tempObj.rate == 5){
          tempcount[9] = tempObj.count
        }
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