import React from 'react';

class EditSmurfForm extends React.Component {
    state = {
        editedSmurf: this.props.smurfProps,
        editingBool: false
    }

    handleChanges = e => {
        this.setState({
            editedSmurf: {
            ...this.state.editedSmurf,
            [e.target.name]: e.target.value
            }
        })
    }

    editSmurf = e => {
        this.props.editSmurf(e, this.state.editedSmurf)
        this.setState({
            editingBool: false
        })
    }

    toggleEdit = e => {
        e.preventDefault();
        this.setState({
            editingBool: true
        })
    }

    render(){
        if (!this.state.editingBool) {
            return (
                <div>
                    <button onClick={this.toggleEdit}>Edit Smurf!</button>
                </div>
            )
        }
        return(
            <div>
                <form onSubmit={this.editSmurf}>
                    <input
                    name="name"
                    type="text"
                    value={this.state.editedSmurf.name}
                    onChange={this.handleChanges}
                    />
                    <input
                    name="age"
                    type="text"
                    value={this.state.editedSmurf.age}
                    onChange={this.handleChanges}
                    />
                    <input
                    name="height"
                    type="text"
                    value={this.state.editedSmurf.height}
                    onChange={this.handleChanges}
                    />
                    <button type="submit">Edit Smurf!</button>
                </form>
            </div>
        )
    }
}

export default EditSmurfForm;