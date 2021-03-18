import React from 'react'

const PetListItem = ({pet}) => {
    return(
        <div className="bg-green-200 rounded-lg">
            <li className="text-purple-600 capitalize text-xl font-bold m-2 px-3 pt-3" >{pet.name}</li>
            <li className="text-gray-600 pb-3 m-2 px-3 mb-1" >{pet.species}</li>
        </div>
    )

}

export default PetListItem