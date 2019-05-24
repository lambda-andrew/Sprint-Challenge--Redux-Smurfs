import React from 'react';
import {connect} from 'react-redux';
import {addSmurfs} from '../actions';

class AddSmurfForm extends React.Component {
    state = {
        addingBool: false,
        newSmurf: {
            name: "",
            age: "",
            height: "",
        }
    }

    handleChanges = e => {
        this.setState({
            newSmurf: {
                ...this.state.newSmurf,
                [e.target.name]: e.target.value
            }
        })
    }

    addSmurf = e => {
        e.preventDefault();
        this.props.addSmurfs(this.state.newSmurf);
        this.setState({
            newSmurf: {
                name: "",
                age: "",
                height: "",
            },
            addingBool: false,
        })
    }

    toggleAdd = e => {
        e.preventDefault();
        this.setState({
            addingBool: true
        })
    }

    render(){
    if (!this.state.addingBool) {
        return (
        <button onClick={this.toggleAdd}>Click to add your Smurf!</button>
        )
    }
    return(
        <div>
            <h2>Add Your Smurf!</h2>
            <form onSubmit={this.addSmurf}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Your Smurf Name"
                    onChange={this.handleChanges}
                    value={this.state.newSmurf.name}
                />
                <input 
                    type="text"
                    name="age"
                    placeholder="Your Smurf Age"
                    onChange={this.handleChanges}
                    value={this.state.newSmurf.age}
                />
                <input 
                    type="text"
                    name="height"
                    placeholder="Your Smurf height"
                    onChange={this.handleChanges}
                    value={this.state.newSmurf.height}
                />
                <button type="submit">Click to add your Smurf!</button>
            </form>
        </div>
    )
    }
}

const mapStateToProps = ({addingSmurfs, smurfs}) => ({
    smurfs, addingSmurfs
})


export default connect(mapStateToProps, {addSmurfs})(AddSmurfForm);