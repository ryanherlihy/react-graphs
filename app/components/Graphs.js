'use strict';

import React from 'react';
import { PieChart } from 'react-d3';
import ReactChart from 'react-chartjs';
import D3CompPie from 'react-d3-components';

const {
  Component
} = React;

const {
  Doughnut
} = ReactChart;

let D3Pie = D3CompPie.PieChart;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pieData: [
        {label: 'PDF', value: 20, color: '#0000BB', highlight: '#0000FF'},
        {label: 'DOC', value: 40, color: '#BB0000', highlight: '#FF0000'},
        {label: 'JPG', value: 30, color: '#00BB00', highlight: '#00FF00'},
        {label: 'MP3', value: 10, color: '#BB00BB', highlight: '#FF00FF'}
      ]
    }
  }
  render() {
    var data = {
        label: 'somethingA',
        values: [
          {x: 'SomethingA', y: 10},
          {x: 'SomethingB', y: 4},
          {x: 'SomethingC', y: 3},
          {x: 'SomethingD', y: 7}
        ]
    };
    var sort = null;

    var style = {
      height: 400,
      width: 400
    };

    return (
      <div>
        <PieChart
          data={this.state.pieData}
          width={400}
          height={400}
          radius={75}
          innerRadius={50} />
        <div style={style}>
          <Doughnut
            data={this.state.pieData} />
        </div>
        <D3Pie
          data={data}
          width={600}
          height={400}
          margin={{top: 10, bottom: 10, left: 100, right: 100}}
          sort={null} />
      </div>
    )
  }
}

export default App;
