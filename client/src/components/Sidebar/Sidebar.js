import React from 'react'
import SidebarIcons from './SidebarIcons';
import DividerLine from './DividerLine';

import logo from '../../assets/logo.svg';
import dashboard from '../../assets/dashboard-icon.svg';
import courses from '../../assets/courses-icon.svg';
import trainees from '../../assets/trainees-icon.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const Sidebar = ({closeSidebar}) => {
    const images = [
        { title: 'Dashboard', imageUrl: dashboard, link: '/dashboard' },
        { title: 'Courses', imageUrl: courses, link: '/courses' },
        { title: 'Employees', imageUrl: trainees, link: '/trainees' },
      ];
      const isMobile = window.innerWidth <= 1000;
  return (
    <div className='sidebar'>
        {
            isMobile ? 
            (<><FontAwesomeIcon onClick={closeSidebar} className='sidebar-cross' icon={faTimes} />
            <div className='sidebar-logo'>
                <img src={logo} alt="Icon" />
            </div></>) :
            (<div className='sidebar-logo'>
                <img src={logo} alt="Icon" />
            </div>)
        }
        {images.map((item, index) => (
            <Link to={item.link} onClick={closeSidebar} key={index} className='link-color'>
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
