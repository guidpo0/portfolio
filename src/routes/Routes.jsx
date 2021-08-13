import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

function Routes() {
  return (
    <Switch>
      <Route path="/projects" component={ Projects } />
      <Route path="/" component={ Home } />
    </Switch>
  );
}

export default Routes;