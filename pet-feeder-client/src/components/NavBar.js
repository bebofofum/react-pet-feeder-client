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
      return loggedIn ? (  //seems to me all of our actual important links should be added in here
        <div className="flex md:flex items-center w-full md:w-full">
          <div className="order-1 md:order-2 md:w-auto md:flex items-center w-1/2 md:w-full">
            <NavLink 
              className="inline-block bg-gray-700 mx-1 px-4 py-3 rounded-md"
              activeClassName="text-green-500"
              to="/pets/new"
              exact
            >Add Pet</NavLink>
            <NavLink 
              className="inline-block bg-gray-700 mx-1 px-4 py-3 rounded-md"
              activeClassName="text-green-500"
              to="/owners/new"
              exact
            >Add Owner</NavLink>

          </div> 
          <div className="md:flex items-center order-3 md:order-1 ">
            <Logout />    
          </div>

        </div>
      ) : ( // then if they're not logged in they just see login or signup
        <div className="order-1 md:order-3 w-full flex flex-wrap items-center justifyorder-end mr-0 md:mr-4">
          <div className="auth md:flex items-center w-full md:w-full">
              <NavLink
              className="inline-block bg-transparent mx-1 text-gray-700 border border-gray-500 hover:bg-gray-700 hover:text-white px-4 py-3 rounded-md"
              activeClassName="text-green-500"
              to="/login"
              exact>
              Log In
            </NavLink>
            <NavLink
              className="inline-block bg-transparent mx-1 text-gray-700 border border-gray-500 hover:bg-gray-700 hover:text-white px-4 py-3 rounded-md"
              activeClassName="text-green-500"
              to="/signup"
              exact>
              Sign Up
            </NavLink> 
          </div>
          
        </div> 
      )
    } else {
      return null
    }
  }

  render(){
    return(
      <div>
        <nav className="flex w-full justify-between text-center bg-gray-200 text-white p-3 space-x-2">
          <div className="md:flex md:items-center md:w-auto order-3 md:order-1">
            <NavLink 
                className="inline-block bg-gray-700 mx-1 px-4 py-3  rounded-md"
                activeClassName="text-green-500"
                to="/"
                exact
              >Home</NavLink>
              <NavLink 
                className="inline-block bg-gray-700 mx-1 px-4 py-3 rounded-md"
                activeClassName="text-green-500"
                to="/owners/"
                exact
              >Owners</NavLink>
            </div>
            <div>{this.renderAuthLinks()}</div> 
        </nav>
      </div>
      
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



