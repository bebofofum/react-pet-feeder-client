import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/auth'

class Login extends Component {

    state={
        email: '',
        password: '',
        error: false
    }

    handleOnChange = (event) => {
       this.setState({
        [event.target.name]: event.target.value
       })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state
        this.props.dispatchUserLogin({ email, password })
        .then(() => this.props.history.push("/"))
        .catch(() => this.setState({
            error: true
        }))
    }


    render() {
        return(
            <form
            onSubmit={this.handleOnSubmit} 
            className="max-w-2xl w-10/12 mx-auto mt-20 shadow-lg px-4 py-6">
                <h1 className="text-center text-2xl font-semibold pb-4">Login for Household</h1>
                <p className='h-8 text-red-400'>{this.state.errors && "Invalid email or password"}</p>
                <fieldset>
                    <label
                        htmlFor='email'>Email:</label>
                    <input 
                        className="w-full border p-4 mb-4 rounded-md"
                        onChange={this.handleOnChange}
                        type='text'
                        name='email'
                        id='email'
                        placeholder="Email"
                        value={this.state.email}
                         />
                </fieldset>
                <fieldset>
                    <label
                        htmlFor='password'>
                        Password:
                    </label>
                    <input 
                        className="w-full border p-4 mb-4 rounded-md"
                        onChange={this.handleOnChange}
                        type='password'
                        name='password'
                        id='password'
                        value={this.state.password}
                        placeholder="Password"/>
                </fieldset>
                <button
                    type="submit"
                    className="w-full mt-6 bg-indigo-500 hover:bg-indigo-800 transition-all duration-200 text-white font-semibold p-3 rounded-md">
                    Log In
                </button>

            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatchUserLogin: (userInfo) => dispatch(userLogin(userInfo))
    }  
}


export default connect(null, mapDispatchToProps)(Login)