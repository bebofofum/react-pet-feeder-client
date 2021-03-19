import React, { Component } from 'react'

class OwnersFormContainer extends Component {
    state = {
        name: "",
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();


        fetch("http://localhost:3001/owners", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({owner: this.state})
        })
        .then(response => response.json())
        .then(ownerJson => {
            console.log("adding this", ownerJson)
            this.props.history.push('/owners')
        })
    }


    render(){
        return(
            <form className="max-w-2xl w-10/12 mx-auto mt-20 shadow-lg px-4 py-6" onSubmit={this.handleOnSubmit}>
                <h1 className="text-center text-2xl font-semibold pb-4">Add An Owner</h1>
                <fieldset className="flex space-x-5 mt-3" >
                    <input 
                        className="w-full border p-2 py-3 rounded-md"
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

export default OwnersFormContainer