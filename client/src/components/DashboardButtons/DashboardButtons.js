import React from 'react'
import { Typography, Box, Grid } from '@mui/material';

const DashboardButtons = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <Box
                sx={{
                padding: 2,
                borderRadius: 4,
                minHeight: 200,
                }}
            >

            </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box
                sx={{
                padding: 2,
                borderRadius: 4,
                minHeight: 200,
                }}
            >
                
            </Box>
        </Grid>
    </Grid>
  );
}

export default DashboardButtons
