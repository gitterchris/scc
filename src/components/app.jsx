import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header';
import Home from './home';
import About from './about';
import Projects from './projects';
import PreDesigned from './pre-designed';
import Services from './services';
import Team from './team';
import Footer from './footer';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route
        path="/about"
        component={About}
      />
      <Route
        path="/projects"
        component={Projects}
      />
      <Route
        path="/pre-designed"
        component={PreDesigned}
      />
      <Route
        path="/services"
        component={Services}
      />
      <Route
        path="/team"
        component={Team}
      />
      <Route
        exact
        path="/"
        component={Home}
      />
    </Switch>
    <Footer />
  </div>
);

export default App;
