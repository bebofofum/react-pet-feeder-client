import React, { Component } from 'react';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logout from './auth/Logout';
import { checkAuth } from '../actions/auth';

class NavBar extends Component {

  //we made the Navbar a class component to make use of componentDidMount to use our checkAuth action
  //we can refactor this using Hooks later.

  componentDidMount(){
    this.props.dispatchCheckAuth()
  }

  //we moved our conditional logic of showing certain buttons based on token response here. we invoke this in our render() function below
  renderAuthLinks() {  
    const { authCheck, loggedIn, currentUser } = this.props; //now we destructure our store state provide via our mapStateToProps and assign them to variables here
    if (authCheck) {
      return loggedIn ? (
        <div>
          {currentUser.email}
          <Logout />    
        </div>
      ) : (
        <div>
          <NavLink
            className="inline-block bg-gray-700 px-4 py-3 rounded-md"
            activeClassName="text-green-500"
            to="/login"
            exact>
            Log In
          </NavLink>
          <NavLink
            className="inline-block bg-gray-700 px-4 py-3 rounded-md"
            activeClassName="text-green-500"
            to="/signup"
            exact>
            Sign Up
          </NavLink> 
        </div> 
      )
    } else {
      return null
    }
  }

  render(){
    return(
      <nav className="text-center bg-gray-200 text-white p-3 space-x-2">
        <div>
          <NavLink 
              className="inline-block bg-gray-700 px-4 py-3 rounded-md"
              activeClassName="text-green-500"
              to="/"
              exact
            >Home</NavLink>
            <NavLink 
              className="inline-block bg-gray-700 px-4 py-3 rounded-md"
              activeClassName="text-green-500"
              to="/pets/new"
              exact
            >Add Pet</NavLink>
            <NavLink 
              className="inline-block bg-gray-700 px-4 py-3 rounded-md"
              activeClassName="text-green-500"
              to="/owners/"
              exact
            >Owners</NavLink>
            <NavLink 
              className="inline-block bg-gray-700 px-4 py-3 rounded-md"
              activeClassName="text-green-500"
              to="/owners/new"
              exact
            >Add Owner</NavLink>
          </div>

          <div>
            <NavLink
              className="inline-block bg-gray-700 px-4 py-3 rounded-md"
              activeClassName="text-green-500"
              to="/protected_route"
              exact>
              Protected Example
            </NavLink>
          </div>
          <div>{this.renderAuthLinks()}</div> 
      </nav>
    )
  }

}

//had problems with authChecked returning undefined, discovered my reducer uses authCheck not authChecked!
const mapStateToProps = ( { auth: { authCheck, loggedIn, currentUser } }) => {
  return{
    authCheck: authCheck,
    loggedIn: loggedIn,
    currentUser //this is syntatic sugar for the above b/c the names are same
  }
}

const mapDispatchToProps = (dispatch) => { 
  return{
    dispatchCheckAuth: () => dispatch(checkAuth())
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);



