import React from 'react'

const FeedingListItem = ({feeding}) => {
    return(
        <div className="flex shadow-lg p-5">
            <div className="w-1/2 ">            
                <p className="text-gray-600 p-1" >Description: {feeding.description}</p>
            </div>
            <div className="w-1/2">
                <p className="text-gray-600 p-1" >Category: {feeding.category}</p>
            </div>

        </div>

    )
}

export default FeedingListItem