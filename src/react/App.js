import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import ActiveListContainer from './list/ActiveListContainer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={ActiveListContainer} />
      </Switch>
    </div>
  );
}

export default App;
