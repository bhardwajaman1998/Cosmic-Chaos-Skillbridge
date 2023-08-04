import React from 'react'
import SidebarIcons from './SidebarIcons';
import DividerLine from './DividerLine';

import logo from '../../assets/logo.svg';
import dashboard from '../../assets/dashboard-icon.svg';
import courses from '../../assets/courses-icon.svg';
import trainees from '../../assets/trainees-icon.svg';
import { Link } from 'react-router-dom';


const Sidebar = ({closeSidebar}) => {
    const images = [
        { title: 'Dashboard', imageUrl: dashboard, link: '/dashboard' },
        { title: 'Courses', imageUrl: courses, link: '/courses' },
        { title: 'Trainee', imageUrl: trainees, link: '/trainees' },
      ];

  return (
    <div className='sidebar'>
        <div className='sidebar-logo'>
            <img src={logo} alt="Icon" />
        </div>
        {images.map((item, index) => (
            <Link to={item.link} key={index} className='link-color'>
            <SidebarIcons 
                index={index}
                title={item.title}
                icon={item.imageUrl}
                onClick={closeSidebar}
            />
            </Link>
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
