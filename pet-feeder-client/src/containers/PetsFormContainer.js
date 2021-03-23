import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPet } from '../actions/pets';

class PetsFormContainer extends Component {

    state = {
        name: "",
        species: "",
        errors: {}
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        this.props.dispatchCreatePet(this.state).then(petJson => {
            this.props.history.push('/')
        })
        .catch(errors => {
            console.log("these errors happened", errors)
            this.setState({
                errors: errors
            })
        })
    }



    render(){
        return(
            <form className="max-w-2xl w-10/12 mx-auto mt-20 shadow-lg px-4 py-6" onSubmit={this.handleSubmit}>
                <h1 className="text-center text-2xl font-semibold pb-4">Add Your Pet</h1>
                <div className="mt-3" >
                    <p className="text-red-400 h-8">{this.state.errors.name}</p>

                    <input 
                        className="border p-2 py-3 mb-3 w-full rounded-md"
                        onChange={this.handleOnChange}
                        type="text" 
                        name="name" 
                        value={this.state.name}
                        placeholder = "Your Pet's Name" />
                    <input 
                        className="border p-2 py-3 w-full  rounded-md"
                        onChange={this.handleOnChange}
                        type="text" 
                        name="species" 
                        value={this.state.species}
                        placeholder = "Your Pet's Species" />
                </div>

                <button 
                    type="submit"
                    className="w-full mt-6 bg-indigo-500 hover:bg-indigo-800 transition-all duration-200 text-white font-semibold p-3 rounded-md">
                    Add Pet
                </button>


            </form>
        )
    }


}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreatePet: (formData) => dispatch(createPet(formData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PetsFormContainer)