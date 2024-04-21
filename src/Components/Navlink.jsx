import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = () => {
    const isAuthenticated = localStorage.getItem('email');
  return (
    <nav className='navbar'>
      <Link to={'/counter'}>Counter</Link>
      <Link to={'/form'}>Form</Link>
      <Link to={'/editor'}>Text Editor</Link>     
      {isAuthenticated ? (
        <Link to={'/logout'}>Logout</Link>
      ): (
        <Link to={'/signin'}>Sign in with Google</Link>     
      )}     
    </nav>
  )
}

export default NavLink
