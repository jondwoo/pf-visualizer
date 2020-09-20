import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import NewEntry from './components/NewEntry/NewEntry';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    const data = new FormData();
    data.append('file', selectedFile);
    try {
      const res = await axios.post('http://localhost:9000/upload-csv', data, {
        // receive two    parameter endpoint url ,form data
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/new"
            render={() => (
              <NewEntry
                handleFileChange={handleFileChange}
                handleFileUpload={handleFileUpload}
              />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
