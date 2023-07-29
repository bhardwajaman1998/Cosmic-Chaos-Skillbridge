import React from 'react'

const ChartLabel = () => {
  return (
    <div class="dot-container">
        <div className='label-container'>
            <div class="dots completed" data-status="Completed"></div>
            <span class="label">Completed</span>
        </div>
        <div className='label-container'>
            <div class="dots progress" data-status="In Progress"></div>
            <span class="label">In Progress</span>
        </div>
        <div className='label-container'>
            <div class="dots notStarted" data-status="Not Started"></div>
            <span class="label">Not Started</span>
        </div>
    </div>
  )
}

export default ChartLabel
