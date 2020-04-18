import React from 'react';
import './App.scss';
import Header from './common/Header';
import Footer from './common/Footer';
import { Switch, Route } from 'react-router-dom';
import ActiveListContainer from './list/ActiveListContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" component={ActiveListContainer} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
