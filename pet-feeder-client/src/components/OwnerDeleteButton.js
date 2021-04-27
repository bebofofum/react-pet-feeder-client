import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeOwner } from '../actions/owners';


class OwnerDeleteButton extends Component {

    state = {
        status: ""
    }

    handleClick = () => {
        let setOwnerId = this.props.ownerId
        console.log("clicking this, Owner id =", setOwnerId)
        this.props.removeOwner(setOwnerId);

        // fetch(`http://localhost:3001/owners/${setOwnerId}`, {
        //     method: 'DELETE',
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json",
        //     }
        // })
        // .then(() => this.setState({ status: 'Delete successful' }))

    }

    render() {
        return (
            <div className="md:px-2 mt-3 md:mt-0 items-center flex">
                <button onClick={this.handleClick} className="bg-blue-500 text-white font-bold px-4 py-2 text-sm uppercase rounded tracking-wider focus:outline-none hover:bg-blue-600">DELETE OWNER</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeOwner: (id) => dispatch(removeOwner(id))
    }
}

export default connect(null, mapDispatchToProps)(OwnerDeleteButton)