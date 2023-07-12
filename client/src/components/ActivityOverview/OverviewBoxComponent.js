import React from 'react'
import {  Box } from '@mui/material';

const OverviewBoxComponent = ({title, data}) => {
  return (
    <Box sx={{ minHeight: 200, backgroundColor: 'white', borderRadius: 4, padding: 2, borderWidth: 3.5, borderColor: '#6AD38B', borderStyle: 'solid' }}>
        <h4>{title}</h4>
        <p class='overview_data'>{data}</p>
    </Box>
  )
}

export default OverviewBoxComponent
