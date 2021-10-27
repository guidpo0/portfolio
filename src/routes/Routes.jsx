import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';

function Routes() {
  return (
    <Switch>
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
