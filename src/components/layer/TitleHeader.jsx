import React from 'react'

const TitleHeader = ({headerText, className}) => {
  return (
    <h2 className={`text-[40px] text-primary font-DM font-bold ${className}`}>{headerText}</h2>
  )
}

export default TitleHeader