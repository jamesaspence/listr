import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './common/layout/Layout';
import ListView from './views/ListView';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" component={ListView} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
