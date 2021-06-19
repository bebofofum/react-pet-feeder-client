import React from 'react'
import { Link } from 'react-router-dom';

const PetListItem = ({pet}) => {
    // const BASE_URL = 'http://localhost:300/'
    return(
        <div className="bg-green-200 max-w-xl w-full rounded-lg shadow-lg p-4 flex md:flex-row flex-col">
            <div className="flex-1">
                <li className="text-purple-600 capitalize text-xl font-bold m-2 px-3 pt-3" >{pet.name}</li>
                <li className="text-gray-600 pb-3 m-2 px-3 mb-1" >{pet.species}</li>     
            </div>
            <div className="md:px-2 mt-3 md:mt-0 items-center flex">
                <Link 
                    className="inline-block bg-indigo-800 border-solid border-2 border-light-blue-500 mx-5 mb-4 px-2 py-2 rounded-md" 
                    to={`/pets/${pet.id}/`}>
                        <button 
                        className="text-white capitalize text-m m-2 px-3 ">
                        See Feedings 
                        </button>
                </Link>
            </div>
            
        </div>
    )

}

export default PetListItem