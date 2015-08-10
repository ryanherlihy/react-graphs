'use strict';

import React from 'react';
import { Line } from 'react-chartjs';

const {
  Component
} = React;

class FilesByDate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Files By Date",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [0,0,0,0,0,0]
          }
        ]
      },
      sentData: [30, 13, 60, 31, 22, 35],
      receivedData: [25, 56, 20, 50, 34, 40],
      options: {
      },
      sentShowing: false,
      receivedShowing: false
    }

    this.chart;

    this.showSent = this.showSent.bind(this);
  }

  componentDidMount() {
    this.chart = this.refs.line.getChart();
    window.chart = this.chart;
  }

  showSent() {
    let points = this.chart.datasets[0].points;

    for (let i = 0; i < points.length; i++) {
      points[i].value = points[i].value + this.state.sentData[i];
    }

    this.chart.update();
  }

  showReceived() {
    let points = this.chart.datasets[0].points;

    for (let i = 0; i < points.length; i++) {
      points[i].value = points[i].value + this.state.receivedData[i];
    }

    this.chart.update();
  }

  render() {
    return (
      <div>
        <div className='btn-group' data-toggle='buttons'>
          <label className='btn btn-default' onClick={this.showSent.bind(this)}>
            <input type='checkbox' />Sent
          </label>
          <label className='btn btn-default' onClick={this.showReceived.bind(this)}>
            <input type='checkbox' />Received
          </label>
        </div>
        <Line
          data={this.state.data}
          options={this.state.options}
          ref='line' />
      </div>
    )
  }
}

export default FilesByDate;
