import React from 'react';

class EditSmurfForm extends React.Component {
    state = {
        editedSmurf: this.props.smurfProps
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
    }

    render(){
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