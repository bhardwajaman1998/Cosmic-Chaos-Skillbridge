import React from 'react'

const SidebarIcons = ({index, title, icon}) => {
  return (
    <div key={index} className='sidebar-icons'>
      <img src={icon} alt="Icon" />
      <span>{title}</span>
    </div>
  )
}

export default SidebarIcons
