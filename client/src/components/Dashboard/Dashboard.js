import React from 'react';
import DashboardButtons from '../DashboardButtons/DashboardButtons';
import ActivityOverview from '../ActivityOverview/ActivityOverview';
import { Typography, Box, Grid } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
        <DashboardButtons />
        <ActivityOverview />
    </Box>
  );
}

export default Dashboard;
