import React from 'react'
import { Outlet } from 'react-router-dom'
// import Haeder from '../Haeder'
import Footer from '../Footer'
import { Navbar } from '../Navbar'

const RootLayOut = () => {
  return (
    <div>
        <Navbar/> 
 

        <Outlet/>

       

        <Footer/> 
    </div>
  )
}

export default RootLayOut