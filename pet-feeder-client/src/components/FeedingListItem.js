import React from 'react'

const FeedingListItem = ({feeding}) => {
    return(
        <div className="">
            <p className="text-gray-600 text-l m-3 px-1 p-3" >Description: {feeding.description}</p>
            <p className="text-gray-600 text-l m-3 px-1 p-3" >Category: {feeding.category}</p>

        </div>

    )
}

export default FeedingListItem