import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getSmurf, addSmurf } from '../actions'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    newSmurf: {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    this.props.getSmurf();
  }

  handleChanges = e => {
    e.persist();
    this.setState(prevState => ({ 
      newSmurf: {
        ...prevState.newSmurf,
        [e.target.name]: e.target.value 
      }
    }));
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
    this.setState({
      newSmurf: {
        name: '',
        age: '',
        height: ''
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div>
          <ul>{this.props.smurfs.map(smurf => {
            return <li>{smurf.name}</li>
          })}</ul>
        </div>
        <div>
          <form onSubmit={this.addSmurf}>
            <input value={this.state.newSmurf.name} name='name' onChange={this.handleChanges} placeholder='Name'/>
            <input value={this.state.newSmurf.age} name='age' onChange={this.handleChanges} placeholder='Age'/>
            <input value={this.state.newSmurf.height} name='height' onChange={this.handleChanges} placeholder='Height'/>
            <button>Add new smurf</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})

export default connect( mapStateToProps, {getSmurf, addSmurf})(App);
