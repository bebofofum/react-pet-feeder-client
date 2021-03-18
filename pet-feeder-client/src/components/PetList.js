import React from 'react'
import PetListItem from './PetListItem'

const PetList = ({pets}) => {
    return(
        <div>
            <h1>Pets</h1>
            <ul>{pets.map(pet => <PetListItem key={pet.id} pet={pet} />)}</ul>
        </div>
        
    )

}

export default PetList