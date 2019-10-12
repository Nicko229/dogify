import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Pug from './components/Pug';
import AllBreeds from './components/AllBreeds';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Header from './components/Header';
import Error from './components/Error';

import store from './store'

function App() {
  return (
    <Provider store={store} hello={console.log('store', store)}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Pug} exact />
            <Route path="/all-breeds" component={AllBreeds} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            < Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
