import React from 'react'
import SidebarIcons from './SidebarIcons';
import DividerLine from './DividerLine';

import logo from '../../assets/logo.svg';
import dashboard from '../../assets/dashboard-icon.svg';
import courses from '../../assets/courses-icon.svg';
import trainees from '../../assets/trainees-icon.svg';
import { Link } from 'react-router-dom';
// import Home from '../../pages/Home/Home'


const Sidebar = () => {
    const images = [
        { title: 'Dashboard', imageUrl: dashboard, link: '/dashboard' },
        { title: 'Courses', imageUrl: courses, link: '/courses' },
        { title: 'Trainee', imageUrl: trainees, link: '/trainees' },
      ];

  return (
    <div className='sidebar'>
        <Link to = "/dashboard">
            <div className='sidebar-logo'>
                <img src={logo} alt="Icon" />
            </div>
        </Link>
        {images.map((item, index) => (
            <Link to={item.link} key={index} className='link-color'>
            <SidebarIcons 
                index={index}
                title={item.title}
                icon={item.imageUrl}
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
