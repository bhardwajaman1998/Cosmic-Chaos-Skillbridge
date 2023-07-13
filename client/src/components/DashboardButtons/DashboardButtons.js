import React from 'react'
import newCourse from '../../assets/newCourse-icon.svg';
import newAccount from '../../assets/newAccount-icon.svg';
import employees from '../../assets/employees-icon.svg';
import CreateButton from './CreateButton';

const DashboardButtons = () => {
    const data = [
        { title: 'Create New Course', mobileTitle: 'New Course', imageUrl: newCourse },
        { title: 'Create New Account', mobileTitle: 'New Account', imageUrl: newAccount },
        { title: 'Manage Employees', mobileTitle: 'Employees', imageUrl: employees },
    ];
  return (
    <div className='dashboard-buttons'>
        {data.map((item, index) => (
            <CreateButton
                index={index}
                title={item.title}
                mobileTitle={item.mobileTitle}
                icon={item.imageUrl}
            />
        ))}
    </div>
  )
}

export default DashboardButtons
