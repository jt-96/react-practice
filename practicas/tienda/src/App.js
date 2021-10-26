import React from 'react';
import AppMenu from './components/app-menu/app-menu.component'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/home-page/home-page.component';
import CartPage from './pages/cart-page/cart-page.component';
import ProductPage from './pages/product-page/product-page.component'
import DashboardPage from './pages/dashboard-page/dashboard-page.component';
import LoginPage from './pages/login-page/login-page.component';
import { getCurrentUser } from './redux/user/getters';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div>
      <AppMenu />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/product/:id' component={ProductPage} />
        <Route path='/cart' component={CartPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/dashboard'>
          {
            props.isLoggedIn ?
              <DashboardPage /> :
              <Redirect to='/login' />
          }
        </Route>
      </Switch>
    </div>
  );
}

const mapState = state => ({
  isLoggedIn: getCurrentUser(state)
})

const connector = connect(mapState)

export default connector(App);
