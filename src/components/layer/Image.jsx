import React from 'react'
import { Link } from 'react-router-dom'


const Image = ({href, scr, alt, className, imageClass}) => {
  return (
    
    <Link className={`${className}`} to={href}> 
    <picture>
        <img className={`block ${imageClass}`} src={scr} alt={alt} /> 
    </picture>
    </Link>
  )
}

export default Image