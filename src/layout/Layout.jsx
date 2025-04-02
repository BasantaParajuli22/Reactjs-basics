import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


function Layout() {
  return (
   <>
    <Navbar />
    <Outlet /> {/* This is where the child routes will be rendered */}
    <Footer />
   </>
  )
}

export default Layout