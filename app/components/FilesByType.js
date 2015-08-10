'use strict';

import React from 'react';
import { Doughnut } from 'react-chartjs';

const {
  Component
} = React;

class FilesByType extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {label: 'PDF', value: 20, color: '#FF0000', highlight: '#FF6666'},
        {label: 'DOC', value: 40, color: '#00A1F1', highlight: '#66A1F1'},
        {label: 'JPG', value: 30, color: '#00BB00', highlight: '#00FF00'},
        {label: 'MP3', value: 10, color: '#BB00BB', highlight: '#FF00FF'}
      ],
      data2: [
        {label: 'PDF', value: 30, color: '#FF0000', highlight: '#FF6666'},
        {label: 'DOC', value: 20, color: '#00A1F1', highlight: '#66A1F1'},
        {label: 'JPG', value: 60, color: '#00BB00', highlight: '#00FF00'},
        {label: 'MP3', value: 5, color: '#BB00BB', highlight: '#FF00FF'}
      ],
      options: {
      }
    }
    this.chart;

    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    this.chart = this.refs.doughnut.getChart();
  }

  updateData(e) {
    for (let i = 0; i < this.chart.segments.length; i++) {
      this.chart.segments[i].value = Math.round(Math.random() * e.target.value);
    }
    this.chart.update();
  }

  render() {
    return (
      <div>
        <div className='btn-group' data-toggle='buttons'>
          <label className='btn btn-default'>
            <input type='checkbox' />Sent
          </label>
          <label className='btn btn-default'>
            <input type='checkbox' />Received
          </label>
        </div>
        <Doughnut
          data={this.state.data}
          options={this.state.options}
          ref='doughnut' />
        <div className='panel panel-default'>
          <div className='panel-body'>
            <input type='range' onChange={this.updateData}/>
            <span className='pull-left'>Most Recent</span>
            <span className='pull-right'>Oldest</span>
          </div>
        </div>
      </div>
    )
  }
}

export default FilesByType;
