'use strict';

import React from 'react';

const {
  Component
} = React;

class Pie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pieData: [
        {label: 'PDF', value: 20},
        {label: 'DOC', value: 40},
        {label: 'JPG', value: 30},
        {label: 'MP3', value: 10}
      ]
    }
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Pie;
