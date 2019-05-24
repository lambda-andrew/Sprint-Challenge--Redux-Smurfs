import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions'

class SmurfForm extends React.Component {
    state = {
        smurf: {
            name: '',
            age: '',
            height: '',
        }
    }

    handleChanges = e => {
        let value = e.target.value;
        if (e.target.name === 'age') {
          value = parseInt(value, 10);
        }
        this.setState({
            friend: {
              ...this.state.smurf,
              [e.target.name]: value
            }
        });
    };

    addSmurfs = e => {
        e.preventDefault()
        this.props.addSmurf(this.state.smurf)
        .then(() => {
            this.props.history.push('/')
        })
        this.setState({
            smurf: {
                name: '',
                age: '',
                height: '',
            }
        })
    }

    render() {
        return (
            <div className="smurfFormDiv">
                <h2>Add A New Smurf To The Smurf Village!</h2>
                <form onSubmit={this.addSmurfs}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={this.handleChanges}
                        value={this.state.smurf.name}
                    />
                    <input
                        type="text"
                        name="age"
                        placeholder="Age"
                        onChange={this.handleChanges}
                        value={this.state.smurf.age}
                    />
                    <input
                        type="text"
                        name="height"
                        placeholder="Height"
                        onChange={this.handleChanges}
                        value={this.state.smurf.height}
                    />
                    <button>Add A Smurf!</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    addingSmurf: state.addingSmurf
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm)