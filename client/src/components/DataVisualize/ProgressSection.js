import React from 'react'

const ProgressSection = ({index, title, dataString}) => {
  return (
    <div className='progress-blocks'>
        <h3 className='progress-title'>{title}</h3>
        <span className='progress-data'>{dataString}</span>
    </div>
  )
}

export default ProgressSection
