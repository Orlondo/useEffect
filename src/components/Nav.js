import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <NavLink style={{ margin: '0 10px' }} to="/">Home</NavLink>
      <NavLink style={{ margin: '0 10px' }} to="/users">Users</NavLink>
      <NavLink style={{ margin: '0 10px' }} to="/another-page">Another Page</NavLink>
    </div>
  )
}

export default Nav;