import React, { Component } from 'react'

class PetsFormContainer extends Component {

    state = {
        name: "",
        species: ""
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3001/pets", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({pet: this.state})
        })
        .then(response => response.json())
        .then(petJson => {
            this.props.history.push('/')
        })


    }



    render(){
        return(
            <form className="max-w-2xl w-10/12 mx-auto mt-20 shadow-lg px-4 py-6" onSubmit={this.handleSubmit}>
                <h1 className="text-center text-2xl font-semibold pb-4">Add Your Pet</h1>
                <div className="flex space-x-5 mt-3" >
                    <input 
                        className="border p-2 py-3 w-1/2 rounded-md"
                        onChange={this.handleOnChange}
                        type="text" 
                        name="name" 
                        value={this.state.name}
                        placeholder = "Your Pet's Name" />
                    <input 
                        className="border p-2 py-3 w-1/2 rounded-md"
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

export default PetsFormContainer