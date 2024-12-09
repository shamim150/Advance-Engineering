import React from 'react'


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayOut from './components/layer/RootLayOut';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import AboutUs from './components/pages/AboutUs';
import Products from './components/pages/Products';
import AuthorizedSales from './components/pages/AuthorizedSales';
import SolutionService from './components/pages/SolutionService';
import Gallery from './components/pages/Gallery';
import KeyPersonSaleService from './components/pages/KeyPersonSaleService';
import Carrier from './components/pages/Carrier';
import JobDetails from './components/pages/JobDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>

      <Route index element = {<Home/>}/>
      <Route path='/aboutus' element = {<AboutUs/>}> </Route>
      <Route path='/products' element = {<Products/>}> </Route>
      <Route path='/authorized' element = {<AuthorizedSales/>}> </Route>
      <Route path='/solutionservice' element = {<SolutionService/>}> </Route>
      <Route path='/gallery' element = {<Gallery/>}> </Route>
      <Route path='/keyperson' element = {<KeyPersonSaleService/>}> </Route>
      <Route path='/contact' element = {<Contact/>}> </Route>
      <Route path='/carrier' element = {<Carrier/>}> </Route>
      <Route path='/carrier/:id' element = {<JobDetails/>}> </Route>
      
      
    </Route>
  )
);





const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App