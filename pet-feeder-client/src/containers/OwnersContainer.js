import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOwners } from '../actions/owners';
import Loader from '../components/Loader';
import OwnerList from '../components/OwnerList'



class OwnersContainer extends Component {

    // state = {
    //     owners: [],
    //     loading: true
    // }

    // Above state is no longer needed because it's being provided as props now through the MapStatetoProps function below


    componentDidMount(){
        this.props.fetchOwners();
        // Replaced the below fetch request with the returned fetchOwners function mapped in MapDispatchtoProps



        // fetch("http://localhost:3001/owners", {
        //     method: "get",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response => response.json())
        // .then(ownersJson => {
        //     console.log("ownerJson", ownersJson)
        //     this.setState({
        //         owners: ownersJson,
        //         loading: false
        //     })
        // })

    }

    render(){
        return(
            <section className="max-w-2xl w-10/12 mx-auto mt-20">
                {this.props.loadingState === 'inProgress' ? 
                (<Loader />) :
                (<OwnerList owners={this.props.owners} />) }
            </section>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        // These keys get assigned value in the reducer. The reducer gets utlitized in the rootreducer
        owners: state.owners.ownerList,
        loadingState: state.owners.loadingOwnerState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOwners: () => dispatch(fetchOwners()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(OwnersContainer)