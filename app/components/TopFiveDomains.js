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
            data: [65, 59, 80, 81, 56]
          },
        ]
      },
      options: {
      }
    }

    this.chart;
    this.bars;

    this.renderCompanyColors = this.renderCompanyColors.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    this.chart = this.refs.bar.getChart();
    this.bars = this.refs.bar.getChart().datasets[0].bars;
    this.renderCompanyColors();
  }

  renderCompanyColors() {
    this.bars = this.bars.map((bar) => {
      switch (bar.label) {
        case 'Facebook':
          bar.fillColor = '#3b5998';
          bar._saved.fillColor = '#3b5998';
          bar.highlightFill = '#5d7bba';
          return(bar);
          break;
        case 'Yahoo':
          bar.fillColor = '#400191';
          bar._saved.fillColor = '#400191';
          bar.highlightFill = '#6223b3';
          return(bar);
          break;
        case 'Sonian':
          bar.fillColor = '#ffb020';
          bar._saved.fillColor = '#ffb020';
          bar.highlightFill = '#ffd242';
          return(bar);
          break;
        case 'Google':
          bar.fillColor = '#db4437';
          bar._saved.fillColor = '#db4437';
          bar.highlightFill = '#fd6659';
          return(bar);
          break;
        case 'Github':
          bar.fillColor = '#999999';
          bar._saved.fillColor = '#999999';
          bar.highlightFill = '#bbbbbb';
          return(bar);
          break;
        default:
          return(bar);
          break;
      }
    });
  }

  updateData(e) {
    for (let i = 0; i < this.bars.length; i++) {
      this.bars[i].value = Math.round(Math.random() * 100);
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
        <Bar
          data={this.state.data}
          options={this.state.options}
          ref='bar' />
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

export default TopFiveDomains;
