import React from 'react';
import Movies from './Movies';
// import {} from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div style={{ background: 'orange' }}>
        <div style={{ marginLeft: '50px' }}>
          <Switch>
            <Route path='/' component={Movies} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
