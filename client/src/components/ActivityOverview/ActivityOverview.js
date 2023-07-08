import React from 'react'
import { Typography, Box, Grid, Button, Container } from '@mui/material';
import './OverviewBoxComponent'
import OverviewBoxComponent from './OverviewBoxComponent';

const ActivityOverview = () => {
    return (
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} sx={{display:'flex'}}>
              <Grid container spacing={2}  sx={{flex:1}}>
                <Grid item xs={12} sm={6}>
                  <OverviewBoxComponent title="Avg courses per user" data='16'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <OverviewBoxComponent title="Total lesson views" data='1.2K'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <OverviewBoxComponent title="In progress" data='11'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <OverviewBoxComponent title="Total courses" data='49'/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{display:'flex'}} >
              <Box sx={{ minHeight: 400, backgroundColor: '#f5f5f5', borderRadius: 4, padding: 2, flex: 1 }}>
                <Typography variant="h6">Big Box</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      );
}

export default ActivityOverview
