import React from 'react'
import {NavLink, Outlet} from 'react-router-dom';

function Navbar() {

  // ifActiveNavbar =()=>{

  // }
  return (
   <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/jobs"> All jobs</NavLink>
    <NavLink to="/contact">Contact Us</NavLink>
    <NavLink to="/about">About Us</NavLink>

   </>
  )
}

export default Navbar