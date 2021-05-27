import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../actions/pets';
import Loader from '../components/Loader';
import PetList from '../components/PetList'



class PetsContainer extends Component {

    // state = {
    //     pets: [],
    //     loading: true
    // }

    // Above state is no longer needed because it's being provided as props now through the MapStatetoProps function below

    

    componentDidMount(){
        this.props.fetchPets();
        // Replaced the below fetch request with the returned fetchPets function mapped in MapDispatchtoProps
        
        // fetch("http://localhost:3001/pets", {
        //     method: "get",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response => response.json())
        // .then(petsJson => {
        //     console.log("Json return", petsJson)
        //     this.setState({
        //         pets: petsJson,
        //         loading: false
        //     })
        // })
        
    }

    render(){
        return (
            <section className="max-w-2xl w-10/12 mx-auto mt-20">
                {this.props.loadingState !== "successful" ? 
                (<Loader />) :
                (<PetList pets={this.props.pets} />) }
            </section>
        )

    }
}


const mapStateToProps = (state) => {
    return {
        pets: state.pets.list,
        loadingState: state.pets.loadingState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPets: () => dispatch(fetchPets())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PetsContainer)