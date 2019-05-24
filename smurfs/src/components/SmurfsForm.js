import React from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';
import './SmurfForm.css';

class SmurfsForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    createSmurf = event => {
        event.preventDefault();
        this.props.addSmurf(this.state)
    }

    render() {
        return (
            <div  >
                <form className='smurfsForm'>
                    <p>NAME</p>
                    <input className='input'
                        onChange={this.handleChange}
                        placeholder='name'
                        value={this.state.name}
                        name='name'
                    />
                    <p>AGE</p>
                    <input className='input'
                        onChange={this.handleChange}
                        placeholder='age'
                        value={this.state.age}
                        name='age'
                    />
                    <p>HEIGHT</p>
                    <input className='input'
                        onChange={this.handleChange}
                        placeholder='height'
                        value={this.state.height}
                        name='height'
                    />
                    <button className='button'
                        type='submit'
                        onClick={(event) => this.createSmurf(event)}> ADD SMURF </button>
                </form>
            </div>
        )
    }
}

export default connect(
    null, { addSmurf })(SmurfsForm);