import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
// import About from './components/About/About';
// import NewEntry from './components/NewEntry/NewEntry';

import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="main-content">
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" component={About} /> */}
          {/* if you want to pass props to route, render the component */}
          {/* <Route path="/new" render={() => <NewEntry />} /> */}
          {/* <Route path="/new" component={NewEntry} /> */}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
