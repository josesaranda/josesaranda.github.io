import React, { Component } from "react";

import './Menu.less';

export class Menu extends Component {
  render(){
    return(
      <nav className="josesaranda-menu">
        <img className="josesaranda-profile-img" src="https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg" alt="Profile image" width="100%" height="auto"/>
        <ul>
          <li>About me</li>
          <li>Coming soon</li>
          <li>Coming soon</li>
          <li>Coming soon</li>
        </ul>
      </nav>
    );
  }
}