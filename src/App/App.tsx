import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Menu } from "../components/Menu/Menu";
import { routes } from "../routes";

import './App.less';

export class App extends Component {
  render(){
    return (
      <div className="josesaranda-app">
        <BrowserRouter>
        <Menu />
          <main className="josesaranda-main">
            <Switch>
              {routes.map(route => {
                return <Route key={route.path} exact path={route.path} component={route.page} />
              })}
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}