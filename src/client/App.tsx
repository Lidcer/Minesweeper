import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './components/Main';
import './App.scss';

export class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path='/account' component={Account} />
            <Route exact path='/stats' component={Stats} /> */}
            <Route path='*' component={Main} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
