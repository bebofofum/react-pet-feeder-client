import React, { Component } from 'react';
import FeedingList from '../components/FeedingList'
import FeedingListItem from '../components/FeedingListItem'
import { Link } from 'react-router-dom';



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
                <div className="bg-gray-200 rounded mb-4">
                    {this.state.feedings.map(feeding => 
                        <FeedingListItem feeding={feeding} key={feeding.id} />
                    )}
                </div>
                <Link 
                    className="rounded w-auto flex-2 text-gray-700 text-center bg-indigo-800 hover:bg-indigo-600 px-4 py-4 mt-7" 
                    to={`/pets/${this.state.pet.id}/feedings/new`}>
                    <button 
                    className="text-white capitalize text-m m-7 px-3 ">
                    Add a Feeding 
                    </button>
                </Link>


            </section>
        )
    }
}

export default PetShowContainer