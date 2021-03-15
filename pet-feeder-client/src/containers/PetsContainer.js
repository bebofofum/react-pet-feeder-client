import React, { Component } from 'react'
import PetList from '../components/PetList'


class PetsContainer extends Component {

    state = {
        pets: [],
        loading: true
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                pets: [{
                    id: 1,
                    name: 'Fin',
                    type: 'Bearded Dragon'
                }, {
                    id: 2,
                    name: 'Manda',
                    type: 'Axolotyl'
                }],
                loading: false
            })

        }, 1000)
        
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