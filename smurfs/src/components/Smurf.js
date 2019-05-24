import React from 'react';
import './Smurf.css';

class Smurf extends React.Component {
    render() {
        return (
            <div className='smurf'>
                <p>NAME: <strong>{this.props.smurf.name}</strong></p>
                <p>AGE:<strong> {this.props.smurf.age}</strong></p>
                <p>HEIGHT: <strong>{this.props.smurf.height}</strong></p>
            </div>
        )
    }
}

export default Smurf; 