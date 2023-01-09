import React, { useEffect } from 'react';
import './App.css';
import JokeList from './JokeList';
import { findJokesStart, resetJokes } from './actions';

import { Route, Switch, Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';


const App = (props) => {
  
  const randomURL = "https://official-joke-api.appspot.com/random_joke";
  const randomTenURL = "https://official-joke-api.appspot.com/random_ten";

  const randomButton = () => {
    // useEffect(() => {
      props.findJokesStart(randomURL);
    // }, [])
  }    
  
  const clearJokes = () => {
    props.resetJokes();
  }

  const randomTenButton = () => {
    useEffect(() => {
      props.findJokesStart(randomTenURL);
    }, [])
  }

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary" onClick={clearJokes}><span>Clear Jokes</span></div>
            <Link to="/jokes" className="btn btn-sm btn-primary" onClick={randomButton}>Random Joke</Link>
            <Link to="/jokes" className="btn btn-sm btn-success" onClick={randomTenButton}> <span>Random Ten Jokes</span></Link>
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

export default connect(null, {findJokesStart, resetJokes})(App);