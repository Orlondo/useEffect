import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './components/Home'
import Users from './components/User';
import AnotherPage from './components/AnotherPage';
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ padding: '20px' }}>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/users" component={Users}/>
            <Route path="/another-page" component={AnotherPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
