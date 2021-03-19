import React, { Component } from 'react'

class NewFeedingContainer extends Component {

    state = {
        description: "",
        category: "",
        completed: false
    }

    handleOnChange = (e) => {
        
        const target = e.target;
        const name = target.name
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log(value)

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const petId = this.props.match.params.pet_id

        fetch("http://localhost:3001/feedings", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({feeding: this.state, pet_id: petId})
        })
        .then(response => response.json())
        .then(feedingJson => {
            console.log(feedingJson)
        })




    }

    render(){
        return(
            <form
                onSubmit={this.handleSubmit} 
                className="max-w-2xl w-10/12 mx-auto mt-20 shadow-lg px-4 py-6">
                <h1 className="text-center text-2xl font-semibold pb-4">Add a Feeding</h1>

                <fieldset className="mt-3">
                    <label 
                        htmlFor="description"
                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Details</label>
                    <textarea
                        rows="3"
                        className="w-full border p-2 py-3 w-1/2 rounded-md"
                        onChange={this.handleOnChange}
                        name="description"
                        id="description"
                        value={this.state.description}
                        placeholder="Feeding Details" 
                    ></textarea>
                </fieldset>
                <fieldset className="flex space-x-5 mt-3">
                    <label 
                        htmlFor="category"
                        className="block">Select a Category</label>
                    <select 
                        name="category"
                        value={this.state.category}
                        onChange={this.handleOnChange}
                        id="category">
                            <option value="Morning">Morning</option>
                            <option value="Evening">Evening</option>
                            <option value="Special">Special</option>
                    </select>

                </fieldset>
                <fieldset className="mt-3">
                    <label 
                        htmlFor="completed" 
                        className="block">Completed?</label>
                    <input 
                        name="completed"
                        type="checkbox"
                        id="completed"
                        checked={this.state.completed}
                        onChange={this.handleOnChange}
                        />
                </fieldset>
                <button 
                    type="submit"
                    className="w-full mt-6 bg-indigo-500 hover:bg-indigo-800 transition-all duration-200 text-white font-semibold p-3 rounded-md">
                    Add Feeding
                </button>



            </form>
        )
    }

}

export default NewFeedingContainer