import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="text-center bg-gray-200 text-green-700 p-3">
      <NavLink 
          className="inline-block px-3 "
          activeClassName="text-green-500"
          to="/"
          exact
        >Home</NavLink>
         <NavLink 
          className="inline-block px-3 "
          activeClassName="text-green-500"
          to="/pets/new"
          exact
        >Add Pet</NavLink>
      
    </div>
  );
};

export default NavBar;



