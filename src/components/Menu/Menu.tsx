import React, { Component } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

import './Menu.less';

export class Menu extends Component {
  render(){
    return(
      <aside className="josesaranda-menu">
      <nav>
        <img className="josesaranda-profile-img" src="https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg" alt="Profile image" width="100%" height="auto"/>
        <ul>
          {routes.map(route => {
            return (
              <Link key={route.path} className="josesaranda-link" to={route.path}>
              <li>
                {route.name}
              </li>
              </Link>
            )
          })}
        </ul>
      </nav>
      </aside>
    );
  }
}