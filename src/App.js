import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import AssistenciaTecnica from './pages/AssistenciaTecnica';
import AdminLogin from './components/AdminLogin';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/admin" component={Admin} />
        <Route path="/admin" component={Admin} />
        <Route path="/assistencia-tecnica" component={AssistenciaTecnica} />
        <Route path="/" component={Home} />
        <Route path="/assistencia-tecnica" component={AssistenciaTecnica} />
        <Route path="/site-eletronica" component={SiteEletronica} />
        <Route path="/site-eletronica" component={SiteEletronica} />
        <Route path="/assistencia-tecnica" component={AssistenciaTecnica} />
      </Switch>
    </Router>
  );
};

export default App;