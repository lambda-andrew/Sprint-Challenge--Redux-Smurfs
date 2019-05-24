import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';
import './SmurfsList.css';

class SmurfsList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {
        return (
            <p className='list'>{this.props.smurfs.map(smurf => <Smurf smurf={smurf} />)}</p>
        )
    }
}

const mapStateToProps = (state) => ({
    smurfs: state.smurfs
})

export default connect(
    mapStateToProps, { getSmurfs })(SmurfsList);