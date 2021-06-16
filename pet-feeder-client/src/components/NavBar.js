import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavBar = ( { authChecked, loggedIn, currentUser }) => {
  return (
    <div className="text-center bg-gray-200 text-white p-3 space-x-2">
     
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

      
    </div>
  );
};

const mapStateToProps = ( { auth: { authChecked, loggedIn, currentUser } }) => {
  return{
    authChecked: authChecked,
    loggedIn: loggedIn,
    currentUser //this is syntatic sugar for the above b/c the names are same
  }


}

export default connect(mapStateToProps)(NavBar);



