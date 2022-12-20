import React from 'react';
import './App.css';
import JokeList from './JokeList';

import { Route, Switch, Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';



const App = props => {
  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary"><span>Clear Jokes</span></div>
            <Link to="/jokes" className="btn btn-sm btn-primary">Random Joke</Link>
            <Link to="/jokes" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Random Ten Jokes</span></Link>
        </div>
          <div className='content'>
            <Switch>
            <Route path="/jokes">
                <JokeList/>
              </Route>
              <Route path="/">
                <Redirect to="/jokes"/>
              </Route>
            </Switch>
          </div>
      </div>
  );
}

export default App;