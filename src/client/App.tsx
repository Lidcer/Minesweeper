import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './components/Main/Main';
import './App.scss';
import { OfflineMode } from './components/OfflineMode/OfflineMode';
import { PATH_OFFLINE_MODE } from './utils/pathnames';

export class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path='/account' component={Account} />
            <Route exact path='/stats' component={Stats} /> */}
            <Route path={`/${PATH_OFFLINE_MODE}`} component={OfflineMode} />
            <Route path='*' component={Main} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
