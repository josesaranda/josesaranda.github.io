import React, { Component } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Menu.less';
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export class Menu extends Component {
  render(){
    return(
      <aside className="josesaranda-menu">
      <nav>
        <ul>
          {routes.filter(route => !route.hidden).map(route => {
            if(!route.external){
              return (
                <Link key={route.path} className="josesaranda-link" to={route.path}>
                  <li>
                    <FontAwesomeIcon icon={route.icon as IconDefinition} /> <span className="name">{route.name}</span>
                  </li>
                </Link>
              );
            } else {
              return (
                <a key={route.path} href={route.path} target="_blank">
                  <li>
                    {route.icon} <span className="name">{route.name}</span>
                  </li>
                </a>
              );
            }
          })}
        </ul>
      </nav>
      </aside>
    );
  }
}