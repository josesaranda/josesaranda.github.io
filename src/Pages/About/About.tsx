import React, { Component } from "react";
import { changePageTitle } from "../../util";

export class About extends Component {

  componentDidMount(){
    changePageTitle('About');
  }
  
  render(){
    return (
      <div className="josesaranda-about">
        Hello about
      </div>
    )
  }
}