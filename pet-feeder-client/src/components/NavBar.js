import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="text-center bg-gray-200 text-white p-3 space-x-2">
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
  );
};

export default NavBar;



