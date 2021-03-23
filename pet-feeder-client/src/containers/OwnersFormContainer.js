import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createOwner } from '../actions/owners'


class OwnersFormContainer extends Component {
    state = {
        name: "",
        errors: {}
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();

        this.props.dispatchCreateOwner(this.state).then(ownerJson => {
                this.props.history.push('/owners')
        })
        .catch(errors => {
            console.log("these errors happened", errors)
            this.setState({
                errors: errors
            })
        })

        // fetch("http://localhost:3001/owners", {
        //     method: "post",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({owner: this.state})
        // })
        // .then(response => response.json())
        // .then(ownerJson => {
        //     console.log("adding this", ownerJson)
        //     this.props.history.push('/owners')
        // })
    }


    render(){
        return(
            <form className="max-w-2xl w-10/12 mx-auto mt-20 shadow-lg px-4 py-6" onSubmit={this.handleOnSubmit}>
                <h1 className="text-center text-2xl font-semibold pb-4">Add An Owner</h1>
                <fieldset >
                    <p className="text-red-400 h-8">{this.state.errors.name}</p>

                    <input 
                        className="w-full border p-4 mb-4 rounded-md"
                        type="text" 
                        name="name" 
                        onChange={this.handleOnChange}
                        value={this.state.name}
                        placeholder = "Owner Name" />
                </fieldset>
                <button 
                    type="submit"
                    className="w-full mt-6 bg-indigo-500 hover:bg-indigo-800 transition-all duration-200 text-white font-semibold p-3 rounded-md">
                    Add Owner
                </button>

            </form>
        )
    }
}

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreateOwner: (formData) => dispatch(createOwner(formData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnersFormContainer)