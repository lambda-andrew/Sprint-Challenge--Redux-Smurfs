import React, { Component } from 'react';
import AddSmurfForm from './components/AddSmurfForm';
import SmurfList from './components/SmurfList';
import {connect} from 'react-redux';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    console.log("If there's an error, it'll show here:", this.props.error)
    return (
      <div className="App">
        <h1>This is the Village!</h1>
        <AddSmurfForm />
        <SmurfList />
      </div>
    );
  }
}

const mapStateToProps = ({error}) => ({
  error
})

export default connect(mapStateToProps)(App);
