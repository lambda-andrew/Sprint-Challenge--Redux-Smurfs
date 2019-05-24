import React from 'react';
import {connect} from 'react-redux';
import {getSmurfs, deleteSmurfs, editSmurfs} from '../actions';
import EditSmurfForm from './EditSmurfForm';

class SmurfList extends React.Component {
    componentDidMount(){
        this.props.getSmurfs();
    }

    deleteSmurf = id => {
        this.props.deleteSmurfs(id)
    }

    editSmurf = (e, smurf) => {
        e.preventDefault();
        this.props.editSmurfs(smurf)
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
            <EditSmurfForm smurfProps={smurf} editSmurf={this.editSmurf}/>
            <button onClick={() => {this.deleteSmurf(smurf.id)}}>Delete Smurf</button>
        </div>
        )
        })}
      </div>
    )
    }
}

const mapStateToProps = ({smurfs, fetchingSmurfs, editingSmurfs, deletingSmurfs}) => ({
    smurfs, fetchingSmurfs, editingSmurfs, deletingSmurfs
})

export default connect(mapStateToProps, {getSmurfs, deleteSmurfs, editSmurfs})(SmurfList);