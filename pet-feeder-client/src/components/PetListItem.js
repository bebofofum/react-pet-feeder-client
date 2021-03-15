import React from 'react'

const PetListItem = ({pet}) => {
    return(
        <>
            <li className="" key={pet.id} >{pet.name}</li>
            <li className="" key={pet.id} >{pet.type}</li>
        </>
    )

}

export default PetListItem