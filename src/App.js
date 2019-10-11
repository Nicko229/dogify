import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pug from './components/Pug';
import AllBreeds from './components/AllBreeds';
import Login from './auth/Login';
import Register from './auth/Register';
import Header from './components/Header';
import Error from './components/Error';

function App() {
  return (
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
  );
}

export default App;
