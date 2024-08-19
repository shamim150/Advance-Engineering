import React from 'react'
import Container from '../layer/Container'
import TitleHeader from '../layer/TitleHeader'

const MapLocation = () => {
  return (
    <Container className='text-center'>
        <TitleHeader headerText='260 Project in Bangladesh'/>
        <div className='flex justify-center items-center'>
        <img src="/bangladesh-map.webp" alt="" />
        </div>
    </Container>
  )
}

export default MapLocation