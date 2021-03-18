import React from 'react'

const PetListItem = ({pet}) => {
    return(
        <>
            <li className="" >{pet.name}</li>
            <li className="" >{pet.species}</li>
        </>
    )

}

export default PetListItem