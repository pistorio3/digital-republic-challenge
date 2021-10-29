import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Result from './pages/Result';
import NotFound from './pages/NotFound';

import './assets/css/App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={ Home }
        />
        <Route
          path="/result"
          component={ Result }
        />
        <Route
          path=""
          component={ NotFound }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
