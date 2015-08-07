'use strict';

import React from 'react';
import FilesByType from './FilesByType';
import TopFiveDomains from './TopFiveDomains';
import FilesByDate from './FilesByDate';

const {
  Component
} = React;

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='panel panel-default'>
              <div className='panel-heading lead'>
                Files By Type
              </div>
              <div className='panel-body'>
                <FilesByType />
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='panel panel-default'>
              <div className='panel-heading lead'>
                Top 5 Domains
              </div>
              <div className='panel-body'>
                <TopFiveDomains />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='panel panel-default'>
              <div className='panel-heading lead'>
                Files By Date
              </div>
              <div className='panel-body'>
                <FilesByDate />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
