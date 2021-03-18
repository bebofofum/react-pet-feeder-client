import React, { Component } from 'react'
import PetList from '../components/PetList'


class PetsContainer extends Component {

    state = {
        pets: [],
        loading: true
    }

    

    componentDidMount(){
        fetch("http://localhost:3001/pets", {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(petsJson => {
            console.log("Json return", petsJson)
            this.setState({
                pets: petsJson,
                loading: false
            })
        })

        
    }

    render(){
        return (
            <section className="max-w-2xl w-10/12 mx-auto mt-20">
                {this.state.loading ? "loading spinner" : <PetList pets={this.state.pets} /> }
            </section>
        )

    }
}

export default PetsContainer