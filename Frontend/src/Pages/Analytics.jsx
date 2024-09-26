import React from 'react'
import Sidebar from '../Components/Sidebar'
import Box from "@mui/material/Box";
import Navbar from '../Components/Navbar'
import Grid from '@mui/material/Grid2';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import "./Dash.css"
import { GeoChart } from '../Charts/GeoChart';
import { PieChart } from '../Charts/PieChart';
import { HorizontalBarChart } from '../Charts/HorizontalBarChart';
import CountUp from 'react-countup';

const Analytics = () => {
  return (
    <div className='bgcolor'>
    <Navbar />
    <Box height={70}/>
    <Box display='flex' padding={2}>
      <Sidebar/>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Stack container spacing={2}>
        <Stack rowGap={2} columnGap={2} direction='row'> 
        <Card sx={{ width:50 + '%', height: 120, }} className='gradient'>
      <CardContent>
           <Typography gutterBottom variant="body" component="div" sx={{color:'white'}}>
             Visitors
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
            <CountUp
              delay={0.2}
              end={160527}
              duration={1.5} 
            />
            </Typography>
            <Typography gutterBottom variant="body" component="div" sx={{color:'white'}}>
             Since Last Week
            </Typography>
      </CardContent>
         </Card>
         <Card sx={{ width:50 + '%', height: 120,}} className='lightgradient'>
      <CardContent>
           <Typography gutterBottom variant="body" component="div" sx={{color:'white'}}>
             Visitors
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
            <CountUp
              delay={0.2}
              end={22000}
              duration={1.5} 
            />
            </Typography>
            <Typography gutterBottom variant="body" component="div" sx={{color:'white'}}>
             Since Last Week
            </Typography>
      </CardContent>
         </Card>
          </Stack>
        <Stack spacing={2} direction='row'> 
        <Card sx={{ width:50 + '%', height: 120, }} className='gradient'>
      <CardContent>
           <Typography gutterBottom variant="body" component="div" sx={{color:'white'}}>
             Visitors
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
            <CountUp
              delay={0.2}
              end={20000}
              duration={1.5} 
            />
            </Typography>
            <Typography gutterBottom variant="body" component="div" sx={{color:'white'}}>
             Since Last Week
            </Typography>
      </CardContent>
         </Card>
         <Card sx={{ width:50 + '%', height: 120,}} className='lightgradient' >
      <CardContent>
           <Typography gutterBottom variant="body" component="div" sx={{color:'white'}} >
             Visitors
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
            <CountUp
              delay={0.2}
              end={32000}
              duration={1.5} 
            />
            </Typography>
            <Typography gutterBottom variant="body" component="div" sx={{color:'white'}}>
             Since Last Week
            </Typography>
      </CardContent>
         </Card>
          </Stack>
          </Stack>
        </Grid>
        <Grid size={6}>
        <Card sx={{ height: 40 + "vh" }}> 
      <CardContent>
       <HorizontalBarChart />
      </CardContent>
         </Card>
        </Grid>     
        <Grid size={8}>
        <Card sx={{ height: 40 + "vh" }}> 
      <CardContent>
       <GeoChart />
      </CardContent>
         </Card>
        </Grid>
        <Grid size={4}>
        <Card sx={{ height: 40 + "vh" }}> 
      <CardContent>
        <PieChart />
      </CardContent>
         </Card>
        </Grid>
      </Grid>
    </Box>
    </Box>
    </div>
  )
}

export default Analytics;







 