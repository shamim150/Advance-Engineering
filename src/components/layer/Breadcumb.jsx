import React from 'react'
import TitleHeader from './TitleHeader'
import { FaAngleRight } from 'react-icons/fa'
import { split } from 'postcss/lib/list'

const Breadcumb = ( {className}) => {
  return (
    <div>
       <TitleHeader className={`capitalize ${className}`} headerText={`${window.location.pathname.split('/')[1]}`} /> 
     <p className='flex items-center gap-2 font-DM capitalize'>Home <FaAngleRight /> {`${window.location.pathname.split('/')[1]}`} </p>

    </div>
  )
}

export default Breadcumb