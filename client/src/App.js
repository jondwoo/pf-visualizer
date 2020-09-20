import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import NewEntry from './components/NewEntry/NewEntry';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          {/* if you want to pass props to route, render the component */}
          {/* <Route path="/new" render={() => <NewEntry />} /> */}
          <Route path="/new" component={NewEntry} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
