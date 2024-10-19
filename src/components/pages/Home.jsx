import React from 'react'
import Banner from '../Banner'
import OurJourney from '../OurJourney'
import WorldLeader from '../WorldLeader'
import ConnectWith from './ConnectWith'
import MapLocation from './MapLocation'
import OurClients from './OurClients'

const Home = () => {
  return (

    <div className='bg-[#F7F9FB] '>
    <Banner/>
    <OurJourney/>
    {/* <BestSeller/> */}
    {/* <Add2/> */}
    {/* <SpecialOffer/> */}
    <WorldLeader/>
    <ConnectWith/>
    <MapLocation/>
    <OurClients/>

  
    
    

    </div>



  )
}

export default Home