import React from 'react'
import Container from './layer/Container'
import TitleHeader from './layer/TitleHeader'
// import ProductItem from './layer/ProductItem'

const WorldLeader = () => {
  return (
    <div>
        <Container className='mb-10 bg-[#F7F9FB] '>
            <TitleHeader className='my-12 md:text-[35px] leading-snug text-sm text-center' headerText='World Leaders in Puddy Process Excellence Latest Innovation, Quality Execution Grain/Puddy Processing Machine.' />
            <p className='text-center mb-4 text-base'>A puddy machine, also known as a putty machine, is used for mixing, preparing, and applying wall putty. It is commonly used in construction and painting for creating a smooth surface before painting. The machine ensures uniform consistency in the putty, reducing manual effort and time. It typically includes a hopper, mixing blades, and an applicator. This equipment enhances efficiency and precision in surface preparation.</p>
            <div className='flex justify-center'>
              <img src="/WorldLeaderPuddyMachine/puddy1jpg.jpg" alt="" />
            </div>
        </Container>
    </div>
  )
}

export default WorldLeader