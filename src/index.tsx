import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import './index.less';

class Index {
  render(){
    ReactDOM.render(
      <App/>,
      document.getElementById('root'),
    )
  }
}

let indexPage = new Index();
indexPage.render();