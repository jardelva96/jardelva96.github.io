import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Suggestions from './components/Suggestions';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Feed} />
          </Switch>
          <Suggestions />
        </div>
      </div>
    </Router>
  );
}

export default App;
