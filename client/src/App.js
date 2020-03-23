import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import Navbar from './components/Layout/navbar';
import Footer from './components/Layout/Footer';
import Caroussel from './components/Layout/Caroussel';
import Category from './components/Layout/Categorie';
import Add from './components/MainPages/add';
import Login from './components/MainPages/login';
import Home from './components/MainPages/home';
import Client from './components/MainPages/Client';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/ClientPages/Profile';
import { connect } from 'react-redux';
import store from './store';
import { useAlert } from 'react-alert';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ alerts = null }) => {
  useEffect(() => {
    store.dispatch(loadUser(), []);
  });
  const alert = useAlert();

  useEffect(() => {
    if (alerts !== null && alerts.length > 0) {
      alerts.map(el => {
        if (el.alertType === 'success') alert.success(`${el.msg}`);
        else if (el.alertType === 'error') alert.error(`${el.msg}`);
        return null;
      });
    }
  });
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Caroussel />
          <Category />
        </Route>
        <Route exact path='/login' component={Login} />

        <Route exact path='/add' component={Add} />

        <PrivateRoute exact path='/home' component={Home} />
        <PrivateRoute exact path='/profile' component={Profile} />

        <PrivateRoute exact path='/client' component={Client} />
      </Switch>

      <Footer />
    </Fragment>
  );
};

const mapState = state => ({
  alerts: state.alert,
  // loading: state.auth.loading,
  // auth: state.auth,
});
export default connect(mapState)(App);
