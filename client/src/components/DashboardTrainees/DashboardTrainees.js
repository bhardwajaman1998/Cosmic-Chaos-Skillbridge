import React from 'react'
import Select from "react-select";
import logo from '../../assets/avatar.png';
import TraineeSection from './TraineeSection';

const DashboardTrainees = () => {
    const options = [
        { value: "test value 1", label: "test value 1" },
        { value: "test value 2", label: "test value 2" }
      ];
      const customStyle = {
        dropdownIndicator: (base, state) => ({
          ...base,
          transition: "all .6s ease",
          transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null
        })
      };

      const empData = [
        { name: 'Aman', imageUrl: logo, learningTime: '42min', finalScore: '87', courseStatus: 'Completed'},
        { name: 'Aman', imageUrl: logo, learningTime: '42min', finalScore: '87', courseStatus: 'Completed'},
        { name: 'Aman', imageUrl: logo, learningTime: '42min', finalScore: '87', courseStatus: 'Completed'},
        { name: 'Aman', imageUrl: logo, learningTime: '42min', finalScore: '87', courseStatus: 'Completed'},
        { name: 'Aman', imageUrl: logo, learningTime: '42min', finalScore: '87', courseStatus: 'Completed'},
        { name: 'Aman', imageUrl: logo, learningTime: '42min', finalScore: '87', courseStatus: 'Completed'},
        { name: 'Aman', imageUrl: logo, learningTime: '42min', finalScore: '87', courseStatus: 'Completed'},
      ];


  return (
    <div className='analytics-left'>
      <h1>
        Learning Analytics
      </h1>
      <div className='filter-section'>
        <Select className='filter-select' label='Course' options={options} openMenuOnFocus styles={customStyle} />
        <Select className='filter-select' label='Last week' options={options} openMenuOnFocus styles={customStyle} />
      </div>
      <div className='trainee-section'>
        <h3 className='trainee-section-title'>Employees</h3>
        <div className='trainee-list'>
            <table>
                <thead>
                    <th></th>
                    <th>Name</th>
                    <th>Learning Time</th>
                    <th>Final Score</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {empData.map((item, index) => (
                        <TraineeSection 
                            index={index}
                            name={item.name}
                            imageUrl={item.imageUrl}
                            learningTime={item.learningTime}
                            finalScore={item.finalScore}
                            courseStatus={item.courseStatus}
                        />
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default DashboardTrainees
