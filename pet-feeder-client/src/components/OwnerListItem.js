import React from 'react'

const OwnerListItem = ({owner}) => {
    return(
        <div className="max-w-xl w-full p-4 my-3 flex md:flex-row flex-col space-x-3 bg-gray-200 rounded-lg">
            <div className="flex-1 pt-1">
                <li className="font-semibold text-lg tracking-wide" >{owner.name}</li>
            </div>
            <div className="md:px-2 mt-3 md:mt-0 items-center flex">
                <button className="bg-blue-500 text-white font-bold px-4 py-2 text-sm uppercase rounded tracking-wider focus:outline-none hover:bg-blue-600">DELETE OWNER</button>
            </div>
        </div>
    )
}

export default OwnerListItem