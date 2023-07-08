import React from 'react'

const ProgressSection = ({index, title, dataString}) => {
  return (
    <div className='progress-blocks'>
        <h3>{title}</h3>
        <span>{dataString}</span>
    </div>
  )
}

export default ProgressSection
