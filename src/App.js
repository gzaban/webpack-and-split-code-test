import React from 'react';
import { hot } from 'react-hot-loader'
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './containers/HomePage/Loadable';
import NotFoundPage from './containers/NotFoundPage/Loadable';
import './css/main.scss';

const App = () => (
  <div>
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Header />
    <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    </Router>
    <Footer />
  </div>
);

export default hot(module)(App);
