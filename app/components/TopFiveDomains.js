'use strict';

import React from 'react';
import { Bar } from 'react-chartjs';

const {
  Component
} = React;

class TopFiveDomains extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ["Sonian", "Facebook", "Google", "Yahoo", "Github"],
        datasets: [
          {
            label: "Top Five Domains",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56]
          },
        ]
      },
      options: {
      }
    }
  }

  render() {
    return (
      <div>
        <Bar
          data={this.state.data}
          options={this.state.options} />
      </div>
    )
  }
}

export default TopFiveDomains;