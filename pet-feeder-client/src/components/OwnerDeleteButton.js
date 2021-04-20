import React, { Component } from 'react';

class OwnerDeleteButton extends Component {
    render() {
        return (
            <div className="md:px-2 mt-3 md:mt-0 items-center flex">
                <button className="bg-blue-500 text-white font-bold px-4 py-2 text-sm uppercase rounded tracking-wider focus:outline-none hover:bg-blue-600">DELETE OWNER</button>
            </div>
        )
    }
}

export default OwnerDeleteButton