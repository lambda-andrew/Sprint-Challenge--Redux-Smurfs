import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import SmurfList from './components/SmurfList';
import SmurfForm from './components/SmurfForm';

class App extends Component {
  render() {
    return (
     <Router>
       <Link to='/'>Smurf Village</Link>
       <Link to='/smurf-form'>Add A Smurf</Link>
       <Route exact path='/' component={SmurfList} />
       <Route path='/smurf-form' component={SmurfForm}/>
     </Router>
    );
  }
}

export default App;
