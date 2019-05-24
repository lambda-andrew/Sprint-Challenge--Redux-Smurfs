import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getSmurfs, deleteSmurf } from '../actions'

import img from './smurfs-cartoon.jpg'


class SmurfList extends React.Component {
    state = {
        deletingSmurf: null,
      };
    componentDidMount() {
        this.props.getSmurfs()
    }

    deleteSmurfs = id => {
        this.setState({ deletingSmurfId: id})
        this.props.deleteSmurf(id)
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
            <div className="SmurfsDiv">
                <img src={img} alt='smurfs cartoon'/>
                <div className='smurfsListDiv'>
                    <h2>Welcome to Smurf Village!</h2>
                    <h3>Meet The Smurfs: </h3>
                    {this.props.smurfs.map(smurf => {
                        return (
                            <div className="smurfCard" key={smurf.id}>
                                <i
                                    class="fas fa-times"
                                    onClick={() => this.deleteSmurfs(smurf.id)}
                                />
                                <h4>{smurf.name}</h4>
                                <p>Age: {smurf.age}</p>
                                <p>Height: {smurf.height}</p>
                                {this.props.deletingSmurf &&
                                this.state.deletingSmurfId === smurf.id && (
                                    <p>Deleting Smurf From The Smurf Village... </p>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    deletingSmurf: state.deletingSmurf
  });

  export default withRouter(connect(mapStateToProps, { getSmurfs, deleteSmurf })(SmurfList))
