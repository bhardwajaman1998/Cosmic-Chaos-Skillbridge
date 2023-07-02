import React from 'react'
import newCourse from '../../assets/newCourse-icon.svg';
import newAccount from '../../assets/newAccount-icon.svg';
import employees from '../../assets/employees-icon.svg';
import CreateButton from './CreateButton';

const DashboardButtons = () => {
    const data = [
        { title: 'Create new course', imageUrl: newCourse },
        { title: 'Create new account', imageUrl: newAccount },
        { title: 'Manage employees', imageUrl: employees },
      ];
  return (
    <div className='dashboard-buttons'>
        {data.map((item, index) => (
            <CreateButton
                index={index}
                title={item.title}
                icon={item.imageUrl}
            />
        ))}
    </div>
  )
}

export default DashboardButtons
