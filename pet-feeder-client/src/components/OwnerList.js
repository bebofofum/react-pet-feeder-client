import React from 'react'
import OwnerListItem from './OwnerListItem'

const OwnerList = ({owners}) => {
    return(
    <div>
        <h1 className="text-3xl font-semibold pb-4 text-green-700">Owners</h1>
        <ul className="">{owners.map(owner => <OwnerListItem key={owner.id} owner={owner} />)}</ul>
    </div>

    )
}

export default OwnerList
