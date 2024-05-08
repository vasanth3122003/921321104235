// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import ProductPage from './ProductPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:productId" component={ProductPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
