import React from 'react'
import OwnerDeleteButton from './OwnerDeleteButton'
import CustomButton from './CustomButton'

const OwnerListItem = ({owner}) => {
    return(
        <div>
        <div className="max-w-xl w-full p-4 my-3 flex md:flex-row flex-col space-x-3 bg-gray-200 rounded-lg">
            <div className="flex-1 pt-1">
                <li className="font-semibold text-lg tracking-wide" >{owner.name}</li>
            </div>
            <OwnerDeleteButton />
        </div>
        <div>
            <CustomButton
                text="Round Button"
                type="button"
                buttonStyle="rounded"
                handleClick={() => console.log("Clicked!")}
            />
            <CustomButton
                text="Outline Button"
                type="button"
                buttonStyle="outline"
                handleClick={() => console.log("Different Click!")}
            />

        </div>
        </div>
    )
}

export default OwnerListItem