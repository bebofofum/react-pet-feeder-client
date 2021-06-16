import React, { Component} from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../../actions/auth';

class Signup extends Component {

    //setting an initial state to handle user email, password and errors

    state = {
        email: '',
        password: '',
        errors: {  //errors contains object with key status that also contains object
            status: {
                message: ''
            }
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value  //takes event.target name from input name, adds value from input value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state
        this.props.dispatchUserSignUp({ email, password })
        .then(userJson => this.props.history.push("/"))
        .catch((errors) => {
            this.setState({
                errors: errors
            })
        })

    }

    render() {
        return (
            <form 
            className="max-w-2xl w-10/12 mx-auto mt-20 shadow-lg px-4 py-6"
            onSubmit={this.handleOnSubmit}>
                <h1 className="text-center text-2xl font-semibold pb-4">Create a Household</h1>
                <p className='h-8 text-red-400'>{this.state.errors.status.message}</p>
                <fieldset>
                    <label 
                        htmlFor='email'>Email:</label>
                    <input 
                        className="w-full border p-4 mb-4 rounded-md"
                        onChange={this.handleOnChange}
                        type='text'
                        name='email'
                        id='email' 
                        value={this.state.email}
                        placeholder = "Email" 
                    />
                </fieldset>
                <fieldset>
                    <label
                        htmlFor="password">Password:</label>
                    <input 
                        className="w-full border p-4 mb-4 rounded-md"
                        onChange={this.handleOnChange} 
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password} 
                        placeholder = "Password" 
                        />
                </fieldset>
                <button
                    type="submit"
                    className="w-full mt-6 bg-indigo-500 hover:bg-indigo-800 transition-all duration-200 text-white font-semibold p-3 rounded-md">
                    Sign Up
                </button>

            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => { //we pass dispatch function in as arguement to use in our callback below
    return {
        dispatchUserSignUp: (userInfo) => dispatch(signUpUser(userInfo)) //passed in dispatch as thunk
    }
}

export default connect(null, mapDispatchToProps)(Signup)