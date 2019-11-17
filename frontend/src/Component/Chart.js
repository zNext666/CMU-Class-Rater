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

        plotOptions: {
          bar: {
              horizontal: true,
          }
      },
      colors: ['#ffce00'],//เปลี่ยนสี

        tooltip: { //ส่วนของตัวhoverเวลาเอาเมาส์ไปชี้แท่งกราฟ
          theme: 'dark',//พื้นหลัง hover สีดำ
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return ''
              }
            }
          }
        },

      
        xaxis: {
          categories: ['1','2','3','4','5']
        }
      },
      series: null
    };
  }

  render() {
    var tempcount=[0,0,0,0,0]
    var tempArr = this.props.summary
    var tempObj
    for(var i = 0; i < tempArr.length; i++){
        tempObj = tempArr[i]
        //console.log(this.props.summary[i])
        //tempcount[Math.floor(tempObj.rate)] += tempObj.count
        if(tempObj.rate == 1){
          tempcount[1] = tempObj.count
        }
        if(tempObj.rate == 2){
          tempcount[2] = tempObj.count
        }
        if(tempObj.rate == 3){
          tempcount[3] = tempObj.count
        }
        if(tempObj.rate == 4){
          tempcount[4] = tempObj.count
        }
        if(tempObj.rate == 5){
          tempcount[5] = tempObj.count
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