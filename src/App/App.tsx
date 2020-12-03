import React, { Component } from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Menu } from "../components/Menu/Menu";
import { routes } from "../routes";

import './App.less';

export class App extends Component {
  render(){
    return (
      <div className="josesaranda-app">
        <HashRouter basename="/">
        <Menu />
          <main className="josesaranda-main">
            <Switch>
              {routes.map(route => {
                return <Route key={route.path} exact path={route.path} component={route.page} />
              })}
            </Switch>
          </main>
        </HashRouter>
      </div>
    );
  }
}