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
        {label: 'PDF', value: 20, color: '#0000BB', highlight: '#0000FF'},
        {label: 'DOC', value: 40, color: '#BB0000', highlight: '#FF0000'},
        {label: 'JPG', value: 30, color: '#00BB00', highlight: '#00FF00'},
        {label: 'MP3', value: 10, color: '#BB00BB', highlight: '#FF00FF'}
      ],
      options: {
      }
    }
  }

  render() {
    return (
      <div>
        <Doughnut
          data={this.state.data}
          options={this.state.options} />
        <div>
          <input type='checkbox' />
          <span>Sent</span>
          <input type='checkbox' />
          <span>Received</span>
        </div>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <input type='range' />
            <span className='pull-left'>Most Recent</span>
            <span className='pull-right'>Oldest</span>
          </div>
        </div>
      </div>
    )
  }
}

export default FilesByType;
