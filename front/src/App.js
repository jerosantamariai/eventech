import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Navbar from '../src/components/navbar';
import Home from './views/home';
import NotFound from './views/notfound';
import Register from './views/register';
import Login from './views/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
