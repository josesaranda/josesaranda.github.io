import React, { Component } from "react";
import { changePageTitle, showMenu } from "../../util";

import './Home.less';

export class Home extends Component {

  componentDidMount(){
    changePageTitle('Home');
    showMenu();
  }

  render(){
    return (
      <div className="josesaranda-home">
        Hello world! This project was built with parcel, react and typescript and hosted by github pages.
        Hope you like it. Click on about to know more about me.
      </div>
    )
  }
}