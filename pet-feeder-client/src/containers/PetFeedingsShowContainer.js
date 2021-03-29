import React, { Component } from 'react';
import FeedingList from '../components/FeedingList'
import FeedingListItem from '../components/FeedingListItem'


class PetShowContainer extends Component {

    state = {
        pet: {},
        feedings: [],
        loading: true
    }

    componentDidMount(){
        const petId = this.props.match.params.pet_id
        fetch(`http://localhost:3001/pets/${petId}`)
        .then(response => response.json())
        .then(({pet, feedings}) => {
            this.setState({
                pet: pet,
                feedings: feedings,
                loading: false
            })
            console.log("the feedings are:", feedings)
        })
    }

    render() {
        if(this.state.loading){
            return <div>Loading Spinner</div>
        }
        return(
            <section className="max-w-2xl w-10/12 mx-auto mt-20">
                <h1 className="text-3xl font-semibold pb-4 text-green-700">{this.state.pet.name}'s Feedings</h1>
                {this.state.feedings.map(feeding => <FeedingListItem feeding={feeding} />
                )}

            </section>
        )
    }
}

export default PetShowContainer