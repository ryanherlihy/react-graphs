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
            data: [65, 59, 80, 81, 56, 75]
          }
        ]
      },
      options: {
      }
    }
  }

  render() {
    return (
      <Line
        data={this.state.data}
        options={this.state.options} />
    )
  }
}

export default FilesByDate;
