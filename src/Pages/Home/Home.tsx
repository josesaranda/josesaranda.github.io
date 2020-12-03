import React, { Component } from "react";
import { changePageTitle } from "../../util";

export class Home extends Component {

  componentDidMount(){
    changePageTitle('Home');
  }

  render(){
    return (
      <div className="josesaranda-home">
        Hello josesaranda.github.io, parcel, react and typescript
      </div>
    )
  }
}