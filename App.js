

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" component={RecipeList} />
          <Route path="/recipe/:id" component={RecipeDetail} />
          <Route path="/profile" component={UserProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
