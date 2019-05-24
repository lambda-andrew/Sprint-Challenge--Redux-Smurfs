import React from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';

class SmurfList extends React.Component {
    componentDidMount(){
        this.props.getSmurfs();
    }

    render(){
    if (this.props.fetchingSmurfs){
        return(
            <h3>Gathering smurfs!</h3>
        )
    }
    return(
        <div>
        <h1>List of Smurfs:</h1>
        {this.props.smurfs.map(smurf => {
        return (
        <div key={smurf.id}>
            <h2>{smurf.name}</h2>
            <h3>{smurf.age}</h3>
            <h3>{smurf.height}</h3>
        </div>
        )
        })}
      </div>
    )
    }
}

const mapStateToProps = ({smurfs, fetchingSmurfs}) => ({
    smurfs, fetchingSmurfs
})

export default connect(mapStateToProps, {getSmurfs})(SmurfList);