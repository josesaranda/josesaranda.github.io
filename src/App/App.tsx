import React, { Component } from "react";
import { Menu } from "../components/Menu/Menu";

import './App.less';

export class App extends Component {
  render(){
    return (
      <div className="josesaranda-app">
        <Menu />
        <div style={{width: 'calc(100% - 350px)', padding: '16px', float: 'left'}}>
          Hello josesaranda.github.io, parcel, react and typescript
        </div>
      </div>
    );
  }
}