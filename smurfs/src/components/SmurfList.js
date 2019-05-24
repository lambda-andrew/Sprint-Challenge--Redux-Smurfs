import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions'

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {
        console.log(this.props);
        if (this.props.fetchingSmurfs)
            return(
                <div className='fetchingSmurfsDiv'>
                    <h2>Please Wait While We Find The Smurfs....</h2>
                </div>
            )
        return (
            <div className='smurfsListDiv'>
                <h2>Welcome to Smurf Village!</h2>
                <h3>Meet The Smurfs: </h3>
                {this.props.smurfs.map(smurf => {
                    return (
                        <div className="SmurfCard" key={smurf.id}>
                            <h4>{smurf.name}</h4>
                            <p>{smurf.age}</p>
                            <p>{smurf.height}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  });

  export default connect(mapStateToProps, { getSmurfs })(SmurfList)
