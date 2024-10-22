import React from 'react'
import Container from './layer/Container'
import { useNavigate } from 'react-router-dom'
import TitleHeader from './layer/TitleHeader'


const OurJourney = () => {

    let nevigate = useNavigate()

  return (
    <div className=''>
        <Container className="bg-[#F7F9FB] ">
            <TitleHeader className='pt-5 text-center' headerText='Our Journey'/>

           <div className='py-5 '>
           <h3 className='text-center md:text-2xl text-base font-bold mb-3 '>Why Customer Love To <br /> <span className='text-secondary'> Choose Us</span>
            </h3>

          <p className='text-center text-base mb-4'>  There are many variations of passages of Lorem Ipsum typesetting industry has been <br /> the industry's standard dummy text ever since the been when an unknown printer.</p>
           </div>
           

            <div className='flex justify-center items-center'>
            <img className='max-w-[700px] h-auto object-cover w-full ' src={'/Homepage/product_1.jpg'} alt="" />
            </div>


            
        </Container> 
    </div>
  )
}

export default OurJourney