import React from 'react'

const SidebarIcons = ({index, title, icon, onClick}) => {
  return (
    <div key={index} className='sidebar-icons' onClick={onClick}>
      <img src={icon} alt="Icon" />
      <span>{title}</span>
    </div>
  )
}

export default SidebarIcons
