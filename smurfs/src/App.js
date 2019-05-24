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
  state = {
    credentials: {
      username: "",
      password: "",
    }
  }

  login = e => {
    e.preventDefault();
    const user = this.state.credentials.username
    localStorage.setItem("user", user)
    this.setState({
      credentials: {
        username: "",
        password: "",
      }
    })
  }

  logout = e => {
    e.preventDefault();
    localStorage.removeItem("user")
    this.setState({
      credentials: {
        username: "",
        password: "",
      }
    }
    )
  }

  handleChanges = e => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    })
}

  render() {
    console.log("If there's an error, it'll show here:", this.props.error)
    if (!localStorage.getItem("user")) {
      return (
        <div>
          <form onSubmit={this.login}>
            <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChanges}
            />
            <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChanges}
            />
            <button type="submit">Click to Log In!</button>
          </form>
        </div>
      )
    }
    return (
      <div className="App">
        <h1>This is the Village!</h1>
        <button onClick={this.logout}>Click to Log Out!</button><br></br>
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
