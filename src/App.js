import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/admin" component={Admin} />
        <Route path="/admin-login" component={AdminLogin} />
      </Switch>
    </Router>
  );
};

export default App;