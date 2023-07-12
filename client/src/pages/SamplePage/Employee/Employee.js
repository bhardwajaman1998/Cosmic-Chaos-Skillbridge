import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import Header from '../../../components/Header/Header'
// import DashboardButtons from '../../../components/DashboardButtons/DashboardButtons'
import DashboardTrainees from '../../../components/DashboardTrainees/DashboardTrainees'
import DashboardDataVisualSection from '../../../components/DataVisualize/DashboardDataVisualSection'
// const c1 = () =>{
//     return (
//         <div>Content1</div>
//       ) 
// }
// const c2 = () =>{
//     return (
//         <div>Content2</div>
//       ) 
// }
// const c3 = () =>{
//     return (
//         <div>Content3</div>
//       ) 
// }
// const c4 = () =>{
//     return (
//         <div>Content4</div>
//       ) 
// }
// const c5 = () =>{
//     return (
//         <div>Content5</div>
//       ) 
// }
const Employee = () => {

  const pageTitle="Trainee"
  
  return (
    <React.Fragment>
        <div className='dashboard-layout'>
            <section>
                <div  className="layout text-2xl text-white">
                    <div className='layout-sidebar'>
                        <Sidebar />
                    </div>
                    <div className='layout-header'>
                        <Header title={pageTitle} />
                    </div> 
                    <div className='layout-main'>
                        {/* <DashboardButtons /> */}
                    </div> 
                    <div className='layout-left'>
                        <DashboardTrainees />
                    </div> 
                    <div className='layout-right'>
                        <DashboardDataVisualSection />
                    </div> 
                </div>   
            </section>
        </div>
    </React.Fragment>
  )
}

export default Employee