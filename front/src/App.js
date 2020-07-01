import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Navbar from '../src/components/navbar';
import Home from './views/home';
import NotFound from './views/notfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
