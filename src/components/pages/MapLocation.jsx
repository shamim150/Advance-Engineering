import React from 'react'
import Container from '../layer/Container'
import TitleHeader from '../layer/TitleHeader'

const MapLocation = () => {
  return (
    <Container className='text-center bg-[#F7F9FB] '>
        <TitleHeader headerText='260 Project in Bangladesh'/>
        <div className='flex justify-center items-center'>
        <img src="/map.png" alt="" />
        </div>
    </Container>
  )
}

export default MapLocation