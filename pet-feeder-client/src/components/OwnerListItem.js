import React from 'react'

const OwnerListItem = ({owner}) => {
    return(
        <div className="bg-gray-200 rounded-lg">
            <li className="text-gray-600 text-l font-bold m-3 px-3 p-3" >{owner.name}</li>
        </div>
    )
}

export default OwnerListItem