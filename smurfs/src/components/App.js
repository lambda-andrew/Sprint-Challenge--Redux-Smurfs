import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './App.scss';

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

class App extends Component {
  render() {
    return (
      <div className='App'>
     <Router>
        <nav>
          <NavLink to='/'>Smurf Village</NavLink>
          <NavLink to='/smurf-form'>Add A Smurf</NavLink>
        </nav>
          <Route exact path='/' component={SmurfList} />
          <Route path='/smurf-form' component={SmurfForm}/>
     </Router>
     </div>
    );
  }
}

export default App;
