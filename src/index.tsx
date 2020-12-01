import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import './index.less';

class Index {
  sayHello = () : void => {
    let initialTitle = document.title;
  
    setInterval(() => {
      if(document.title === initialTitle)
        document.title = "Hello!";
      else
        document.title = initialTitle;
    },5000);
  }

  render(){
    ReactDOM.render(
      <App/>,
      document.getElementById('root'),
    )
  }
}

let indexPage = new Index();
indexPage.sayHello();
indexPage.render();