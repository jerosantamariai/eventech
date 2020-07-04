import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Navbar from '../src/components/navbar';
import Home from './views/home';
import NotFound from './views/notfound';
import Register from './views/register';
import Login from './views/login';
import Dashboard from './views/dashboard';
import QuienesSomos from './views/quienessomos';
import Info from './views/info';
import Precios from './views/precios';
import RequestPassword from './views/requestPassword';
import PerfilAdmin from './views/role/1admin';
import PerfilFinanzas from './views/role/2finanzas';
import PerfilComercial from './views/role/3comercial';
import PerfilStaffGeneral from './views/role/4staffGeneral';
import PerfilAlimentacion from './views/role/5alimentacion';
import PerfilSeguridad from './views/role/6seguridad';
import PerfilProtagonista from './views/role/7protagonista';
import PerfilCliente from './views/role/8cliente';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/perfil/admin" component={PerfilAdmin} />
          <Route exact path="/perfil/finanzas" component={PerfilFinanzas} />
          <Route exact path="/perfil/comercial" component={PerfilComercial} />
          <Route exact path="/perfil/staff" component={PerfilStaffGeneral} />
          <Route exact path="/perfil/staff" component={PerfilStaffGeneral} />
          <Route exact path="/perfil/alimentacion" component={PerfilAlimentacion} />
          <Route exact path="/perfil/seguridad" component={PerfilSeguridad} />
          <Route exact path="/perfil/protagonista" component={PerfilProtagonista} />
          <Route exact path="/perfil/cliente" component={PerfilCliente} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/precios" component={Precios} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/quienesSomos" component={QuienesSomos} />
          <Route exact path="/request_password" component={RequestPassword}/>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
