import React from 'react'
import DoughnutChart from './DoughnutChart'
import ProgressSection from './ProgressSection'
import ChartLabel from './ChartLabel'

const DashboardDataVisualSection = () => {
    const progress = [
        { title: 'Avg. completion rate', dataString: '28%' },
        { title: 'Avg. learning time', dataString: '42 min' },
        { title: 'Employees enrolled', dataString: '6' },
        { title: 'Avg. score', dataString: '78.2' }
      ];
  return (
    <div className='analytics-right'>
        <div className='chart-container'>
            <h3 className='chart-title'>Learning progress</h3>
            <div className='chart-section'>
                <DoughnutChart />
                <ChartLabel />
            </div>
        </div>
        <div className='progress-section'>
            {progress.map((item, index) => (
                <ProgressSection 
                    index={index}
                    title={item.title}
                    dataString={item.dataString}
                />
            ))}
        </div>
    </div>
  )
}

export default DashboardDataVisualSection
