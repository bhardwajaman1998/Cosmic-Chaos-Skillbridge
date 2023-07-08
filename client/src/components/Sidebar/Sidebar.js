import React from 'react'
import SidebarIcons from './SidebarIcons';
import DividerLine from './DividerLine';

import logo from '../../assets/logo.svg';
import dashboard from '../../assets/dashboard-icon.svg';
import courses from '../../assets/courses-icon.svg';
import trainees from '../../assets/trainees-icon.svg';


const Sidebar = () => {
    const images = [
        { title: 'Dashboard', imageUrl: dashboard },
        { title: 'Courses', imageUrl: courses },
        { title: 'Trainee', imageUrl: trainees },
      ];

  return (
    <div className='sidebar'>
        <div className='sidebar-logo'>
            <img src={logo} alt="Icon" />
        </div>
        {images.map((item, index) => (
            <SidebarIcons 
                index={index}
                title={item.title}
                icon={item.imageUrl}
            />
        ))}
      <DividerLine/>
        <SidebarIcons 
            title={"Settings"}
            icon={dashboard}
        />
    </div>
  )
}

export default Sidebar
