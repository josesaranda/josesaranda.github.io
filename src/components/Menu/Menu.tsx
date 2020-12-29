import React, { Component } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Menu.less';

export class Menu extends Component {
  render(){
    return(
      <aside className="josesaranda-menu">
      <nav>
        <ul>
          {routes.filter(route => !route.hidden).map(route => {
            return (
              <Link key={route.path} className="josesaranda-link" to={route.path}>
              <li>
                <FontAwesomeIcon icon={route.icon} /> <span className="name">{route.name}</span>
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